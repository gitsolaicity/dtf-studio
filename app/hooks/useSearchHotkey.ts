import { useEffect } from "react"
import { useSearch } from "@/components/search/SearchContext"

export const useSearchHotkey = () => {
  const { open } = useSearch()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      const isTyping = ["INPUT", "TEXTAREA"].includes(tag) || (e.target as HTMLElement)?.isContentEditable

      if (isTyping) return

      if (e.ctrlKey && e.altKey && e.code === "KeyF") {
        e.preventDefault()
        open()
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open])
}

