import { Link } from 'react-router-dom'

const services = [
  {
    icon: 'menu_book',
    title: 'Bookkeeping',
    desc: 'Daily transaction entry, bank reconciliation, GST/PAYG reconciliation, accounts payable & receivable, and monthly MIS reporting — fully NDIS-compliant.',
  },
  {
    icon: 'badge',
    title: 'Payroll',
    desc: 'End-to-end payroll processing compliant with SCHADS Award, timesheet verification, payslip distribution, and superannuation processing.',
  },
  {
    icon: 'receipt_long',
    title: 'NDIS Claims',
    desc: 'Claim file preparation for NDIA participants, invoice management for plan managers, claims reconciliation, and 100% compliance with NDIA updates.',
  },
]

const trustStats = [
  { icon: 'workspace_premium', value: 'Since 2020', label: 'Serving NDIS Providers' },
  { icon: 'group', value: '100+', label: 'Participants Managed' },
  { icon: 'verified', value: 'CPA/CA', label: 'Chartered Accountants' },
]

const whyValues = [
  { icon: 'handshake', title: 'Collaboration', desc: 'We work alongside your team as a true partner, embracing an open-minded approach to solving your unique operational challenges.' },
  { icon: 'trending_up', title: 'Empowerment', desc: 'We empower disability service providers to achieve everything the industry has to offer through expert financial management.' },
  { icon: 'favorite', title: 'Dignity & Respect', desc: 'Every client interaction is grounded in dignity and respect, reflecting the core values of the disability sector we serve.' },
  { icon: 'public', title: 'Cultural Diversity', desc: 'Our Nepal-based Chartered Accountants bring diverse expertise and work Australian hours to serve providers across the country.' },
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
              Best NDIS Bookkeeping Services
            </div>
            <h1 className="text-5xl max-md:text-3xl font-bold leading-tight tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
              Aligning your NDIS business’ accounts and operations with industry benchmarks
            </h1>
            <p className="text-xl max-md:text-base leading-relaxed" style={{ color: '#43474c' }}>
              We are here to simplify your NDIS operations in each and every step including and not limited to preparation of various agreements, funding due diligence for new participants, payroll processing and claiming, reporting on each participants and all your book keeping needs.
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
                Understand Our Services
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: '#f3ede0', border: '1px solid #c4c6cc' }}>
              <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781089163/Services_Bookkeeping_jjf9fj.jpg" alt="Hero" className="w-full h-full object-cover" />
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
                "Books Align simplified our NDIS financial management entirely."
              </p>
              <p className="text-xs font-semibold mt-2" style={{ color: '#0a1b29' }}>— Charlotte H., Provider</p>
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
            Specialist NDIS bookkeeping & operational services
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

      {/* How It Works */}
      <section style={{ background: '#f3ede0' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-20 max-md:py-12">
          <div className="flex flex-col items-center gap-3 mb-14 text-center">
            <span className="px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
              style={{ background: '#ffffff', color: '#556065', borderColor: '#c4c6cc' }}>
              Our Working Process
            </span>
            <h2 className="text-4xl max-md:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
              Get Started In Just{' '}
              <span className="relative inline-block">
                3 Steps
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M4 8 Q60 2 116 8" stroke="#e8a020" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 items-end">
            {/* Step 1 */}
            <div className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="h-52 flex items-center justify-center" style={{ background: '#ddeaf2' }}>
                <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781426184/Home_Make_An_Inquiry_oyk2dv.jpg" alt="Step 1" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-1">
                <span className="text-xs font-bold tracking-widest" style={{ color: '#556065' }}>01</span>
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>Make An Inquiry</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#556065' }}>Reach out to us via phone, email, or our contact form to start the conversation.</p>
              </div>
              {/* connector right */}
              <div className="absolute top-1/3 -right-4 hidden lg:flex items-center z-10">
                
              </div>
            </div>

            {/* Step 2 — elevated */}
            <div className="relative flex flex-col rounded-2xl overflow-hidden -mt-6 max-md:mt-0"
              style={{ background: '#ffffff', border: '2px solid #20303f' }}>
              <div className="h-64 max-md:h-52 flex items-center justify-center" style={{ background: '#d4edda' }}>
                <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781089162/GET_STARTED_IMAGE_02_c3gj4p.png" alt="Step 2" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-1">
              </div>
              <div className="p-6 flex flex-col gap-1">
                <span className="text-xs font-bold tracking-widest" style={{ color: '#556065' }}>02</span>
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>Send Detailed List Of Service Requirements</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#556065' }}>Share your current setup, participant data, and what services you need so we can tailor our support.</p>
              </div>
              {/* connector right */}
              <div className="absolute top-1/3 -right-4 hidden lg:flex items-center z-10">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                  <path d="M2 20 Q20 20 20 12 Q20 4 38 4" stroke="#c4c6cc" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="h-52 flex items-center justify-center" style={{ background: '#d6e2e8' }}>
                <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781426184/Home_Onboarding_jdi3vm.jpg" alt="Step 3" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-1">
                <span className="text-xs font-bold tracking-widest" style={{ color: '#556065' }}>03</span>
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>Start Aligning Your Books And Operations</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#556065' }}>We onboard you smoothly and begin managing your bookkeeping, payroll, and NDIS claims right away.</p>
              </div>
            </div>
          </div>
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
                  Built on collaboration.<br />Driven by empowerment.
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
                { h: 'h-44', src: 'https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781089164/Home_Team_At_work_xa1gmj.jpg', alt: 'Team at work' },
                { h: 'h-32', src: 'https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781089163/Home_Client_meeting_g6jumq.jpg', alt: 'Client meeting' },
                { h: 'h-32', src: 'https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781089163/Home_Pic4_bhwwhj.jpg', alt: 'Office space' },
                { h: 'h-44', src: 'https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781089163/Home_about_Section_le9wkr.jpg', alt: 'Australia connection' },
              ].map(({ h, src, alt }, i) => (
                <div key={i}
                  className={`${h} rounded-2xl overflow-hidden`}
                  style={{ background: '#eee8db', border: '1px solid #c4c6cc' }}>
                  <img src={src} alt={alt} className="w-full h-full object-cover" />
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
              Let us handle your bookkeeping, payroll, and NDIS claims so you can focus on what matters — your participants. Make an inquiry today to get started.
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
