'use client';

import { useEffect, useRef } from 'react';

/**
 * A live "confidence surface": a slowly drifting probability field drawn as topographic contours.
 * The brighter contour is the p = 0.80 threshold. The pointer presses a gentle basin into the field.
 * Pure canvas 2D, ~30 fps, paused off-screen and in background tabs, a single static frame for reduced motion.
 */
type Props = {
  className?: string;
  /** Show the highlighted threshold contour and its label. */
  threshold?: boolean;
  /** Overall line strength, 0–1. */
  intensity?: number;
  /** Draw in champagne for a near-black surface. Otherwise colours follow the theme tokens. */
  onInk?: boolean;
};

type Rgb = readonly [number, number, number];
const CHAMPAGNE_LINE: Rgb = [200, 168, 110];
const CHAMPAGNE_BRIGHT: Rgb = [236, 218, 176];
const rgba = ([r, g, b]: Rgb, a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

/** Reads an "r g b" custom property, e.g. --field-rgb: 70 52 28. */
function readRgb(el: Element, name: string, fallback: Rgb): Rgb {
  const parts = getComputedStyle(el).getPropertyValue(name).trim().split(/[\s,]+/).map(Number);
  return parts.length === 3 && parts.every((n) => Number.isFinite(n)) ? (parts as unknown as Rgb) : fallback;
}

const LEVELS = Array.from({ length: 19 }, (_, i) => (i + 1) / 20); // 0.05 … 0.95
const THRESHOLD = 0.8;

export function DecisionField({ className, threshold = true, intensity = 1, onInk = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fontFamily = getComputedStyle(canvas).fontFamily || 'system-ui, sans-serif';
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let cell = 12;
    let field = new Float32Array(0);
    let raf = 0;
    let running = false;
    let last = 0;
    const start = performance.now();
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, strength: 0, target: 0 };
    let labelPos: { x: number; y: number } | null = null;

    // Line colours: champagne on ink, otherwise the theme's field tokens (re-read when the theme flips).
    let lineRgb: Rgb = CHAMPAGNE_LINE;
    let brightRgb: Rgb = CHAMPAGNE_BRIGHT;
    let alphaScale = 1;
    const readColors = () => {
      if (onInk) return;
      lineRgb = readRgb(canvas, '--field-rgb', [70, 52, 28]);
      brightRgb = readRgb(canvas, '--field-accent-rgb', [160, 122, 69]);
      // Dark ink on cream reads stronger than light lines on black, so it is drawn lighter.
      alphaScale = document.documentElement.classList.contains('dark') ? 0.75 : 0.62;
    };
    readColors();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = w < 700 ? 10 : 12;
      cols = Math.ceil(w / cell) + 1;
      rows = Math.ceil(h / cell) + 1;
      field = new Float32Array(cols * rows);
    };

    // Smooth, organic scalar field from a few drifting basins plus layered sine "terrain".
    const sample = (x: number, y: number, t: number) => {
      const nx = x / Math.max(w, 1);
      const ny = y / Math.max(h, 1);
      const narrow = w < 700;
      const cx = narrow ? 0.62 : 0.72;
      const cy = narrow ? 0.86 : 0.42;
      let v = 0;
      v += 0.72 * Math.exp(-((nx - cx - 0.06 * Math.sin(t * 0.11)) ** 2 + (ny - cy - 0.08 * Math.cos(t * 0.09)) ** 2) / (narrow ? 0.05 : 0.07));
      v += 0.45 * Math.exp(-((nx - 0.3 + 0.07 * Math.cos(t * 0.07)) ** 2 + (ny - 0.78 + 0.05 * Math.sin(t * 0.13)) ** 2) / 0.05);
      v += 0.3 * Math.exp(-((nx - 0.95 + 0.05 * Math.sin(t * 0.05)) ** 2 + (ny - 0.95) ** 2) / 0.04);
      v += 0.09 * Math.sin(nx * 6.1 + t * 0.21 + Math.sin(ny * 3.7 - t * 0.13) * 1.4);
      v += 0.06 * Math.sin(ny * 8.3 - t * 0.17 + Math.cos(nx * 4.9 + t * 0.08) * 1.2);
      v += 0.035 * Math.sin((nx + ny) * 13.0 + t * 0.29);
      if (pointer.strength > 0.001) {
        const dx = (x - pointer.x) / 170;
        const dy = (y - pointer.y) / 170;
        v -= 0.32 * pointer.strength * Math.exp(-(dx * dx + dy * dy));
      }
      return 0.12 + v * 0.98;
    };

    const draw = (now: number) => {
      const t = reduced ? 18 : (now - start) / 1000;
      // ease the pointer basin
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      pointer.strength += (pointer.target - pointer.strength) * 0.05;

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) field[j * cols + i] = sample(i * cell, j * cell, t);
      }

      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      let best: { x: number; y: number; d: number } | null = null;
      const targetX = w * (w < 700 ? 0.62 : 0.74);
      const targetY = h * (w < 700 ? 0.78 : 0.3);

      for (const level of LEVELS) {
        const isThreshold = threshold && Math.abs(level - THRESHOLD) < 1e-6;
        const major = Math.round(level * 20) % 4 === 0;
        ctx.beginPath();
        for (let j = 0; j < rows - 1; j++) {
          for (let i = 0; i < cols - 1; i++) {
            const a = field[j * cols + i];
            const b = field[j * cols + i + 1];
            const c = field[(j + 1) * cols + i + 1];
            const d = field[(j + 1) * cols + i];
            const idx = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
            if (idx === 0 || idx === 15) continue;
            const x = i * cell;
            const y = j * cell;
            const top = () => [x + cell * ((level - a) / (b - a)), y] as const;
            const right = () => [x + cell, y + cell * ((level - b) / (c - b))] as const;
            const bottom = () => [x + cell * ((level - d) / (c - d)), y + cell] as const;
            const left = () => [x, y + cell * ((level - a) / (d - a))] as const;
            const seg = (p: readonly [number, number], q: readonly [number, number]) => {
              ctx.moveTo(p[0], p[1]);
              ctx.lineTo(q[0], q[1]);
              if (isThreshold) {
                const dd = (p[0] - targetX) ** 2 + (p[1] - targetY) ** 2 * 3;
                if (!best || dd < best.d) best = { x: p[0], y: p[1], d: dd };
              }
            };
            switch (idx) {
              case 1: case 14: seg(left(), bottom()); break;
              case 2: case 13: seg(bottom(), right()); break;
              case 3: case 12: seg(left(), right()); break;
              case 4: case 11: seg(top(), right()); break;
              case 5: seg(left(), top()); seg(bottom(), right()); break;
              case 6: case 9: seg(top(), bottom()); break;
              case 7: case 8: seg(left(), top()); break;
              case 10: seg(top(), right()); seg(left(), bottom()); break;
            }
          }
        }
        if (isThreshold) {
          ctx.strokeStyle = rgba(brightRgb, intensity);
          ctx.lineWidth = 1.6;
        } else {
          ctx.strokeStyle = rgba(lineRgb, (major ? 0.5 : 0.26) * intensity * alphaScale);
          ctx.lineWidth = major ? 0.9 : 0.6;
        }
        ctx.stroke();
      }

      // Threshold label rides along the bright contour.
      if (threshold && best) {
        const b = best as { x: number; y: number };
        labelPos = labelPos ? { x: labelPos.x + (b.x - labelPos.x) * 0.2, y: labelPos.y + (b.y - labelPos.y) * 0.2 } : { x: b.x, y: b.y };
        const { x, y } = labelPos;
        ctx.fillStyle = rgba(brightRgb, intensity);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = rgba(brightRgb, 0.5 * intensity);
        ctx.lineWidth = 0.8;
        const dir = x + 130 > w ? -1 : 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 26 * dir, y - 26);
        ctx.lineTo(x + 112 * dir, y - 26);
        ctx.stroke();
        ctx.font = `500 11px ${fontFamily}`;
        ctx.fillStyle = rgba(brightRgb, 0.95 * intensity);
        ctx.textAlign = dir === 1 ? 'left' : 'right';
        ctx.fillText('p = 0.80 threshold', x + 30 * dir, y - 32);
      }
    };

    const loop = (now: number) => {
      if (!running) return;
      if (now - last > 33) {
        last = now;
        draw(now);
      }
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw(performance.now());

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !document.hidden) play();
      else stop();
    });
    io.observe(canvas);
    const onVis = () => (document.hidden || !visible ? stop() : play());
    document.addEventListener('visibilitychange', onVis);

    const themeWatch = new MutationObserver(() => {
      readColors();
      draw(performance.now());
    });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const host = canvas.parentElement ?? canvas;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - r.left;
      pointer.ty = e.clientY - r.top;
      if (pointer.x < -9000) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      pointer.target = 1;
    };
    const onLeave = () => (pointer.target = 0);
    if (!reduced) {
      host.addEventListener('pointermove', onMove);
      host.addEventListener('pointerleave', onLeave);
    }

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      themeWatch.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [threshold, intensity, onInk]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
