import { Link } from 'react-router-dom'

function ProjectCard({ to, label, title, meta, stats }) {
  return (
    <Link to={to} className="block min-w-0 overflow-hidden bg-paper p-10 hover:bg-mist/30 transition-colors">
      <p className="font-mono text-xs text-signal mb-4">{label}</p>
      <h2 className="font-sora font-light text-3xl text-ink leading-snug mb-3">{title}</h2>
      <p className="font-mono text-xs text-slate mb-8">{meta}</p>
      <div className="grid grid-cols-3 gap-2 pt-6 border-t border-mist/50">
        {stats.map(({ k, v }) => (
          <div key={k} className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate mb-1 truncate">{k}</p>
            <p className="font-sora font-light text-lg text-ink leading-tight">{v}</p>
          </div>
        ))}
      </div>
    </Link>
  )
}

export default ProjectCard
