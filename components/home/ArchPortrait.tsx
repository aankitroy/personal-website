import React from 'react';
import s from '../../app/home.module.css';

/**
 * The portrait in an arch: a hairline bronze outline sits a few pixels off the photo,
 * and two small glass captions rest on its edges.
 */
export function ArchPortrait({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <figure className={`${s.arch} ${className}`} style={style}>
      <span className={s.archFrame} aria-hidden />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/aankitroy-portrait.jpg" alt="Portrait of Aankit Roy" width={960} height={1280} className={s.archImg} />
      <figcaption className={`${s.archChip} ${s.archChipNow}`}>
        <span className={s.live} aria-hidden />
        <span>
          <strong>Aankit Roy</strong>
          Co-founder, stealth AI startup
        </span>
      </figcaption>
      <p className={`${s.archChip} ${s.archChipYears}`} aria-hidden>
        <strong>12</strong>
        <span>
          years building
          <br />
          at scale
        </span>
      </p>
    </figure>
  );
}
