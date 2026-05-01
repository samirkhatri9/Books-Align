import { Link } from 'react-router-dom'

const regularServices = [
  {
    icon: 'receipt_long',
    title: 'Bookkeeping',
    desc: 'Accurate, NDIS-compliant bookkeeping that keeps your records clean and audit-ready at all times.',
  },
  {
    icon: 'calculate',
    title: 'BAS & Tax',
    desc: 'Timely Business Activity Statements and tax lodgements prepared by Australian-trained accountants.',
  },
  {
    icon: 'badge',
    title: 'Payroll',
    desc: 'End-to-end payroll processing compliant with NDIS worker classifications and Award conditions.',
  },
  {
    icon: 'bar_chart',
    title: 'Financial Reporting',
    desc: 'Detailed financial reports tailored to NDIS audit requirements and board-level transparency.',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#f9f3e6', borderBottom: '1px solid #eee8db' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-16 max-md:py-10 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit text-xs font-bold uppercase tracking-widest"
            style={{ background: '#d6e2e8', color: '#556065' }}>
            Specialist NDIS Services
          </div>
          <h1 className="text-5xl max-md:text-3xl font-bold tracking-tight max-w-2xl" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
            Expert financial support tailored for your journey
          </h1>
          <p className="text-xl max-md:text-base max-w-xl leading-relaxed" style={{ color: '#43474c' }}>
            Every service we offer is designed around the real-world complexity of running an NDIS provider — with compliance, clarity, and care at the centre.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-16 max-md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">

          {/* Featured: Plan Management (spans 2 cols) */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden grid md:grid-cols-2 grid-cols-1"
            style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
            <div className="p-8 flex flex-col gap-5 justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: '#f9f3e6' }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: '#20303f' }}>account_balance_wallet</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: '#d6e2e8', color: '#556065' }}>
                    Most Popular
                  </span>
                </div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                  NDIS Plan &amp; Budget Management
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#43474c' }}>
                  Comprehensive plan management that takes the administrative burden off participants and their families. We handle invoices, track budgets, and ensure every dollar is spent wisely and compliantly.
                </p>
                <ul className="flex flex-col gap-2">
                  {['Invoice processing & payment', 'Real-time budget tracking', 'Monthly statements', 'NDIS portal liaison'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#43474c' }}>
                      <span className="material-symbols-outlined text-base" style={{ color: '#20303f', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact"
                className="px-6 py-3 rounded-lg font-semibold text-sm no-underline w-fit transition-opacity hover:opacity-90"
                style={{ background: '#20303f', color: '#ffffff' }}>
                Get Started
              </Link>
            </div>
            {/* Image side */}
            <div className="aspect-auto min-h-[240px] flex items-center justify-center transition-all"
              style={{ background: '#f3ede0' }}>
              <div className="flex flex-col items-center gap-2 opacity-30">
                <span className="material-symbols-outlined text-5xl" style={{ color: '#0a1b29' }}>account_balance_wallet</span>
                <span className="text-xs" style={{ color: '#0a1b29' }}>Service Image</span>
              </div>
            </div>
          </div>

          {/* Regular services */}
          {regularServices.map(({ icon, title, desc }) => (
            <div key={title}
              className="p-7 rounded-2xl flex flex-col gap-4 transition-all hover:shadow-md"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: '#d6e2e8' }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: '#20303f' }}>{icon}</span>
              </div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>{title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#43474c' }}>{desc}</p>
              <Link to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline mt-auto transition-opacity hover:opacity-70 w-fit px-4 py-2 rounded-lg"
                style={{ background: '#f9f3e6', color: '#20303f', border: '1px solid #eee8db' }}>
                Get Started <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 pb-20 max-md:pb-12">
        <div className="rounded-2xl p-12 max-md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ background: '#20303f' }}>
          <div>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Not sure which service fits you?
            </h2>
            <p className="text-base mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Book a free 30-minute discovery call and we'll find the right fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact"
              className="px-7 py-3 rounded-lg font-semibold text-sm no-underline transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ background: '#fff9ec', color: '#0a1b29' }}>
              Book a Free Call
            </Link>
            <Link to="/contact"
              className="px-7 py-3 rounded-lg font-semibold text-sm no-underline transition-opacity hover:opacity-70 whitespace-nowrap"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
