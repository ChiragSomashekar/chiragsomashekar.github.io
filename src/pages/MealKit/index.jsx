import { useRef } from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'
import Wordmark from '../../components/Wordmark.jsx'
import ScrollySlide from '../../components/ScrollySlide.jsx'
import HorizontalBar from '../../components/charts/HorizontalBar.jsx'
import VerticalBars from '../../components/charts/VerticalBars.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useCountUp } from '../../hooks/useCountUp.js'

const slide3Data = [
  { label: 'Paid social', value: 42.77, n: '2,039' },
  { label: 'Influencer', value: 34.35, n: '591' },
  { label: 'TV ad', value: 22.92, n: '397' },
  { label: 'Organic', value: 17.13, n: '940' },
  { label: 'Referral', value: 8.23, n: '1,033' },
]

const slide4Data = [
  { label: 'Free first box', value: 51.89, n: '981' },
  { label: '50% off', value: 32.55, n: '2,009' },
  { label: '30% off', value: 16.75, n: '1,266' },
  { label: 'No discount', value: 4.97, n: '744' },
]

const slide5Data = [
  { label: 'Low (0–10%)', value: 4.26, sub: 'n = 1,832 · 73 wks' },
  { label: 'Medium (10–25%)', value: 25.45, sub: 'n = 1,654 · 55 wks' },
  { label: 'High (25–50%)', value: 58.36, sub: 'n = 1,400 · 31 wks' },
  { label: 'Very high (50%+)', value: 84.21, sub: 'n = 114 · 11 wks' },
]

const slide6Data = [
  { label: '0–20 wks', value: 77.93, sub: 'n = 521' },
  { label: '21–40 wks', value: 54.68, sub: 'n = 951' },
  { label: '41–60 wks', value: 28.5, sub: 'n = 1,365' },
  { label: '61–80 wks', value: 6.43, sub: 'n = 1,463' },
  { label: '81+ wks', value: 0.43, sub: 'n = 700' },
]

const recoveryBars = [
  { label: 'Recover 10%', amount: '€173K recovered', subs: '141 subs saved', targetWidth: '10%', bg: 'bg-mist' },
  { label: 'Recover 20%', amount: '€346K recovered', subs: '282 subs saved', targetWidth: '20%', bg: 'bg-clear' },
  { label: 'Recover 30%', amount: '€521K recovered', subs: '424 subs saved', targetWidth: '30%', bg: 'bg-signal' },
]

const tiers = [
  {
    tier: 1,
    label: 'Critical',
    churn: '67.7%',
    colorClass: 'text-signal',
    meta: 'Churn rate · n = 1,094 (22%)',
    ltv: '€949',
    intervention: 'Personal outreach within 48h. Pause or discount offer.',
  },
  {
    tier: 2,
    label: 'High',
    churn: '37.5%',
    colorClass: 'text-signal',
    meta: 'Churn rate · n = 1,302 (26%)',
    ltv: '€2,018',
    intervention: 'Automated discount on next delivery. Monitor weekly.',
  },
  {
    tier: 3,
    label: 'Medium',
    churn: '14.0%',
    colorClass: 'text-clear',
    meta: 'Churn rate · n = 1,012 (20%)',
    ltv: '€2,667',
    intervention: 'Personalised email. Referral nudge.',
  },
  {
    tier: 4,
    label: 'Low',
    churn: '2.6%',
    colorClass: 'text-mist',
    meta: 'Churn rate · n = 1,592 (32%)',
    ltv: '€3,088',
    intervention: 'Referral programme. Our strongest acquisition channel.',
  },
]

const moves = [
  {
    tag: '01 / Free first box',
    title: 'Evaluate the free first box strategy.',
    body: <>Subscribers on this offer churn at <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">52%</span> with €1,492 LTV vs €2,987 at full price. The €1.47M gap warrants a controlled test.</>,
  },
  {
    tag: '02 / Risk model',
    title: 'Act when the risk score flags a subscriber.',
    body: 'Five-signal model identifies Critical and High tier customers early. Automate interventions in first 40 weeks. Target: €173K–€521K.',
  },
  {
    tag: '03 / Acquisition',
    title: 'Shift 10% of paid social budget to referral.',
    body: <>Referral churns at <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">8%</span> vs paid social at <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">43%</span>. Worth +€1,200 LTV per converted customer.</>,
  },
]

