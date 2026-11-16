'use client';

import React, { useState } from 'react';
import { useCount, useInView } from './useInView';
import f from './figures.module.css';

const delay = (ms: number) => ({ transitionDelay: `${ms}ms` }) as React.CSSProperties;

/* ───────────────────────── Fig. 1: shared-context decision architecture ───────────────────────── */

const branches = [
  { x: 100, q: 'Which queue?', opts: [['payments', 0.81], ['risk', 0.15], ['ops', 0.04]] },
  { x: 300, q: 'Is it urgent?', opts: [['yes', 0.64], ['no', 0.36]] },
  { x: 500, q: 'Needs a person?', opts: [['yes', 0.22], ['no', 0.78]] },
] as const;

// Deterministic token heights so server and client render the same SVG.
const tokens = Array.from({ length: 64 }, (_, i) => 8 + ((i * 37) % 17));

export function DecisionArchitectureFigure() {
  const [ref, on] = useInView<HTMLElement>(0.3);
  return (
    <figure ref={ref} className={`${f.figure} ${on ? f.on : ''}`}>
      <svg viewBox="0 0 600 360" className={f.svg} role="img" aria-labelledby="fig1-title">
        <title id="fig1-title">
          One shared context is encoded once, three typed questions read from it in parallel, and each returns a probability for every allowed option.
        </title>

        {/* context */}
        <rect x="20" y="20" width="560" height="58" className={f.box} />
        {tokens.map((h, i) => (
          <rect
            key={i}
            x={34 + i * 8.25}
            y={49 - h / 2}
            width="3"
            height={h}
            className={f.token}
            style={delay(i * 14)}
          />
        ))}
        <text x="20" y="100" className={f.label}>Shared context, encoded once</text>
        <text x="580" y="100" textAnchor="end" className={f.labelMuted}>keys and values cached</text>

        {/* branches */}
        {branches.map((b, i) => (
          <g key={b.q}>
            <path
              d={`M300 112 C300 140, ${b.x} 128, ${b.x} 158`}
              pathLength={1}
              className={f.branch}
              style={delay(900 + i * 120)}
            />
            <rect x={b.x - 88} y="158" width="176" height="42" className={`${f.node} ${f.fade}`} style={delay(1200 + i * 120)} />
            <text x={b.x} y="184" textAnchor="middle" className={`${f.nodeText} ${f.fade}`} style={delay(1200 + i * 120)}>
              {b.q}
            </text>
            {b.opts.map(([label, p], j) => {
              const y = 236 + j * 34;
              const x0 = b.x - 88;
              return (
                <g key={label} className={f.fade} style={delay(1500 + i * 120 + j * 80)}>
                  <text x={x0} y={y + 5} className={f.optText}>{label}</text>
                  <rect x={x0 + 74} y={y - 4} width="64" height="8" className={f.track} />
                  <rect
                    x={x0 + 74}
                    y={y - 4}
                    width={64 * p}
                    height="8"
                    className={`${f.bar} ${p === Math.max(...b.opts.map((o) => o[1])) ? f.barTop : ''}`}
                    style={delay(1700 + i * 120 + j * 80)}
                  />
                  <text x={x0 + 176} y={y + 5} textAnchor="end" className={f.optValue}>
                    {p.toFixed(2).slice(1)}
                  </text>
                </g>
              );
            })}
          </g>
        ))}
        <text x="300" y="352" textAnchor="middle" className={`${f.labelMuted} ${f.fade}`} style={delay(2200)}>
          Three answers, each a probability over its allowed options
        </text>
      </svg>
      <figcaption className={f.caption}>
        <span>Fig. 1</span> Decide, don&rsquo;t talk. The context is read once; typed questions branch from it in parallel and
        return calibrated probabilities instead of paragraphs. Five questions over a 2,000-token context need roughly 4.7&times; less
        prefill than five separate calls.
      </figcaption>
    </figure>
  );
}

