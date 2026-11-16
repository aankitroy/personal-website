import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DecisionField } from './DecisionField';
import { BOOKING_URL, EMAIL } from '../site';
import s from '../../app/home.module.css';

/**
 * The closing call to action on every page: one split panel. The stone half talks
 * (headline, what the first conversation covers, who you'll be speaking to); the ink
 * half listens, with the live confidence field drawn across it.
 */
export function ContactBlock() {
  return (
    <section id="contact" className={s.section}>
      <div className={s.container}>
        <div className={s.contact} data-reveal>
          <div className={s.contactTalk}>
            <p className={s.eyebrow}>For founders, CEOs and boards</p>
            <h2 className={s.contactTitle}>
              If AI is on your board&rsquo;s agenda, <em>let&rsquo;s talk before the roadmap is set.</em>
            </h2>
            <ol className={s.agenda}>
              <li>
                Where AI can create value in your business
              </li>
              <li>
                What it would take to build it
              </li>
            </ol>
            <div className={s.contactFoot}>
              <div className={s.contactWho}>
                <p>Aankit Roy</p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <a href={BOOKING_URL} className={`${s.btn} ${s.btnPrimary}`}>
                Book a conversation
                <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </div>

          <div className={s.contactListen}>
            <DecisionField className={s.listenField} onInk intensity={0.95} />
            <p className={s.listenCaption}>
              <b>Fig. 0 · Live</b>
              A confidence surface, drawn as you watch. The bright line is the 0.80 threshold: above it a decision runs on its own,
              below it a person decides.
            </p>
            <span className={s.listenHint} aria-hidden>
              ↖ Move your cursor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
