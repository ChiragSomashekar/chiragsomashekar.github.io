function ScrollySlide({ children, dark = false, fullWidth = false }) {
  return (
    <div
      className={`px-4 md:px-8 py-16 md:py-24 border-b border-paper ${
        dark ? 'bg-ink' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {fullWidth ? (
          children
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default ScrollySlide