/* ───────────────────────── Fig. 2: calibration and the threshold ───────────────────────── */

const X0 = 64, X1 = 572, Y0 = 368, Y1 = 28;
const px = (v: number) => X0 + (X1 - X0) * v;
const py = (v: number) => Y0 - (Y0 - Y1) * v;
const line = (pts: number[][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${px(x).toFixed(1)} ${py(y).toFixed(1)}`).join(' ');

// Illustrative curves: a chat model's stated confidence vs a calibrated decision model.
const overconfident = [[0.5, 0.42], [0.6, 0.47], [0.7, 0.52], [0.8, 0.58], [0.9, 0.66], [0.97, 0.71]];
const calibrated = [[0.1, 0.12], [0.3, 0.28], [0.5, 0.52], [0.7, 0.69], [0.8, 0.81], [0.9, 0.89], [0.97, 0.96]];

export function CalibrationFigure() {
  const [ref, on] = useInView<HTMLElement>(0.3);
  return (
    <figure ref={ref} className={`${f.figure} ${on ? f.on : ''}`}>
      <svg viewBox="0 0 600 430" className={f.svg} role="img" aria-labelledby="fig2-title">
        <title id="fig2-title">
          Reliability diagram. A calibrated model tracks the diagonal, so a 0.8 answer is right about 80% of the time. An overconfident model sits far below it.
        </title>

        {/* zones */}
        <rect x={px(0.8)} y={Y1} width={X1 - px(0.8)} height={Y0 - Y1} className={`${f.zone} ${f.fade}`} style={delay(1600)} />
        <text x={px(0.4)} y={Y1 + 22} textAnchor="middle" className={`${f.labelMuted} ${f.fade}`} style={delay(1700)}>a person reviews</text>
        <text x={(px(0.8) + X1) / 2} y={Y1 + 22} textAnchor="middle" className={`${f.label} ${f.fade}`} style={delay(1700)}>acts on its own</text>

        {/* grid */}
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((v) => (
          <g key={v}>
            <line x1={px(v)} x2={px(v)} y1={Y0} y2={Y1} className={f.grid} />
            <line x1={X0} x2={X1} y1={py(v)} y2={py(v)} className={f.grid} />
            <text x={px(v)} y={Y0 + 22} textAnchor="middle" className={f.tick}>{v.toFixed(1)}</text>
            <text x={X0 - 12} y={py(v) + 4} textAnchor="end" className={f.tick}>{v.toFixed(1)}</text>
          </g>
        ))}
        <text x={(X0 + X1) / 2} y={Y0 + 52} textAnchor="middle" className={f.labelMuted}>Stated confidence</text>
        <text x={18} y={(Y0 + Y1) / 2} textAnchor="middle" className={f.labelMuted} transform={`rotate(-90 18 ${(Y0 + Y1) / 2})`}>
          How often it was right
        </text>

        {/* ideal */}
        <path d={line([[0, 0], [1, 1]])} pathLength={1} className={f.ideal} style={delay(200)} />

        {/* threshold */}
        <line x1={px(0.8)} x2={px(0.8)} y1={Y0} y2={Y1} className={`${f.threshold} ${f.fade}`} style={delay(1500)} />

        {/* curves */}
        <path d={line(overconfident)} pathLength={1} className={f.curveMuted} style={delay(500)} />
        {overconfident.map(([x, y], i) => (
          <circle key={`o${i}`} cx={px(x)} cy={py(y)} r="3.5" className={`${f.dotMuted} ${f.fade}`} style={delay(700 + i * 90)} />
        ))}
        <path d={line(calibrated)} pathLength={1} className={f.curve} style={delay(1000)} />
        {calibrated.map(([x, y], i) => (
          <circle key={`c${i}`} cx={px(x)} cy={py(y)} r="4" className={`${f.dot} ${f.fade}`} style={delay(1200 + i * 90)} />
        ))}

        {/* legend */}
        <g className={f.fade} style={delay(1900)}>
          <line x1={px(0.4)} x2={px(0.45)} y1={py(0.16)} y2={py(0.16)} className={f.curve} style={{ strokeDasharray: 'none' }} />
          <text x={px(0.47)} y={py(0.16) + 4} className={f.optText}>Calibrated model</text>
          <line x1={px(0.4)} x2={px(0.45)} y1={py(0.07)} y2={py(0.07)} className={f.curveMuted} style={{ strokeDasharray: 'none' }} />
          <text x={px(0.47)} y={py(0.07) + 4} className={f.optText}>Confidence written as text</text>
        </g>
      </svg>
      <figcaption className={f.caption}>
        <span>Fig. 2</span> A threshold only works if the probability is honest. Calibrated answers above 0.8 run on their own;
        everything below goes to a person. Illustrative curves.
      </figcaption>
    </figure>
  );
}

/* ───────────────────────── Measured in production ───────────────────────── */

function Bar({ label, value, pct, on, d, accent }: { label: string; value: string; pct: number; on: boolean; d: number; accent?: boolean }) {
  return (
    <div className={f.meterRow}>
      <span>{label}</span>
      <span className={f.meterTrack}>
        <span
          className={`${f.meterFill} ${accent ? f.meterAccent : ''}`}
          style={{ transform: `scaleX(${on ? pct : 0})`, transitionDelay: `${d}ms` }}
        />
      </span>
      <span className={f.meterValue}>{value}</span>
    </div>
  );
}

export function Measures() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const latency = 1500 - useCount(1100, on, 2200);
  const cost = useCount(75, on, 2000);
  const users = useCount(5, on, 2000);
  return (
    <div ref={ref} className={f.measures}>
      <article className={f.measure}>
        <p className={f.measureOrg}>Writesonic</p>
        <p className={f.measureBig}>
          {Math.round(latency).toLocaleString('en-US')}
          <small>ms</small>
        </p>
        <p className={f.measureWhat}>Response time for 3M+ paying users, with infrastructure cost halved.</p>
        <div className={f.meter}>
          <Bar label="Before" value="1,500 ms" pct={1} on={on} d={0} />
          <Bar label="After" value="400 ms" pct={400 / 1500} on={on} d={500} accent />
        </div>
      </article>

      <article className={f.measure}>
        <p className={f.measureOrg}>GeoIQ</p>
        <p className={f.measureBig}>
          &minus;{Math.round(cost)}
          <small>%</small>
        </p>
        <p className={f.measureWhat}>Agent cost, on agentic systems handling 10,000 sessions a day in production.</p>
        <div className={f.meter}>
          <Bar label="Before" value="100" pct={1} on={on} d={150} />
          <Bar label="After" value="25" pct={0.25} on={on} d={650} accent />
        </div>
      </article>

      <article className={f.measure}>
        <p className={f.measureOrg}>Khabri, YC S19</p>
        <p className={f.measureBig}>
          {users.toFixed(users < 4.95 ? 1 : 0)}
          <small>M+</small>
        </p>
        <p className={f.measureWhat}>Listeners on a vernacular audio platform, served with 14 ms response times.</p>
        <div className={f.meter}>
          <div className={f.scale}>
            <span className={f.scaleMark} style={{ left: on ? '14%' : '0%' }} />
            <span className={f.scaleLabels}>
              <span>0</span>
              <span>14 ms</span>
              <span>100 ms</span>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ───────────────────────── Film: click-to-load YouTube ───────────────────────── */

export function Film({ id, title, source }: { id: string; title: string; source: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={f.film}>
      {playing ? (
        <iframe
          className={f.filmFrame}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className={f.filmPoster} onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
          <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" className={f.filmImg} loading="lazy" />
          <span className={f.filmShade} />
          <span className={f.filmPlay} aria-hidden>
            <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
          </span>
          <span className={f.filmMeta}>
            <span className={f.filmSource}>{source}</span>
            <span className={f.filmTitle}>{title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
