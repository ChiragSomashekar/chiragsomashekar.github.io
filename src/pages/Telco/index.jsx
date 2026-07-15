import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'
import ScrollySlide from '../../components/ScrollySlide.jsx'
import LollipopChart from '../../components/charts/LollipopChart.jsx'
import DivergingBar from '../../components/charts/DivergingBar.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { useCountUp } from '../../hooks/useCountUp.js'

const slide6Data = [
  { label: 'Tenure', value: 1.13 },
  { label: 'Fiber optic', value: 0.58 },
  { label: 'Monthly charges', value: 0.45 },
  { label: 'Two-year contract', value: 0.45 },
  { label: 'Total charges', value: 0.44 },
]

const slide7Data = [
  { label: 'Tenure', value: 1.6 },
  { label: 'Fiber optic', value: 0.58 },
  { label: 'Total charges', value: -0.51 },
  { label: 'Two-year contract', value: 0.25 },
  { label: 'Mailed check', value: -0.20 },
]

const tiers = [
  {
    tier: 1,
    label: 'Critical',
    churn: '74%',
    colorClass: 'text-signal',
    meta: 'Churn rate · n = 1,860',
    intervention: 'Personal call + contract offer',
  },
  {
    tier: 2,
    label: 'High',
    churn: '53%',
    colorClass: 'text-signal',
    meta: 'Churn rate · n = 2,112',
    intervention: 'Loyalty discount',
  },
  {
    tier: 3,
    label: 'Medium',
    churn: '28%',
    colorClass: 'text-clear',
    meta: 'Churn rate · n = 1,407',
    intervention: 'Email campaign',
  },
  {
    tier: 4,
    label: 'Low',
    churn: '8%',
    colorClass: 'text-mist',
    meta: 'Churn rate · n = 1,664',
    intervention: 'Monitor',
  },
]

