import { Link } from 'react-router-dom'

const regularServices = [

  {
    icon: 'receipt_long',
    title: 'NDIS Claims',
    desc: 'Claim file preparation for NDIA participants, invoice management for plan managers, error reclaiming, reconciliation of claims with received amounts, and 100% NDIA compliance.',
  },
  {
    icon: 'settings',
    title: 'Operational Services',
    desc: 'Funding sufficiency calculations, service and tenancy agreement preparation, Centrelink account management, and participant database maintenance.',
  },
  {
    icon: 'bar_chart',
    title: 'Financial Reporting',
    desc: 'Monthly Management Information System (MIS) reports, bank reconciliation, and financial data prepared audit-ready for NDIS compliance.',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#f9f3e6', borderBottom: '1px solid #eee8db' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-16 max-md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit text-xs font-bold uppercase tracking-widest"
                style={{ background: '#d6e2e8', color: '#556065' }}>
                Specialist NDIS Services
              </div>
              <h1 className="text-5xl max-md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                Innovative, high-quality services for disability providers
              </h1>
              <p className="text-xl max-md:text-base leading-relaxed" style={{ color: '#43474c' }}>
                We handle every accounting and operational function that doesn't require physical presence on-site — so you can scale your NDIS business with confidence.
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden max-md:hidden"
              style={{ background: '#eee8db', border: '1px solid #c4c6cc' }}>
              <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781426493/Services_hero_final_guo3zn.jpg" alt="Services Hero" className="w-full h-full object-cover" />
            </div>
          </div>
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
                  NDIS Bookkeeping
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#43474c' }}>
                  Comprehensive bookkeeping that keeps your NDIS records clean and audit-ready. We handle daily transactions, reconciliations, GST/PAYG, accounts payable & receivable, and monthly MIS reporting.
                </p>
                <ul className="flex flex-col gap-2">
                  {['Daily transaction entry', 'Monthly bank reconciliation & MIS report', 'GST & PAYG reconciliation', 'Accounts payable & receivable'].map((item) => (
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
            <div className="aspect-auto min-h-[240px] overflow-hidden"
              style={{ background: '#f3ede0' }}>
              <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781091876/Services_Bookkeeping_F_tmvbfs.jpg" alt="NDIS Bookkeeping" className="w-full h-full object-cover" />
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
              Make an inquiry and send us a detailed list of your requirements — we'll tailor a solution that fits your NDIS business perfectly.
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
