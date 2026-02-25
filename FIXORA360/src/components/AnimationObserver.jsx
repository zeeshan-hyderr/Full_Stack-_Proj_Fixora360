import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { observeElements } from '../utils/scrollAnimation'

const AnimationObserver = () => {
  const location = useLocation()

  useEffect(() => {
    const observer = observeElements()
    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect()
      }
    }
  }, [location.pathname])

  return null
}

export default AnimationObserver