export default function Telco() {
  const slide1Ref = useRef(null)
  const slide1Visible = useScrollReveal(slide1Ref)

  const slide2Ref = useRef(null)
  const slide2Visible = useScrollReveal(slide2Ref)

  const slide4Ref = useRef(null)
  const slide4Visible = useScrollReveal(slide4Ref)

const slide6Ref = useRef(null)
  const slide6Visible = useScrollReveal(slide6Ref)

  const slide7Ref = useRef(null)
  const slide7Visible = useScrollReveal(slide7Ref)

  const [hoveredFigure, setHoveredFigure] = useState(null)
  const [showStrike, setShowStrike] = useState(false)
  const [show95, setShow95] = useState(false)
  const slide8Ref = useRef(null)
  const slide8Visible = useScrollReveal(slide8Ref)

  const slide9Ref = useRef(null)
  const slide9Visible = useScrollReveal(slide9Ref)

  const slide10Ref = useRef(null)
  const slide10Visible = useScrollReveal(slide10Ref)

  const revenueCount = useCountUp(121, 2000, slide2Visible)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!slide8Visible) return
    const t1 = setTimeout(() => setShowStrike(true), 600)
    const t2 = setTimeout(() => setShow95(true), 1100)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [slide8Visible])

  return (
    <div>
      <Nav />

      {/* Slide 1 — Title */}
      <section className="min-h-screen flex items-center px-4 md:px-8 py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <div
            ref={slide1Ref}
            style={{ opacity: slide1Visible ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
          >
            <p className="font-mono text-xs uppercase tracking-wider text-slate">
              Telco · Churn prediction
            </p>
            <h1 className="font-sora font-light text-6xl md:text-7xl leading-tight text-ink mt-6">
              Predicting Customer Churn.
            </h1>
            <p className="font-mono text-xs text-slate mt-16">01 / 11</p>
          </div>
        </div>
      </section>

      {/* Slide 2 — $121K stat */}
      <section className="min-h-screen flex items-center px-4 md:px-8 py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs uppercase tracking-wider text-slate mb-6">The scale</p>
          <div ref={slide2Ref}>
            <div
              style={{ fontSize: 'clamp(4rem, 15vw, 12rem)' }}
              className="font-sora font-light leading-none text-signal"
            >
              ${revenueCount.toFixed(0)}K
            </div>
          </div>
          <p className="font-sora font-light text-3xl text-ink mt-6">
            in monthly revenue lost to churn
          </p>
          <p className="font-mono text-xs text-slate mt-4">Telco dataset · 7,043 customers</p>
          <p className="font-mono text-xs text-slate mt-16">02 / 11</p>
        </div>
      </section>

      {/* Slide 3 — Who is about to leave */}
      <section className="min-h-screen flex items-center px-4 md:px-8 py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="font-sora font-light text-6xl md:text-8xl text-ink leading-tight max-w-4xl">
            Who is about to leave?
          </h2>
          <p className="font-mono text-xs text-slate mt-16">03 / 11</p>
        </div>
      </section>

      {/* Slide 4 — 1 in 4 customers leave */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="font-sora font-light text-5xl text-ink">
            <span className="text-signal inline-block transition-transform duration-200 ease-out hover:scale-105 cursor-default">
              1 in 4
            </span>{' '}
            customers leave
          </h2>
          <p className="font-mono text-xs text-slate mt-4">26.5% of customers churned</p>
          <div ref={slide4Ref} className="flex justify-center gap-8 mt-16">
            {[0, 1, 2, 3].map((i) => {
              const isChurned = i === 3
              return (
                <div
                  key={i}
                  className="flex flex-col items-center cursor-default"
                  onMouseEnter={() => setHoveredFigure(i)}
                  onMouseLeave={() => setHoveredFigure(null)}
                  style={{
                    opacity: slide4Visible ? 1 : 0,
                    transform: slide4Visible
                      ? `translateY(0) scale(${hoveredFigure === i ? 1.1 : 1})`
                      : 'translateY(20px)',
                    transition: `opacity 600ms ease-out ${i * 100}ms, transform 600ms ease-out ${i * 100}ms`,
                  }}
                >
                  <svg width="80" height="120" viewBox="0 0 80 120">
                    <circle
                      cx="40" cy="28" r="22"
                      fill={isChurned ? '#B8CEEA' : '#1B5FA8'}
                    />
                    <rect
                      x="18" y="56" width="44" height="56" rx="12"
                      fill={isChurned ? '#B8CEEA' : '#1B5FA8'}
                    />
                  </svg>
                  {hoveredFigure === i && (
                    <p className="font-mono text-[10px] text-slate mt-2 text-center">
                      {isChurned ? 'churned' : 'retained'}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
          <p className="font-mono text-xs text-slate mt-16">04 / 11</p>
        </div>
      </section>

      {/* Slide 5 — New, flexible & paying by check */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
            New, flexible &amp; paying by check
          </h2>
          <p className="font-mono text-xs text-slate mt-4">
            these customers churn at nearly 2× the average
          </p>
          <div className="grid grid-cols-3 gap-2 mt-16">
            {[
              { value: '47%', label: 'New customers' },
              { value: '45%', label: 'Electronic check' },
              { value: '43%', label: 'Month-to-month' },
            ].map(s => (
              <div key={s.label}>
                <div
                  className="font-sora font-light text-signal"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                >
                  {s.value}
                </div>
                <div className="font-mono text-xs uppercase text-slate mt-2">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-mist/50 pt-6 mt-6">
            <p className="font-mono text-xs text-slate">
              Dataset average: 26.5% · All three segments churn at nearly 2× the average
            </p>
          </div>
          <p className="font-mono text-xs text-slate mt-16">05 / 11</p>
        </div>
      </section>

      {/* Slide 6 — Tenure dominates */}
      <ScrollySlide>
        <div>
          <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
            Tenure dominates the prediction
          </h2>
          <p className="font-mono text-xs text-slate mt-4">
            the model's top 5 features by importance
          </p>
          <p className="font-sora font-light text-sm text-slate mt-8">
            higher value = stronger influence on prediction
          </p>
        </div>
        <div ref={slide6Ref} className="w-full overflow-x-auto">
          <LollipopChart data={slide6Data} animate={slide6Visible} />
        </div>
      </ScrollySlide>
      <p className="font-mono text-xs text-slate px-4 md:px-8 pb-8 -mt-4">06 / 11</p>

      {/* Slide 7 — This customer is probably leaving */}
      <ScrollySlide>
        <div>
          <h2 className="font-sora font-light text-4xl md:text-5xl text-ink leading-tight">
            This customer is probably leaving
          </h2>
          <p className="font-mono text-xs text-slate mt-4">
            the model gives them a 73% chance of churning
          </p>
          <p className="font-mono text-xs text-slate mt-8">
            signal = increases churn risk · mist = reduces risk
          </p>
        </div>
        <div ref={slide7Ref} className="w-full overflow-x-auto">
          <DivergingBar data={slide7Data} animate={slide7Visible} />
        </div>
      </ScrollySlide>
      <p className="font-mono text-xs text-slate px-4 md:px-8 pb-8 -mt-4">07 / 11</p>

      {/* Slide 8 — Tuned for business reality */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="font-sora font-light text-5xl text-ink max-w-3xl">
            Tuned the model for business reality
          </h2>
          <p className="font-sora font-light text-lg text-slate mt-4 whitespace-nowrap">
            catching more churners matters more than being perfectly right
          </p>
          <div ref={slide8Ref} className="flex items-center gap-8 mt-20">
            <div>
              <div className="relative inline-block">
                <span style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
                      className="font-sora font-light text-mist">
                  56%
                </span>
                {/* Strikethrough line */}
                <div
                  style={{
                    position: 'absolute',
                    top: '45%',
                    left: 0,
                    height: '3px',
                    backgroundColor: '#0F1117',
                    width: showStrike ? '100%' : '0%',
                    transition: 'width 300ms ease-out',
                  }}
                />
              </div>
              <p className="font-mono text-xs text-slate mt-2">
                churners caught before
              </p>
            </div>

            <span className="font-mono text-3xl text-slate">→</span>

            <div style={{
              opacity: show95 ? 1 : 0,
              transform: show95 ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 300ms ease-out, transform 300ms ease-out'
            }}>
              <span style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
                    className="font-sora font-light text-signal">
                95%
              </span>
              <p className="font-mono text-xs text-slate mt-2">
                churners caught after
              </p>
            </div>
          </div>
          <p className="font-sora font-light text-sm text-slate mt-12 max-w-xl">
            Precision drops to 40.7%, managed through tiered intervention.
          </p>
          <p className="font-mono text-xs text-slate mt-16">08 / 11</p>
        </div>
      </section>

      {/* Slide 9 — Four risk tiers */}
      <ScrollySlide fullWidth>
        <div
          ref={slide9Ref}
          style={{ opacity: slide9Visible ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
        >
          <h2 className="font-sora font-light text-5xl text-ink">
            Not all customers need the same response
          </h2>
          <p className="font-mono text-xs text-slate mt-4">4 risk tiers · 4 interventions</p>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-mist/50 border-t border-mist/50 mt-16">
            {tiers.map((t, i) => (
              <div key={t.tier} className="py-8 px-6">
                <p className="font-mono text-xs uppercase tracking-wider text-slate mb-4">
                  Tier {t.tier} · {t.label}
                </p>
                <p className={`font-sora font-light text-5xl mb-2 ${t.colorClass}`}>{t.churn}</p>
                <p className="font-mono text-[10px] text-slate">{t.meta}</p>
                <div className="border-t border-mist/50 mt-4 mb-4" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate mb-2">
                  Intervention
                </p>
                <p className="font-sora font-light text-sm text-ink">{t.intervention}</p>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-slate mt-8">09 / 11</p>
        </div>
      </ScrollySlide>

      {/* Slide 10 — $658K */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs uppercase tracking-wider text-slate mb-6">
            The opportunity
          </p>
          <div
            ref={slide10Ref}
            style={{ opacity: slide10Visible ? 1 : 0, transition: 'opacity 800ms ease-out' }}
          >
            <div
              style={{ fontSize: 'clamp(4rem, 15vw, 12rem)' }}
              className="font-sora font-light leading-none text-signal"
            >
              $658K
            </div>
          </div>
          <p className="font-sora font-light text-3xl text-ink mt-6">
            in recoverable lifetime value on test data
          </p>
          <p className="font-mono text-xs text-slate mt-4">Telco test set · 1,409 customers</p>
          <p className="font-mono text-xs text-slate mt-16">10 / 11</p>
        </div>
      </section>

      {/* Slide 11 — See the full analysis */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-paper">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="font-sora font-light text-5xl text-ink">See the full analysis.</h2>
          <a
            href="https://github.com/ChiragSomashekar"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 font-mono text-sm text-signal border-b border-signal pb-1 hover:opacity-70 transition-opacity"
          >
            github.com/ChiragSomashekar →
          </a>
          <p className="font-mono text-xs uppercase tracking-wider text-slate mt-12">
            Logistic Regression · SHAP · Threshold Tuning · Cost Modelling
          </p>
          <p className="font-mono text-xs text-slate mt-16">11 / 11</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
