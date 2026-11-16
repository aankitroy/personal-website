import React from 'react';

/*
 * Abstract avatars: a bright character shape with a tiny face, set on an ink disc.
 * Deliberately not human portraits, so no avatar ever implies a person's gender or
 * looks. The shape, colour and expression are picked deterministically from the
 * name, so the same person always gets the same character on server and client.
 */

const INK = '#141210';
const COLORS = ['#f6a6b2', '#4cb26e', '#f7a24a', '#7fcff5', '#3b82f6', '#f05a45', '#f9a8c9', '#fcd34d', '#a78bfa', '#5eead4'];

function hash(name: string) {
  let h = 2166136261;
  for (let i = 0; i < name.length; i++) {
    h ^= name.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/* Each shape is drawn on a 64×64 board and clipped to the disc. `face` is where its eyes sit. */
const SHAPES: { d: string; face: [number, number]; tilt?: number }[] = [
  // trapezoid block
  { d: 'M20 14 H44 L54 64 H10 Z', face: [32, 36] },
  // soft blob
  { d: 'M14 30 C12 14, 34 6, 48 14 C60 22, 58 44, 50 56 C44 66, 22 66, 14 54 C8 46, 16 40, 14 30 Z', face: [36, 34] },
  // tilted square
  { d: 'M12 22 L42 8 L60 40 L30 58 Z', face: [36, 32], tilt: -18 },
  // worm
  { d: 'M6 52 C6 40, 18 40, 24 44 C30 48, 34 40, 30 30 C26 18, 36 10, 46 14 C58 18, 58 34, 50 40 C42 46, 44 56, 54 58 L60 64 H6 Z', face: [44, 24] },
  // spiky burst
  { d: 'M10 40 L4 32 L14 30 L10 20 L20 22 L22 12 L30 20 L36 10 L40 22 L50 16 L48 28 L60 30 L52 38 L64 46 L64 64 H10 Z', face: [32, 38] },
  // four-leaf flower
  { d: 'M32 30 C20 30, 14 22, 20 14 C26 6, 34 12, 34 20 C36 10, 48 8, 52 16 C56 24, 48 30, 40 30 C50 32, 54 42, 46 48 C40 52, 34 48, 34 42 L34 64 H28 L30 44 C26 50, 16 50, 14 42 C12 34, 22 30, 32 30 Z', face: [32, 32] },
  // scalloped cloud
  { d: 'M8 40 C4 32, 12 26, 16 30 C14 20, 26 16, 28 24 C30 14, 42 14, 42 24 C46 16, 58 20, 54 30 C60 28, 64 38, 58 42 L60 64 H6 Z', face: [32, 42] },
  // bell
  { d: 'M24 10 H40 V20 C52 26, 56 40, 58 64 H6 C8 40, 12 26, 24 20 Z', face: [32, 42] },
];

const FACES = ['calm', 'smile', 'wink', 'sleepy', 'grin', 'flat'] as const;

function Face({ x, y, kind }: { x: number; y: number; kind: (typeof FACES)[number] }) {
  const s = { stroke: INK, strokeWidth: 1.8, strokeLinecap: 'round' as const, fill: 'none' };
  const eyeL = x - 5;
  const eyeR = x + 5;
  const eyes =
    kind === 'sleepy' ? (
      <>
        <path d={`M${eyeL - 2} ${y} q2 1.6 4 0`} {...s} />
        <path d={`M${eyeR - 2} ${y} q2 1.6 4 0`} {...s} />
      </>
    ) : kind === 'wink' ? (
      <>
        <circle cx={eyeL} cy={y} r="1.5" fill={INK} />
        <path d={`M${eyeR - 2} ${y} h4`} {...s} />
      </>
    ) : kind === 'flat' ? (
      <>
        <path d={`M${eyeL - 2} ${y} h4`} {...s} />
        <path d={`M${eyeR - 2} ${y} h4`} {...s} />
      </>
    ) : (
      <>
        <circle cx={eyeL} cy={y} r="1.5" fill={INK} />
        <circle cx={eyeR} cy={y} r="1.5" fill={INK} />
      </>
    );
  const my = y + 6;
  const mouth =
    kind === 'grin' ? (
      <path d={`M${x - 4} ${my} q4 4 8 0 z`} fill={INK} />
    ) : kind === 'flat' || kind === 'calm' ? (
      <path d={`M${x - 2.5} ${my} h5`} {...s} />
    ) : (
      <path d={`M${x - 3.5} ${my - 0.5} q3.5 3 7 0`} {...s} />
    );
  return (
    <g>
      {eyes}
      {mouth}
    </g>
  );
}

export function NotionAvatar({ name, size = 44 }: { name: string; size?: number }) {
  const h = hash(name);
  const shape = SHAPES[h % SHAPES.length];
  const color = COLORS[(h >>> 4) % COLORS.length];
  const face = FACES[(h >>> 9) % FACES.length];
  const id = `av-${h.toString(36)}`;
  const [fx, fy] = shape.face;

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden focusable="false" style={{ display: 'block' }}>
      <defs>
        <clipPath id={id}>
          <circle cx="32" cy="32" r="32" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect width="64" height="64" fill={INK} />
        <g transform={shape.tilt ? `rotate(${shape.tilt} 32 32)` : undefined}>
          <path d={shape.d} fill={color} />
          <Face x={fx} y={fy} kind={face} />
        </g>
      </g>
    </svg>
  );
}
