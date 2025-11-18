'use client'

import { useEffect, useState } from 'react'

interface UseExitIntentOptions {
  enabled?: boolean
  delay?: number
  onExitIntent?: () => void
}

export const useExitIntent = ({
  enabled = true,
  delay = 1000,
  onExitIntent,
}: UseExitIntentOptions = {}) => {
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    if (!enabled || hasShown) return

    // Check localStorage to see if we've already shown the exit intent
    const exitIntentShown = localStorage.getItem('exitIntentShown')
    if (exitIntentShown) {
      setHasShown(true)
      return
    }

    let timeout: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        timeout = setTimeout(() => {
          onExitIntent?.()
          setHasShown(true)
          localStorage.setItem('exitIntentShown', 'true')
        }, delay)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (timeout) clearTimeout(timeout)
    }
  }, [enabled, hasShown, delay, onExitIntent])

  return { hasShown }
}
