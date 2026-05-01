import { useState } from 'react'

const serviceOptions = [
  'NDIS Plan Management',
  'Bookkeeping',
  'BAS & Tax',
  'Payroll',
  'Financial Reporting',
  'Other',
]

const contactDetails = [
  { icon: 'phone', label: 'Phone', value: '+61 2 XXXX XXXX' },
  { icon: 'mail', label: 'Email', value: 'hello@booksalign.com.au' },
  { icon: 'location_on', label: 'Office', value: 'Kathmandu, Nepal\n(Serving Australia-wide)' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Placeholder — will POST to /api/contact when backend is ready
    await new Promise((res) => setTimeout(res, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Page header */}
      <section style={{ background: '#f9f3e6', borderBottom: '1px solid #eee8db' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-14 max-md:py-10 flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#556065' }}>Get in touch</span>
          <h1 className="text-5xl max-md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
            We'd love to hear from you
          </h1>
          <p className="text-xl max-md:text-base max-w-xl leading-relaxed" style={{ color: '#43474c' }}>
            Book a free discovery call or send us a message. Our team responds within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-16 max-md:py-10">
        <div className="grid grid-cols-12 gap-10 max-md:grid-cols-1">

          {/* Contact Form — 7 cols */}
          <div className="col-span-7 max-md:col-span-1">
            <div className="rounded-2xl p-8 max-md:p-6"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                Send us a message
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: '#d6e2e8' }}>
                    <span className="material-symbols-outlined text-3xl" style={{ color: '#20303f', fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                    Message sent!
                  </h3>
                  <p className="text-base leading-relaxed max-w-sm" style={{ color: '#43474c' }}>
                    Thank you for reaching out. We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', business: '', email: '', phone: '', service: '', message: '' }) }}
                    className="mt-2 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: '#20303f' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Name *</label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: '1px solid #c4c6cc', background: '#fff9ec', color: '#1d1c14', fontFamily: "'Public Sans', sans-serif" }}
                        onFocus={e => e.target.style.borderColor = '#0a1b29'}
                        onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Business Name</label>
                      <input
                        type="text" name="business" value={form.business} onChange={handleChange}
                        placeholder="Your organisation"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: '1px solid #c4c6cc', background: '#fff9ec', color: '#1d1c14', fontFamily: "'Public Sans', sans-serif" }}
                        onFocus={e => e.target.style.borderColor = '#0a1b29'}
                        onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Email *</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: '1px solid #c4c6cc', background: '#fff9ec', color: '#1d1c14', fontFamily: "'Public Sans', sans-serif" }}
                        onFocus={e => e.target.style.borderColor = '#0a1b29'}
                        onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+61 4XX XXX XXX"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: '1px solid #c4c6cc', background: '#fff9ec', color: '#1d1c14', fontFamily: "'Public Sans', sans-serif" }}
                        onFocus={e => e.target.style.borderColor = '#0a1b29'}
                        onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Service *</label>
                    <select
                      name="service" value={form.service} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all appearance-none cursor-pointer"
                      style={{ border: '1px solid #c4c6cc', background: '#fff9ec', color: form.service ? '#1d1c14' : '#74777c', fontFamily: "'Public Sans', sans-serif" }}
                      onFocus={e => e.target.style.borderColor = '#0a1b29'}
                      onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                    >
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your organisation and what you need help with..."
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                      style={{ border: '1px solid #c4c6cc', background: '#fff9ec', color: '#1d1c14', fontFamily: "'Public Sans', sans-serif" }}
                      onFocus={e => e.target.style.borderColor = '#0a1b29'}
                      onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-lg font-semibold text-base transition-opacity hover:opacity-90 active:scale-95 disabled:opacity-60"
                    style={{ background: '#20303f', color: '#ffffff', fontFamily: "'Public Sans', sans-serif" }}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info + Booking — 5 cols */}
          <div className="col-span-5 max-md:col-span-1 flex flex-col gap-6">

            {/* Contact details */}
            <div className="rounded-2xl p-6"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <h3 className="text-base font-bold mb-5" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                Contact Details
              </h3>
              <div className="flex flex-col gap-4">
                {contactDetails.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: '#f9f3e6', border: '1px solid #eee8db' }}>
                      <span className="material-symbols-outlined text-base" style={{ color: '#20303f' }}>{icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#74777c' }}>{label}</p>
                      <p className="text-sm mt-0.5 whitespace-pre-line" style={{ color: '#1d1c14' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendly placeholder */}
            <div className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <h3 className="text-base font-bold" style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                Book a Time
              </h3>
              <div className="aspect-[4/3] rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:opacity-80"
                style={{ background: '#f3ede0', border: '2px dashed #c4c6cc' }}>
                <span className="material-symbols-outlined text-4xl" style={{ color: '#20303f' }}>calendar_month</span>
                <p className="text-sm font-semibold" style={{ color: '#43474c' }}>Calendly booking</p>
                <p className="text-xs text-center px-4" style={{ color: '#74777c' }}>Pick a time that suits you for a free 30-min discovery call</p>
                <button
                  className="mt-1 px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: '#d6e2e8', color: '#20303f' }}>
                  Select a Time
                </button>
              </div>
            </div>

            {/* Compliance note */}
            <div className="rounded-xl p-4 flex gap-3"
              style={{ background: '#eee8db' }}>
              <span className="material-symbols-outlined text-base flex-shrink-0 mt-0.5" style={{ color: '#74777c' }}>info</span>
              <p className="text-xs leading-relaxed" style={{ color: '#43474c' }}>
                All information shared is handled in accordance with the NDIS Privacy Policy and Australian Privacy Act. We do not share your data with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
