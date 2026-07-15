import Wordmark from './Wordmark.jsx'

function Footer() {
  return (
    <footer className="border-t border-paper py-16 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Wordmark size="text-lg" color="text-ink" />
        <span className="font-mono text-xs text-slate">
          A voice AI for learning German · Built in Berlin
        </span>
      </div>
    </footer>
  )
}

export default Footer
