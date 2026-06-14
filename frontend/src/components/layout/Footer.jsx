import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#20303f', color: '#ffffff' }}>
      <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1780376678/BooksAlign_Full_ymqoaz.svg"
                alt="Books Align"
                className="h-50 w-auto overflow-hidden"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Providing innovative, high-quality bookkeeping and operational services to disability service providers — aligning your accounts and operations with industry benchmarks since 2020.
            </p>
            <div className="flex gap-3">
              {['share', 'groups'].map((icon) => (
                <button
                  key={icon}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}
                  aria-label={icon}
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                { to: '/services', label: 'Services' },
                { to: '/why-us', label: 'Why Us' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm no-underline transition-opacity hover:opacity-70"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Legal
            </h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {['Accessibility Statement', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm no-underline transition-opacity hover:opacity-70" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col gap-1.5">
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                Kathmandu, Nepal · Australia
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <span className="material-symbols-outlined text-sm mr-1">phone</span>
                +977 9802349038
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 text-center text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
          © 2026 Books Align. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
