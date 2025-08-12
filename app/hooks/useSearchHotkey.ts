import { useEffect } from "react"
import { useSearch } from "@/components/search/SearchContext"

export const useSearchHotkey = () => {
  const { open } = useSearch()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "f") {
        e.preventDefault()
        open()
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open])
}
