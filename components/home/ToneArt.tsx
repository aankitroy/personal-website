import React from 'react';

/*
 * Quiet drawn shapes for the track-record cards. Each sits in the card's
 * bottom-right corner, drawn in the card's tone colour (currentColor) at a few
 * opacities, and settles in once when the card reveals.
 */
export type ToneArtKind = 'bars' | 'rise' | 'wave' | 'rings' | 'orbit' | 'pulse';

const svg = {
  viewBox: '0 0 240 160',
  preserveAspectRatio: 'xMaxYMax meet',
  'aria-hidden': true,
  focusable: false,
} as const;

export function ToneArt({ kind, className }: { kind: ToneArtKind; className?: string }) {
  switch (kind) {
    // Sessions a day: a run of bars, the last one carrying the load.
    case 'bars':
      return (
        <svg {...svg} className={className}>
          {[38, 52, 46, 70, 64, 88, 82, 108, 126].map((h, i) => (
            <rect
              key={i}
              x={20 + i * 24}
              y={160 - h}
              width="16"
              height={h}
              rx="4"
              fill="currentColor"
              opacity={i === 8 ? 0.95 : 0.18 + i * 0.06}
              data-art-rise
              style={{ '--i': i } as React.CSSProperties}
            />
          ))}
        </svg>
      );
    // Launch time cut: three steps, each lower than the last.
    case 'rise':
      return (
        <svg {...svg} className={className}>
          {[
            { x: 110, h: 104, o: 0.3 },
            { x: 154, h: 72, o: 0.55 },
            { x: 198, h: 40, o: 0.95 },
          ].map((b, i) => (
            <rect key={i} x={b.x} y={160 - b.h} width="40" height={b.h + 12} rx="8" fill="currentColor" opacity={b.o} data-art-rise style={{ '--i': i } as React.CSSProperties} />
          ))}
        </svg>
      );
    // Response time: a signal that settles.
    case 'wave':
      return (
        <svg {...svg} className={className}>
          {[0, 1, 2].map((k) => (
            <path
              key={k}
              d={`M0 ${96 + k * 14} C 40 ${40 + k * 10}, 70 ${150 - k * 6}, 110 ${100 + k * 8} S 180 ${84 + k * 10}, 240 ${104 + k * 12}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={k === 0 ? 2.5 : 1.5}
              strokeLinecap="round"
              opacity={k === 0 ? 0.9 : 0.35 - k * 0.08}
              pathLength={1}
              data-art-draw
              style={{ '--i': k } as React.CSSProperties}
            />
          ))}
        </svg>
      );
    // Stillness: concentric rings.
    case 'rings':
      return (
        <svg {...svg} className={className}>
          {[64, 48, 32, 16].map((r, i) => (
            <circle key={r} cx="176" cy="104" r={r} fill="none" stroke="currentColor" strokeWidth={i === 3 ? 6 : 1.5} opacity={0.25 + i * 0.2} data-art-pop style={{ '--i': i } as React.CSSProperties} />
          ))}
        </svg>
      );
    // Audio in many languages: arcs spreading from a source.
    case 'orbit':
      return (
        <svg {...svg} className={className}>
          <circle cx="196" cy="128" r="10" fill="currentColor" opacity="0.95" data-art-pop />
          {[34, 60, 88, 118].map((r, i) => (
            <path
              key={r}
              d={`M${196 - r} 128 A ${r} ${r} 0 0 1 ${196} ${128 - r}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={0.75 - i * 0.16}
              pathLength={1}
              data-art-draw
              style={{ '--i': i + 1 } as React.CSSProperties}
            />
          ))}
        </svg>
      );
    // Building now: a live signal.
    case 'pulse':
      return (
        <svg {...svg} className={className}>
          <path
            d="M112 112 H 146 L 158 80 L 170 136 L 184 60 L 198 120 L 208 104 H 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.85"
            pathLength={1}
            data-art-draw
          />
          <circle cx="208" cy="104" r="4" fill="currentColor" data-art-pop style={{ '--i': 3 } as React.CSSProperties} />
        </svg>
      );
  }
}
