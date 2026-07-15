import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BuildingSinn from './pages/BuildingSinn.jsx'
import Telco from './pages/Telco/index.jsx'
import MealKit from './pages/MealKit/index.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/building-sinn" element={<BuildingSinn />} />
      <Route path="/work/telco" element={<Telco />} />
      <Route path="/work/mealkit" element={<MealKit />} />
      </Routes>
    </>
  )
}

export default App
