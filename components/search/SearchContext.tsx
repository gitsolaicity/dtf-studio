'use client'

import { createContext, useContext, useState } from 'react'

type SearchContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  setOpen: (value: boolean) => void
}

const SearchContext = createContext<SearchContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
  setOpen: () => {},
})

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false)

  const open = () => setOpen(true)
  const close = () => setOpen(false)
  const toggle = () => setOpen(prev => !prev)

  return (
    <SearchContext.Provider value={{ isOpen, open, close, toggle, setOpen }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
