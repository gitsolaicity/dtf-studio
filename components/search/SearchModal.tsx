'use client'

import { useRef, useEffect } from 'react'
import SearchInput from './SearchInput'
import { Search } from 'lucide-react'
import { useSearch } from './SearchContext'

export default function SearchModal() {
  const { open, setOpen } = useSearch()
  const inputRef = useRef<HTMLInputElement>(null)

  // 🎯 Фокус на поле при открытии
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-start justify-center pt-24">
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-full max-w-xl p-6 relative">
            {/* 🔍 Поле пошуку */}
            <SearchInput inputRef={inputRef} onClose={() => setOpen(false)} />

            {/* 🧠 Подсказка клавиш */}
            <div className="relative py-3 text-xs text-gray-500 dark:text-gray-400 pointer-events-none">
              <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
                <div className="flex gap-2 items-center flex-wrap">
                  <kbd className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded font-mono">↑</kbd>
                  <kbd className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded font-mono">↓</kbd>
                  <span>— навігація</span>
                  <kbd className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded font-mono">Enter</kbd>
                  <span>— вибір</span>
                </div>
                <div className="flex gap-2 items-center justify-end">
                  <kbd className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded font-mono">Esc</kbd>
                  <span>— закрити</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// 🧨 Триггер для ручного открытия (например, в Navbar)
SearchModal.Trigger = function Trigger() {
  return (
    <button
      onClick={() => {
        const event = new KeyboardEvent('keydown', {
          key: 'f',
          ctrlKey: true,
          altKey: true,
        })
        window.dispatchEvent(event)
      }}
      aria-label="Відкрити пошук"
      className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
    >
      <Search className="h-5 w-5" strokeWidth={1.8} />
      <kbd className="px-2 py-1 text-xs text-[#9C9C9C] bg-black/30 border border-[#e0e0e0]/20 rounded-md font-mono select-none">
        Ctrl+Alt+F
      </kbd>
    </button>
  )
}
