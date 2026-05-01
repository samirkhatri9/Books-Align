import { useState } from 'react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: "Books Align completely transformed how we manage our NDIS finances. Their team is responsive, knowledgeable, and genuinely cares about our participants.",
    name: 'Sarah Mitchell',
    title: 'Director, Bright Futures Care',
  },
  {
    quote: "The Nepal-based team works to Australian hours and truly understands our compliance requirements. I can't recommend them highly enough.",
    name: 'James Okoye',
    title: 'Finance Manager, CareConnect',
  },
  {
    quote: "Finally, an accounting firm that speaks NDIS fluently. Our reporting time has been cut in half since switching to Books Align.",
    name: 'Priya Sharma',
    title: 'CEO, Inclusive Support Services',
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
              The partner you've been looking for
            </h1>
            <p className="text-xl max-md:text-base leading-relaxed" style={{ color: '#43474c' }}>
              We combine deep NDIS sector knowledge with a passionate, global team to deliver accounting services that are accurate, accessible, and genuinely supportive.
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
            <div className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center"
              style={{ background: '#f3ede0', border: '1px solid #c4c6cc' }}>
              <div className="flex flex-col items-center gap-2 opacity-30">
                <span className="material-symbols-outlined text-5xl" style={{ color: '#0a1b29' }}>groups</span>
                <span className="text-xs" style={{ color: '#0a1b29' }}>Team Photo</span>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute top-4 right-4 p-4 rounded-xl"
              style={{ background: '#20303f', color: '#ffffff' }}>
              <p className="text-3xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>98%</p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>Client Satisfaction</p>
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
                  Our Nepal-based team is rigorously trained in Australian tax law, NDIS compliance, and local accounting standards — delivering world-class service at accessible rates.
                </p>
                <ul className="flex flex-col gap-2">
                  {['24/7 Processing Capability', 'Rigorous Australian Tax Training', 'NDIS Compliance Certified', 'Australian hours coverage'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#43474c' }}>
                      <span className="material-symbols-outlined text-base" style={{ color: '#20303f', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-h-[200px] flex items-center justify-center"
                style={{ background: '#f3ede0' }}>
                <div className="opacity-30 flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-5xl" style={{ color: '#0a1b29' }}>public</span>
                  <span className="text-xs" style={{ color: '#0a1b29' }}>Nepal — Australia</span>
                </div>
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
                10+ years working exclusively with NDIS providers — we understand the pricing, the audits, and the compliance landscape inside out.
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
                  We believe everyone deserves clear, respectful financial communication — regardless of ability, background, or technical knowledge.
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
            Trusted by NDIS providers
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
            Book a free 30-minute consultation and discover how Books Align can simplify your NDIS finances.
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
