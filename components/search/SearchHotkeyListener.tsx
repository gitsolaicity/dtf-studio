'use client'

import { useSearch } from "./SearchContext"
import { useSearchHotkey } from "@/app/hooks/useSearchHotkey"

export default function SearchHotkeyListener() {
  const { setOpen } = useSearch()
  useSearchHotkey(setOpen)
  return null
}
