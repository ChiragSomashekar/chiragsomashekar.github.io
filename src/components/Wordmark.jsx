function Wordmark({ size = 'text-xl', color = 'text-ink' }) {
  return (
    <span className={`font-sora font-light ${size} ${color}`}>
      Sinn<span className="text-signal">.</span>
    </span>
  )
}

export default Wordmark
