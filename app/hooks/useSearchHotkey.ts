// hooks/useSearchHotkey.ts
import { useEffect } from 'react'

export function useSearchHotkey(setOpen: (v: boolean) => void) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const isInputFocused = ['INPUT', 'TEXTAREA', 'SELECT'].includes(
        document.activeElement?.tagName || ''
      )

      const isShortcut =
        !isInputFocused &&
        ((e.ctrlKey && e.altKey && e.key.toLowerCase() === 'f') ||
         (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'f'))

      if (isShortcut) {
        e.preventDefault()
        setOpen(true)
      }

      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [setOpen])
}
