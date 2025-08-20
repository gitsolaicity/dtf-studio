'use client'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Повернутись нагору"
      title="Повернутись нагору"
      className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-black/50 hover:cursor-pointer hover:bg-black/70 transition-colors border border-white/10 shadow-lg backdrop-blur-sm ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5 text-white" strokeWidth={2} />
    </button>
  )
}
