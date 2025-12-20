import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProjectDetail from './components/ProjectDetail'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for visual effect
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2400)

    const mountTimer = setTimeout(() => setMounted(true), 2420)
    
    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(mountTimer)
    }
  }, [])

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <div className={`min-h-screen bg-white text-black ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
