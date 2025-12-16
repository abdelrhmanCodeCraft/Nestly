'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
]

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-[#141414] border-b border-gray-800">
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-17">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#703BF7] to-[#A685FA] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">N</span>
            </div>
            <span className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              Nestly
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? 'bg-[#1A1A1A] text-white border border-gray-700'
                        : 'text-gray-300 hover:bg-gray-900 hover:text-white hover:border hover:border-gray-700'
                    }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="/contacts"
              className="hidden md:inline-flex items-center justify-center
                px-4 sm:px-5 py-2 sm:py-2.5
                bg-[#1A1A1A] text-white text-xs sm:text-sm font-semibold
                rounded-lg border border-gray-700
                hover:bg-gray-800 transition-all duration-200
                active:scale-95"
            >
              Contact Us
            </Link>

            <button
              className="md:hidden inline-flex items-center justify-center
                p-1.5 sm:p-2 rounded-md text-gray-300 hover:text-white
                hover:bg-gray-800/50 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#1A1A1A] border-t border-gray-800 animate-fadeIn">
            <div className="py-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg mx-1 transition-all duration-200
                      ${
                        isActive
                          ? 'bg-[#141414] text-white border border-gray-700'
                          : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              })}

              {/* زرار Contact Us في الموبايل */}
              <Link
                href="/contacts"
                className="block px-4 py-3 text-sm font-medium rounded-lg mx-1 text-white bg-[#1A1A1A] hover:bg-gray-800 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
