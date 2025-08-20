'use client'

import { useState } from 'react'
import Link from 'next/link'
import BlacklightLogo from '../BlacklightLogo'
import Overlay from './Overlay'
import BurgerButton from './BurgerButton'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import SearchModal from '../search/SearchModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Overlay */}
      {isOpen && <Overlay onClick={closeMenu} />}

      {/* Search Modal */}
      <SearchModal />

      {/* Navbar */}
      <nav className="bg-black/80 border-b border-[#e0e0e0]/20 fixed w-full z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
          {/* Logo */}
          <Link
  href="/"
  onClick={closeMenu}
  className="text-2xl font-medium text-gray-300 tracking-wider"
>
  <BlacklightLogo />
</Link>


          {/* Search button (desktop only) */}
          <div className="hidden md:inline-flex">
            <SearchModal.Trigger />
          </div>

          {/* Desktop menu */}
          <DesktopMenu />

          {/* Burger button */}
          <BurgerButton isOpen={isOpen} toggle={toggleMenu} />
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={isOpen} close={closeMenu} />
      </nav>
    </>
  )
}