export default function MealKit() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const ref8 = useRef(null)
  const ref9 = useRef(null)
  const ref10 = useRef(null)

  const isVisible1 = useScrollReveal(ref1)
  const isVisible2 = useScrollReveal(ref2)
  const isVisible3 = useScrollReveal(ref3)
  const isVisible4 = useScrollReveal(ref4)
  const isVisible5 = useScrollReveal(ref5)
  const isVisible6 = useScrollReveal(ref6)
  const isVisible7 = useScrollReveal(ref7)
  const isVisible8 = useScrollReveal(ref8)
  const isVisible9 = useScrollReveal(ref9)
  const isVisible10 = useScrollReveal(ref10)

  const slide2Ref = useRef(null)
  const slide2Visible = useScrollReveal(slide2Ref)

  const slide3Ref = useRef(null)
  const slide3Visible = useScrollReveal(slide3Ref)

  const slide4Ref = useRef(null)
  const slide4Visible = useScrollReveal(slide4Ref)

  const slide5Ref = useRef(null)
  const slide5Visible = useScrollReveal(slide5Ref)

  const slide6Ref = useRef(null)
  const slide6Visible = useScrollReveal(slide6Ref)

  const cohortCount = useCountUp(5000, 1500, slide2Visible)
  const churnCount = useCountUp(28.2, 1500, slide2Visible)
  const revenueCount = useCountUp(1.73, 1500, slide2Visible)

  return (
    <div>
      <Nav />

      {/* Slide 1 — Title */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <div
            ref={ref1}
            style={{ opacity: isVisible1 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
          >
            <p className="font-mono text-xs uppercase tracking-wider text-slate">
              MealKit · Subscription churn
            </p>
            <h1 className="font-sora font-light text-6xl md:text-7xl leading-tight text-ink max-w-4xl mt-6">
              More than{' '}
              <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">one in four</span>{' '}
              subscribers never make it to week forty.
            </h1>
            <p className="font-sora font-light text-2xl text-slate mt-8">
              <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">€1.73M</span>{' '}
              in lifetime revenue. Lost to churn.
            </p>
            <p className="font-mono text-xs text-slate mt-12">01 / 10</p>
          </div>
        </div>
      </section>

      {/* Slide 2 — Three numbers */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div
          ref={ref2}
          className="max-w-7xl mx-auto w-full"
          style={{ opacity: isVisible2 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
        >
          <h2 className="font-sora font-light text-ink mb-16" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
            The scope of the problem, in three numbers.
          </h2>
          <div ref={slide2Ref} className="grid grid-cols-1 md:grid-cols-3 mt-12">
            <div className="py-8 md:px-10 border-b md:border-b-0 md:border-r border-mist/50">
              <p className="font-mono text-xs uppercase tracking-wider text-slate mb-6">
                Cohort size
              </p>
              <div>
                <span style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }} className="font-sora font-light leading-none text-ink">
                  {Math.round(cohortCount).toLocaleString()}
                </span>
                <div className="font-mono text-xs uppercase tracking-wider text-slate mt-1">
                  subscribers
                </div>
              </div>
              <p className="font-sora font-light text-sm text-slate mt-8 leading-relaxed">
                Synthetic dataset modelled on meal kit subscription behaviour.
                Avg tenure 53.8 weeks · Avg NPS 58.8.
              </p>
            </div>
            <div className="py-8 md:px-10 border-b md:border-b-0 md:border-r border-mist/50">
              <p className="font-mono text-xs uppercase tracking-wider text-slate mb-6">
                Dataset churn
              </p>
              <div>
                <span style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }} className="font-sora font-light leading-none text-signal">
                  {churnCount.toFixed(1)}%
                </span>
                <div className="font-mono text-xs uppercase tracking-wider text-slate mt-1">
                  churn rate
                </div>
              </div>
              <p className="font-sora font-light text-sm text-slate mt-8 leading-relaxed">
                1,412 subscribers lost. Churned LTV €1,375 vs active LTV €2,603.
              </p>
            </div>
            <div className="py-8 md:px-10">
              <p className="font-mono text-xs uppercase tracking-wider text-slate mb-6">
                Revenue lost
              </p>
              <div>
                <span style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }} className="font-sora font-light leading-none text-ink">
                  €{revenueCount.toFixed(2)}M
                </span>
                <div className="font-mono text-xs uppercase tracking-wider text-slate mt-1">
                  revenue lost
                </div>
              </div>
              <p className="font-sora font-light text-sm text-slate mt-8 leading-relaxed">
                Every churned subscriber costs €1,228 in LTV. Across 1,412
                lost customers, that adds up.
              </p>
            </div>
          </div>
          <p className="font-mono text-xs text-slate mt-12">02 / 10</p>
        </div>
      </section>

      {/* Slide 3 — Acquisition channel */}
      <ScrollySlide>
        <div>
          <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
            Paid social is{' '}
            <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">five times</span>{' '}
            more likely to churn than referral.
          </h2>
          <p className="font-mono text-xs text-slate mt-4">
            Churn rate by acquisition channel · all differences p &lt; 0.001
          </p>
          <p className="font-mono text-xs text-slate mt-2">
            N = 5,000 · LTV gap: €2,954 referral vs €1,754 paid social
          </p>
        </div>
        <div ref={slide3Ref} className="w-full overflow-x-auto">
          <HorizontalBar
            data={slide3Data}
            referenceValue={26}
            animate={slide3Visible}
          />
        </div>
      </ScrollySlide>
      <p className="font-mono text-xs text-slate px-4 md:px-8 pb-8 -mt-8">03 / 10</p>

      {/* Slide 4 — Signup discount */}
      <ScrollySlide>
        <div>
          <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
            Free first box subscribers churn at{' '}
            <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">52%</span>
          </h2>
          <p className="font-mono text-xs text-slate mt-4">
            Churn rate by signup discount · p &lt; 0.001
          </p>
          <p className="font-mono text-xs text-slate mt-4">
            Free first box LTV €1,492 vs full price €2,987 · gap −€1.47M
          </p>
        </div>
        <div ref={slide4Ref} className="w-full overflow-x-auto">
          <HorizontalBar data={slide4Data} referenceValue={26} animate={slide4Visible} />
        </div>
      </ScrollySlide>
      <p className="font-mono text-xs text-slate px-4 md:px-8 pb-8 -mt-8">04 / 10</p>

      {/* Slide 5 — Skip rate */}
      <ScrollySlide>
        <div>
          <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
            Crossing{' '}
            <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">10% skip rate</span>{' '}
            triggers a{' '}
            <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">6×</span>{' '}
            jump in churn.
          </h2>
          <p className="font-sora font-light text-sm text-slate mt-4">
            Act on ≥10% skip rate. Causality to be validated before scaling.
          </p>
          <p className="font-mono text-xs text-signal mt-8 uppercase tracking-wider">
            Intervention threshold · 10% skip rate
          </p>
        </div>
        <div ref={slide5Ref} className="w-full overflow-x-auto">
          <VerticalBars data={slide5Data} animate={slide5Visible} thresholdAfter={1} />
        </div>
      </ScrollySlide>
      <p className="font-mono text-xs text-slate px-4 md:px-8 pb-8 -mt-8">05 / 10</p>

      {/* Slide 6 — Tenure buckets */}
      <ScrollySlide>
        <div>
          <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
            <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">66%</span>{' '}
            of subscribers who churn are gone within their{' '}
            <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">first 40 weeks</span>.
          </h2>
          <p className="font-mono text-xs text-signal mt-8 uppercase tracking-wider">
            Focus retention spend on weeks 1–40.
          </p>
          <p className="font-sora font-light text-sm text-slate mt-4">
            0–20 weeks vs 81+ weeks: 180× difference in churn rate.
          </p>
        </div>
        <div ref={slide6Ref} className="w-full overflow-x-auto">
          <VerticalBars data={slide6Data} animate={slide6Visible} dangerWindow={1} />
        </div>
      </ScrollySlide>
      <p className="font-mono text-xs text-slate px-4 md:px-8 pb-8 -mt-8">06 / 10</p>

      {/* Slide 7 — Recovery calculator */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <div
            ref={ref7}
            style={{ opacity: isVisible7 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
          >
            <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
              Saving one in ten churners recovers{' '}
              <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">€173K</span>. One in three,{' '}
              <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">€521K</span>.
            </h2>
            <p className="font-sora font-light text-sm text-slate mt-6 max-w-sm">
              Recovery value = active LTV (€2,603) minus churned LTV (€1,375) = €1,228 per saved
              customer. Modelled assumption.
            </p>
            <div className="space-y-6 mt-12 max-w-2xl">
              {recoveryBars.map(bar => (
                <div key={bar.label}>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate mb-2">
                    {bar.label}
                  </p>
                  <div className="bg-paper relative h-16 flex items-center overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full ${bar.bg}`}
                      style={{
                        width: isVisible7 ? bar.targetWidth : '0%',
                        transition: 'width 1s ease-out',
                      }}
                    />
                    <div className="relative px-4 flex items-center justify-between w-full">
                      <span className="font-sora font-medium text-sm text-ink">{bar.amount}</span>
                      <span className="font-mono text-xs text-slate">{bar.subs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-slate mt-12">07 / 10</p>
          </div>
        </div>
      </section>

      {/* Slide 8 — Four risk tiers */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <div
            ref={ref8}
            style={{ opacity: isVisible8 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
          >
            <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
              Four risk tiers. Four interventions.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-mist/50 mt-8">
              {tiers.map((t, i) => (
                <div
                  key={t.tier}
                  className={`py-8 px-6 ${
                    i < tiers.length - 1 ? 'border-b md:border-b-0 md:border-r border-mist/50' : ''
                  }`}
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-slate">
                    Tier {t.tier} · {t.label}
                  </p>
                  <p className={`font-sora font-light text-5xl mt-2 ${t.colorClass}`}>
                    {t.churn}
                  </p>
                  <p className="font-mono text-[10px] text-slate mt-1">{t.meta}</p>
                  <p className="font-mono text-xs text-slate mt-1">LTV {t.ltv}</p>
                  <div className="border-t border-mist/50 mt-4 mb-4" />
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate">
                    Intervention
                  </p>
                  <p className="font-sora font-light text-sm text-ink mt-1">{t.intervention}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-slate mt-8">
              Risk score = skip &gt;10% + support ≥2 + delivery ≥2 + paused ≥2 + weeks &lt;40
            </p>
            <p className="font-mono text-xs text-slate mt-12">08 / 10</p>
          </div>
        </div>
      </section>

      {/* Slide 9 — Three moves */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <div
            ref={ref9}
            style={{ opacity: isVisible9 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
          >
            <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
              Three moves, in order of leverage.
            </h2>
            <div className="flex flex-col gap-8 mt-12">
              {moves.map(m => (
                <div key={m.tag}>
                  <p className="font-mono text-xs text-signal uppercase tracking-wider">{m.tag}</p>
                  <h3 className="font-sora font-light text-2xl text-ink mt-1">{m.title}</h3>
                  <p className="font-sora font-light text-sm text-slate mt-2">{m.body}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-slate mt-12">09 / 10</p>
          </div>
        </div>
      </section>

      {/* Slide 10 — Closing */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <div
            ref={ref10}
            style={{ opacity: isVisible10 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
          >
            <Wordmark size="text-3xl" color="text-ink" />
            <p className="font-sora font-light text-2xl text-slate mt-8">
              A data story by Chirag Somashekar.
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-slate mt-16">
              Built on · BigQuery · Python · Tableau
            </p>
            <a
              href="https://github.com/ChiragSomashekar/mealkit-churn-analysis"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-mono text-sm text-signal border-b border-signal mt-8"
            >
              GitHub →
            </a>
            <p className="font-mono text-xs text-slate mt-12">10 / 10</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
