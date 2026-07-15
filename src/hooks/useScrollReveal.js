import { useState, useEffect } from 'react'

export function useScrollReveal(ref) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.05 }
      )
      observer.observe(el)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [ref])

  return isVisible
}
