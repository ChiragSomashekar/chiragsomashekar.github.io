import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    to: '/work/telco',
    label: '01 / Churn prediction',
    title: 'Who is about to leave?',
    meta: 'Telco · 7,043 customers',
    stats: [
      { k: 'AUC', v: '84.2%' },
      { k: 'Churners caught', v: '95%' },
      { k: 'Recoverable LTV', v: '$658K' },
    ],
  },
  {
    to: '/work/mealkit',
    label: '02 / Subscription churn',
    title: 'More than one in four never make it to week forty.',
    meta: 'MealKit · 5,000 subscribers',
    stats: [
      { k: 'Dataset churn', v: '28.2%' },
      { k: 'Revenue lost', v: '€1.73M' },
      { k: 'Recoverable', v: '€173K–€521K' },
    ],
  },
]

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-14">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-6">
              Chirag Somashekar
            </p>
            <h1 className="font-sora font-light text-5xl md:text-6xl text-ink leading-tight">
              I turn data into decisions.
            </h1>
            <p className="font-sora font-light text-lg text-slate mt-6">
              Data analyst in Berlin. Currently building Sinn., a voice AI for learning German.
            </p>
            <div className="flex items-center gap-8 mt-10">
              <a
                href="https://www.linkedin.com/in/chirag-somashekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider border-b border-signal text-ink pb-px hover:text-signal transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ChiragSomashekar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider border-b border-signal text-ink pb-px hover:text-signal transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden max-h-[500px] bg-paper">
            <img 
              src="/Chirag.jpg" 
              alt="Chirag Somashekar" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </section>

        {/* Work */}
        <section className="border-t border-paper py-20">
          <div className="max-w-6xl mx-auto px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate mb-10">
              Selected work · 2026
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((p) => (
                <ProjectCard key={p.to} {...p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
