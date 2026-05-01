import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: '#f1ebde', borderBottom: '1px solid #c4c6cc' }}>
      <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#0a1b29' }}>
            <span className="material-symbols-outlined text-white text-lg">auto_stories</span>
          </div>
          <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
            Books Align
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors no-underline pb-0.5 ${
                  isActive
                    ? 'border-b-2 border-current'
                    : 'hover:opacity-70'
                }`
              }
              style={{ color: '#0a1b29', letterSpacing: '0.02em' }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-semibold no-underline transition-opacity hover:opacity-70"
            style={{ color: '#0a1b29' }}
          >
            Client Login
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold no-underline transition-opacity hover:opacity-90 active:scale-95"
            style={{ background: '#20303f', color: '#ffffff' }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#0a1b29' }}
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-6 flex flex-col gap-4" style={{ background: '#f1ebde', borderTop: '1px solid #c4c6cc' }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-semibold no-underline py-2 ${isActive ? 'opacity-100 underline' : 'opacity-80'}`
              }
              style={{ color: '#0a1b29' }}
            >
              {label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a href="#" className="text-sm font-semibold no-underline text-center py-2.5 rounded-lg" style={{ color: '#0a1b29', border: '1px solid #c4c6cc' }}>
              Client Login
            </a>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold no-underline text-center py-2.5 rounded-lg"
              style={{ background: '#20303f', color: '#ffffff' }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
