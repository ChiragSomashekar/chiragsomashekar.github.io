import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Wordmark from '../components/Wordmark.jsx'

const swatches = [
  { name: 'Ink', hex: '#0F1117', bg: '#0F1117', light: false },
  { name: 'Signal', hex: '#1B5FA8', bg: '#1B5FA8', light: false },
  { name: 'Clear', hex: '#5B9BD5', bg: '#5B9BD5', light: false },
  { name: 'Mist', hex: '#B8CEEA', bg: '#B8CEEA', light: true },
  { name: 'Slate', hex: '#6B7280', bg: '#6B7280', light: false },
  { name: 'Paper', hex: '#F5F6F8', bg: '#F5F6F8', light: true, border: true },
]

const voiceTags = [
  'Clear, not clever',
  'Warm but precise',
  'Corrects after, not during',
  'Patient, never pushy',
  'German first, English when you need it',
  'Honest scores, no flattery',
]

function BuildingSinn() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-14">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-8 pt-32 pb-16">
          <h1 className="font-sora font-light text-6xl md:text-7xl text-ink leading-tight">
            Sinn is German for{' '}
            <span className="text-signal">meaning.</span>
          </h1>
          <p className="font-mono text-xs uppercase tracking-wider text-slate mt-8">
            A voice AI for learning German · Berlin
          </p>
        </section>

        {/* 01 — Philosophy */}
        <section className="border-b border-paper py-24">
          <div className="max-w-4xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
              01 — Philosophy
            </p>
            <p className="font-sora font-light text-2xl text-ink leading-relaxed max-w-2xl mb-8">
              The moment when
              noise becomes signal, when German stops being vocabulary and starts
              being{' '}
              <span className="text-signal">yours</span>.
            </p>
            <p className="font-sora font-light text-2xl text-ink leading-relaxed max-w-2xl">
              Sinn. doesn't drill grammar. It listens while you speak, finds the
              mistakes that matter and makes them impossible to miss.
            </p>
          </div>
        </section>

        {/* 02 — Origin story */}
        <section className="border-b border-paper py-24">
          <div className="max-w-4xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
              02 — Origin story
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Designer first',
                  body: 'Masters in Innovation Design Management. Trained to see systems, find friction, design solutions.',
                },
                {
                  num: '02',
                  title: 'Data second',
                  body: 'Business analyst by trade. Python, dashboards, the language of decisions. Design thinking meets data fluency.',
                },
                {
                  num: '03',
                  title: 'Meaning always',
                  body: 'The obsession stayed the same: strip everything that doesn\'t carry meaning. I used to do it to charts. Now the product is Sinn., a voice AI for learning German.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="bg-paper p-6">
                  <p className="font-mono text-xs text-signal mb-3">{num}</p>
                  <p className="font-sora font-medium text-ink mb-3">{title}</p>
                  <p className="font-sora font-light text-sm text-slate leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Logo */}
        <section className="border-b border-paper py-24">
          <div className="max-w-4xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
              03 — Logo
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-paper py-20 flex items-center justify-center">
                <Wordmark size="text-4xl" color="text-ink" />
              </div>
              <div className="bg-ink py-20 flex items-center justify-center">
                <Wordmark size="text-4xl" color="text-paper" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'The period',
                  body: 'The period is the logo. Confident. Complete. Always Signal blue.',
                },
                {
                  title: 'The icon',
                  body: 'The period with the letters removed. A single Signal square on ink.',
                },
                {
                  title: 'Clear space',
                  body: 'Minimum clear space equals the height of the S.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-paper p-5">
                  <p className="font-sora font-medium text-ink text-sm mb-2">{title}</p>
                  <p className="font-sora font-light text-sm text-slate leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Color */}
        <section className="border-b border-paper py-24">
          <div className="max-w-4xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
              04 — Color
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {swatches.map(({ name, hex, bg, light, border }) => (
                <div
                  key={name}
                  className={`aspect-square flex flex-col justify-end p-3 ${border ? 'border border-[#E5E7EB]' : ''}`}
                  style={{ backgroundColor: bg }}
                >
                  <p className={`font-sora font-medium text-xs ${light ? 'text-ink' : 'text-paper'}`}>
                    {name}
                  </p>
                  <p
                    className={`font-mono text-[10px] opacity-70 ${light ? 'text-ink' : 'text-paper'}`}
                  >
                    {hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — Typography */}
        <section className="border-b border-paper py-24">
          <div className="max-w-4xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
              05 — Typography
            </p>
            <div className="divide-y divide-paper">
              <div className="flex items-baseline gap-8 py-6">
                <span className="font-mono text-xs text-slate min-w-[140px]">Sora Light 300</span>
                <span className="font-sora font-light text-3xl text-ink">Making sense of the signal</span>
              </div>
              <div className="flex items-baseline gap-8 py-6">
                <span className="font-mono text-xs text-slate min-w-[140px]">Sora Medium 500</span>
                <span className="font-sora font-medium text-2xl text-ink">Headlines and emphasis</span>
              </div>
              <div className="flex items-baseline gap-8 py-6">
                <span className="font-mono text-xs text-slate min-w-[140px]">DM Mono 400</span>
                <span className="font-mono text-sm text-slate">Data labels · captions · technical details</span>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Voice */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
              06 — Voice
            </p>
            <div className="flex flex-wrap gap-3">
              {voiceTags.map((tag, i) => (
                <span
                  key={tag}
                  className={`font-sora text-sm px-4 py-2 rounded-full ${
                    i === 2 ? 'bg-signal text-paper' : 'bg-paper text-ink'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default BuildingSinn
