import { Link } from 'react-router-dom'
import Wordmark from '../components/Wordmark.jsx'

function TelcoPlaceholder() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-center">
      <Wordmark size="text-sm" color="text-slate" />
      <h1 className="font-sora font-light text-4xl text-ink">Coming soon.</h1>
      <p className="font-mono text-xs text-slate">This case study is in production.</p>
      <Link to="/" className="font-mono text-xs text-slate hover:text-ink transition-colors mt-4">
        ← Work
      </Link>
    </div>
  )
}

export default TelcoPlaceholder
