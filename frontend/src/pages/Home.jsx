import { Link } from 'react-router-dom'

const services = [
  {
    icon: 'account_balance_wallet',
    title: 'Plan Management',
    desc: 'End-to-end NDIS plan management so participants can focus on their goals, not the paperwork.',
  },
  {
    icon: 'menu_book',
    title: 'NDIS Bookkeeping',
    desc: 'Accurate, compliant bookkeeping tailored to the unique requirements of NDIS providers.',
  },
  {
    icon: 'bar_chart',
    title: 'Financial Reporting',
    desc: 'Clear, accessible financial reports that meet NDIS audit standards and support decision-making.',
  },
]

const trustStats = [
  { icon: 'workspace_premium', value: '10+', label: 'Years Experience' },
  { icon: 'group', value: '500+', label: 'Clients Served' },
  { icon: 'verified', value: 'CPA/CA', label: 'Certified Accountants' },
]

const whyValues = [
  { icon: 'favorite', title: 'Person-Centred Approach', desc: 'Every client is a person first. We tailor our services around your goals, not a template.' },
  { icon: 'psychology', title: 'Sector Expertise', desc: 'Deep knowledge of NDIS pricing, compliance, and reporting requirements built over a decade.' },
  { icon: 'public', title: 'Global Talent', desc: 'Nepal-based team working Australian hours, delivering outstanding service at competitive rates.' },
  { icon: 'accessibility_new', title: 'Accessibility-First', desc: 'We design our communications and processes to be clear and accessible for everyone we work with.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-20 max-md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit text-sm font-semibold uppercase tracking-widest"
              style={{ background: '#d6e2e8', color: '#556065' }}>
              <span className="material-symbols-outlined text-base">verified</span>
              NDIS Specialists · Nepal &amp; Australia
            </div>
            <h1 className="text-5xl max-md:text-3xl font-bold leading-tight tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
              Accounting built for NDIS providers
            </h1>
            <p className="text-xl max-md:text-base leading-relaxed" style={{ color: '#43474c' }}>
              Expert financial management from a dedicated Nepal-based team, built around the unique compliance and reporting needs of Australian disability care providers.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/contact"
                className="px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-opacity hover:opacity-90 active:scale-95"
                style={{ background: '#20303f', color: '#ffffff' }}>
                Book a Free Call
              </Link>
              <Link to="/services"
                className="px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-colors hover:bg-opacity-80"
                style={{ background: '#f3ede0', color: '#0a1b29', border: '1px solid #c4c6cc' }}>
                View Services
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: '#f3ede0', border: '1px solid #c4c6cc' }}>
              <div className="flex flex-col items-center gap-3 opacity-40">
                <span className="material-symbols-outlined text-6xl" style={{ color: '#0a1b29' }}>groups</span>
                <span className="text-sm font-medium" style={{ color: '#0a1b29' }}>Hero Image</span>
              </div>
            </div>
            {/* Floating testimonial */}
            <div className="absolute -bottom-4 -left-4 max-md:hidden p-4 rounded-xl shadow-lg max-w-[240px]"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-base" style={{ color: '#f59e0b', fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed italic" style={{ color: '#43474c' }}>
                "Books Align transformed our NDIS reporting."
              </p>
              <p className="text-xs font-semibold mt-2" style={{ color: '#0a1b29' }}>— Sarah M., Provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ background: '#f9f3e6', borderTop: '1px solid #eee8db', borderBottom: '1px solid #eee8db' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-10">
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
            {trustStats.map(({ icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#d6e2e8' }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: '#20303f' }}>{icon}</span>
                </div>
                <div>
                  <p className="text-2xl font-bold leading-none" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>{value}</p>
                  <p className="text-sm mt-0.5" style={{ color: '#556065' }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-20 max-md:py-12">
        <div className="flex flex-col gap-3 mb-10">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#556065' }}>What we do</span>
          <h2 className="text-4xl max-md:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
            Specialist NDIS financial services
          </h2>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          {services.map(({ icon, title, desc }) => (
            <div key={title}
              className="p-8 rounded-2xl flex flex-col gap-4 transition-all hover:shadow-md group"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: '#f9f3e6' }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: '#20303f' }}>{icon}</span>
              </div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>{title}</h3>
              <p className="text-base leading-relaxed" style={{ color: '#43474c' }}>{desc}</p>
              <Link to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline mt-auto transition-opacity hover:opacity-70"
                style={{ color: '#20303f' }}>
                Learn more <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Books Align */}
      <section style={{ background: '#f9f3e6' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-20 max-md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#556065' }}>Why choose us</span>
                <h2 className="text-4xl max-md:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                  Built on expertise.<br />Driven by purpose.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyValues.map(({ icon, title, desc }) => (
                  <div key={title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl" style={{ color: '#20303f' }}>{icon}</span>
                      <h4 className="text-base font-semibold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>{title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#43474c' }}>{desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/why-us"
                className="inline-flex items-center gap-2 no-underline font-semibold text-sm transition-opacity hover:opacity-70 w-fit"
                style={{ color: '#20303f' }}>
                Our full story <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4 max-md:hidden">
              {[
                { h: 'h-44', label: 'Team at work' },
                { h: 'h-32', label: 'Client meeting' },
                { h: 'h-32', label: 'Office space' },
                { h: 'h-44', label: 'Australia connection' },
              ].map(({ h, label }, i) => (
                <div key={i}
                  className={`${h} rounded-2xl flex items-center justify-center`}
                  style={{ background: '#eee8db', border: '1px solid #c4c6cc' }}>
                  <span className="text-xs opacity-40" style={{ color: '#0a1b29' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-20 max-md:py-12">
          <div className="rounded-2xl p-14 max-md:p-8 text-center flex flex-col items-center gap-6"
            style={{ background: '#20303f' }}>
            <h2 className="text-4xl max-md:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Ready to align your books?
            </h2>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Join hundreds of NDIS providers who trust Books Align for accurate, compliant, and stress-free financial management.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link to="/contact"
                className="px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-opacity hover:opacity-90"
                style={{ background: '#fff9ec', color: '#0a1b29' }}>
                Book a Free Call
              </Link>
              <Link to="/services"
                className="px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-opacity hover:opacity-80"
                style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff' }}>
                Our Fee Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
