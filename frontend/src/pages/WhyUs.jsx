import { useState } from 'react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: "Books Align provides tailored bookkeeping and accounting services that ensure all our NDIS transactions are compliant and organised. Highly recommend their expertise.",
    name: 'Charlotte Harris',
    title: 'NDIS Provider',
  },
  {
    quote: "They simplify our NDIS financial management by taking care of every detail — from daily bookkeeping to payroll. We can finally focus on our participants.",
    name: 'Sophia Brown',
    title: 'Disability Support Manager',
  },
  {
    quote: "Our NDIS bookkeeping and plan finances are always organised and audit-ready. Books Align keeps us 100% compliant with every NDIA update.",
    name: 'Charlotte Harris',
    title: 'Operations Director',
  },
]

const toolChips = ['Xero', 'MYOB', 'QuickBooks', 'ShiftCare', 'Deputy', 'NDIS Portal', 'Planit']

const accessibilityValues = [
  { icon: 'record_voice_over', label: 'Plain language always' },
  { icon: 'accessible_forward', label: 'Disability-inclusive' },
  { icon: 'translate', label: 'Multilingual support' },
  { icon: 'schedule', label: 'Flexible scheduling' },
]

export default function WhyUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-20 max-md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#556065' }}>Why Books Align</span>
            <h1 className="text-5xl max-md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
              Empowering NDIS providers to achieve more
            </h1>
            <p className="text-xl max-md:text-base leading-relaxed" style={{ color: '#43474c' }}>
              Booksalign is a finance company led by a team of Chartered Accountants familiar with Australian business rules and regulations — helping disability service providers scale from 15 to 100+ participants since 2020.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: '#d6e2e8', color: '#556065' }}>
                <span className="material-symbols-outlined text-base">verified</span> Certified CPA/CA
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: '#f9f3e6', color: '#556065', border: '1px solid #eee8db' }}>
                <span className="material-symbols-outlined text-base">local_hospital</span> NDIS Specialists
              </div>
            </div>
          </div>

          {/* Hero image with stat card */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ background: '#f3ede0', border: '1px solid #c4c6cc' }}>
              <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781426184/Why_US_hero_final_stcgyt.jpg" alt="Team Photo" className="w-full h-full object-cover" />
            </div>
            {/* Floating stat */}
            <div className="absolute top-4 right-4 p-4 rounded-xl"
              style={{ background: '#20303f', color: '#ffffff' }}>
              <p className="text-3xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>100%</p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>NDIA Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento advantage grid */}
      <section style={{ background: '#f9f3e6' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-16 max-md:py-10">
          <div className="flex flex-col gap-3 mb-10">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#556065' }}>Our advantages</span>
            <h2 className="text-4xl max-md:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
              Built different, on purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Global Talent (spans 2 on md) */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden grid md:grid-cols-2"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="p-8 flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: '#f9f3e6' }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: '#20303f' }}>public</span>
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>Global Talent, Local Impact</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#43474c' }}>
                  Our Nepal-based Chartered Accountants are rigorously trained in Australian tax law, NDIS compliance, and local accounting standards — delivering world-class service at cost-effective rates.
                </p>
                <ul className="flex flex-col gap-2">
                  {['Australian hours coverage', 'Familiar with Australian business rules & regulations', 'NDIA compliance incorporated into every process', 'Serving providers since 2020'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#43474c' }}>
                      <span className="material-symbols-outlined text-base" style={{ color: '#20303f', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-h-[200px] overflow-hidden"
                style={{ background: '#f3ede0' }}>
                <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781089163/Why_US_Nepal-australia_kldodp.jpg" alt="Nepal — Australia" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2: NDIS Sector Experts */}
            <div className="rounded-2xl p-8 relative overflow-hidden flex flex-col gap-4"
              style={{ background: '#20303f' }}>
              <span className="material-symbols-outlined text-[96px] absolute -bottom-4 -right-4 opacity-10 text-white">
                local_hospital
              </span>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center z-10"
                style={{ background: '#1e2d3a' }}>
                <span className="material-symbols-outlined text-2xl text-white">local_hospital</span>
              </div>
              <h3 className="text-xl font-bold text-white z-10" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                NDIS Sector Experts
              </h3>
              <p className="text-sm leading-relaxed z-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Serving NDIS providers since 2020, we understand NDIS pricing, NDIA updates, claim compliance, and SCHADS Award payroll inside out.
              </p>
            </div>

            {/* Card 3: Tools */}
            <div className="rounded-2xl p-8 flex flex-col gap-5"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: '#f9f3e6' }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: '#20303f' }}>settings</span>
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                Your Tools, Mastered
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#43474c' }}>
                We're proficient in all major NDIS and accounting platforms — no switching required.
              </p>
              <div className="flex flex-wrap gap-2">
                {toolChips.map((tool) => (
                  <span key={tool}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: '#d6e2e8', color: '#556065' }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4: Accessibility (spans 2) */}
            <div className="md:col-span-2 rounded-2xl p-8 flex flex-col gap-6"
              style={{ background: '#e8e2d5' }}>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.6)' }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: '#20303f' }}>accessibility_new</span>
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                  Accessibility-First Values
                </h3>
                <p className="text-sm leading-relaxed max-w-xl" style={{ color: '#43474c' }}>
                  We deliver the highest quality of services through collaboration, empowerment, dignity and respect — embracing cultural diversity and an open-minded approach in everything we do.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {accessibilityValues.map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl text-center"
                    style={{ background: 'rgba(255,255,255,0.5)' }}>
                    <span className="material-symbols-outlined text-2xl" style={{ color: '#20303f' }}>{icon}</span>
                    <span className="text-xs font-semibold" style={{ color: '#0a1b29' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-20 max-md:py-12">
        <div className="flex flex-col gap-3 mb-10">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#556065' }}>What clients say</span>
          <h2 className="text-4xl max-md:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, title }, i) => (
            <div key={i}
              className="p-7 rounded-2xl flex flex-col gap-4"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="material-symbols-outlined text-base"
                    style={{ color: '#f59e0b', fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-base leading-relaxed italic flex-1" style={{ color: '#43474c' }}>"{quote}"</p>
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid #eee8db' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: '#d6e2e8', color: '#20303f' }}>
                  {name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#0a1b29' }}>{name}</p>
                  <p className="text-xs" style={{ color: '#74777c' }}>{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i}
              onClick={() => setActiveTestimonial(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === activeTestimonial ? '#0a1b29' : '#c4c6cc' }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 pb-20 max-md:pb-12">
        <div className="rounded-2xl p-14 max-md:p-8 text-center flex flex-col items-center gap-6"
          style={{ background: '#0a1b29' }}>
          <h2 className="text-4xl max-md:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            Let's work together
          </h2>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Make an inquiry, send us your requirements, and let's start aligning your books and operations with industry benchmarks.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link to="/contact"
              className="px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-opacity hover:opacity-90"
              style={{ background: '#fff9ec', color: '#0a1b29' }}>
              Book Your Free Consultation
            </Link>
            <Link to="/services"
              className="px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-opacity hover:opacity-70"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
