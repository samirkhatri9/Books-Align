import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#20303f', color: '#ffffff' }}>
      <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="material-symbols-outlined text-white text-lg">auto_stories</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Work Sans', sans-serif" }}>Books Align</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              NDIS-specialist accounting firm connecting Nepal-based talent with Australian disability healthcare providers.
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
                ABN: XX XXX XXX XXX
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 text-center text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
          © 2024 Books Align. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
