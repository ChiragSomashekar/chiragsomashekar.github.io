import { Link, useLocation } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'

function Nav() {
  const { pathname } = useLocation()

  const linkClass = (path) =>
    `font-mono text-xs uppercase tracking-wider transition-colors ${
      pathname === path ? 'text-ink' : 'text-slate hover:text-ink'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-paper">
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        <Link to="/">
          <Wordmark size="text-xl" color="text-ink" />
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className={linkClass('/')}>Work</Link>
          <Link to="/building-sinn" className={linkClass('/building-sinn')}>Building Sinn.</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
