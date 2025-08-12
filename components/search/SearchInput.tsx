'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'

const mockPages = [
  { title: 'Головна', url: '/' },
  { title: 'Про нас', url: '/about' },
  { title: 'Контакти', url: '/contact' },
  { title: 'DTF-друк', url: '/services/dtf' },
  { title: 'Вишивка', url: '/services/embroidery' },
  { title: 'Шовкографія', url: '/services/silkscreen' },
  { title: 'Політика конфіденційності', url: '/privacy-policy' },
  { title: 'Публічна оферта', url: '/public-offer' },
  { title: 'Умови використання', url: '/terms-of-use' },
]

interface SearchInputProps {
  placeholder?: string
  className?: string
  inputRef?: React.Ref<HTMLInputElement>
  onClose?: () => void
}

export default function SearchInput({
  placeholder = 'Пошук...',
  className = '',
  inputRef,
  onClose,
}: SearchInputProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof mockPages>([])
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const router = useRouter()
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (query.trim()) {
      const filtered = mockPages.filter((page) =>
        page.title.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setActiveIndex(filtered.length > 0 ? 0 : -1)
    } else {
      setResults([])
      setActiveIndex(-1)
    }
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1 < results.length ? prev + 1 : prev))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev))
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      if (results[activeIndex]) {
        onClose?.()
        router.push(results[activeIndex].url)
      }
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      onKeyDown={handleKeyDown}
      className={`relative flex flex-col ${className}`}
    >
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-black/70 border border-[#e0e0e0]/30 rounded-md px-4 py-3 placeholder-[#9C9C9C] text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition"
          aria-label="Пошук"
        />
        <button
          type="submit"
          className="absolute right-2 text-[#9C9C9C] hover:text-white transition"
          aria-label="Шукати"
        >
          <Search className="h-5 w-5" strokeWidth={1.8} />
        </button>
      </div>

      {query.trim() && (
        <ul ref={listRef} className="mt-4 space-y-2">
          {results.length > 0 ? (
            results.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.url}
                  onClick={() => onClose?.()}
                  className={`block px-4 py-2 rounded text-sm transition ${
                    idx === activeIndex
                      ? 'bg-gray-100 dark:bg-white/15 text-black dark:text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-500">Нічого не знайдено.</li>
          )}
        </ul>
      )}
    </form>
  )
}
