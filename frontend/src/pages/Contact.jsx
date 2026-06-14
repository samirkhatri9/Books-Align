import { useState } from 'react'
import api from '../lib/api'

const RECAPTCHA_SITE_KEY = '6LchDe0sAAAAAPPLQyG-4HhcSNzrNy-G_Dv8q55G'

function getRecaptchaToken(action) {
  return new Promise((resolve) => {
    if (!window.grecaptcha) return resolve('')
    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action })
        resolve(token || '')
      } catch {
        resolve('')
      }
    })
  })
}

// ── Static data ───────────────────────────────────────────────────────────────

const serviceOptions = [
  'NDIS Plan Management',
  'Bookkeeping',
  'BAS & Tax',
  'Payroll',
  'Financial Reporting',
  'Other',
]

const contactDetails = [
  { icon: 'phone', label: 'Phone', value: '+977 9802349038' },
  { icon: 'mail', label: 'Email', value: 'info@booksalign.com' },
  { icon: 'location_on', label: 'Office', value: 'Kathmandu, Nepal\n(Serving Australia-wide)' },
]

const DAY_HEADERS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// 9:00 AM – 4:30 PM in 30-min intervals
const TIME_SLOTS = (() => {
  const slots = []
  for (let h = 9; h <= 16; h++) {
    for (const m of [0, 30]) {
      const suffix = h < 12 ? 'AM' : 'PM'
      const displayH = h === 12 ? 12 : h > 12 ? h - 12 : h
      slots.push(`${displayH}:${m === 0 ? '00' : '30'} ${suffix}`)
    }
  }
  return slots
})()

// ── BookingCalendar component ─────────────────────────────────────────────────

function BookingCalendar({ form, onSuccess, onFormSubmitted }) {
  const now = new Date()
  const [viewYear, setViewYear] = useState(now.getFullYear())
  const [viewMonth, setViewMonth] = useState(now.getMonth())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Earliest bookable day is tomorrow (same-day not available)
  const tomorrow = new Date()
  tomorrow.setHours(0, 0, 0, 0)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const isCurrentMonth =
    viewYear === now.getFullYear() && viewMonth === now.getMonth()

  const prevMonth = () => {
    if (isCurrentMonth) return
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
    setSelectedDate(null)
    setSelectedTime(null)
  }

  // Build flat cell array: null = empty leading cell, object = day cell
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1)
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const startOffset = (firstDayOfMonth.getDay() + 6) % 7 // Mon = 0

  const cells = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(viewYear, viewMonth, d)
    const dow = date.getDay()
    cells.push({ day: d, date, disabled: dow === 0 || dow === 6 || date < tomorrow })
  }

  const isSelected = (cell) =>
    cell && selectedDate && cell.date.toDateString() === selectedDate.toDateString()

  const handleDayClick = (cell) => {
    if (!cell || cell.disabled) return
    setSelectedDate(cell.date)
    setSelectedTime(null)
    setError('')
  }

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime) return
    if (!form.name || !form.email) {
      setError('Please fill in your name and email in the contact form first.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const y = selectedDate.getFullYear()
      const mo = String(selectedDate.getMonth() + 1).padStart(2, '0')
      const d = String(selectedDate.getDate()).padStart(2, '0')
      const dateStr = `${y}-${mo}-${d}`

      const recaptchaToken = await getRecaptchaToken('booking')

      await api.post('/api/booking', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        businessName: form.business,
        service: form.service,
        date: dateStr,
        time: selectedTime,
        timezone: 'Australia/Sydney',
        recaptchaToken,
      })

      onFormSubmitted()
      onSuccess({ date: selectedDate, time: selectedTime })
    } catch (err) {
      setError(err.message || 'Booking failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const canConfirm = selectedDate && selectedTime && !loading

  return (
    <div className="rounded-2xl p-6 flex flex-col gap-4"
      style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>

      <div>
        <h3 className="text-base font-bold"
          style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
          Book a Time
        </h3>
        <p className="text-xs mt-0.5" style={{ color: '#74777c' }}>
          30-min discovery call · AEST · Mon–Fri only
        </p>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevMonth}
          disabled={isCurrentMonth}
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{
            background: '#f9f3e6',
            border: '1px solid #eee8db',
            color: isCurrentMonth ? '#c4c6cc' : '#0a1b29',
            cursor: isCurrentMonth ? 'default' : 'pointer',
          }}
          aria-label="Previous month"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>

        <span className="text-sm font-bold"
          style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>

        <button
          onClick={nextMonth}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ background: '#f9f3e6', border: '1px solid #eee8db', color: '#0a1b29', cursor: 'pointer' }}
          aria-label="Next month"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>

      {/* Calendar grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
        {/* Day-of-week headers */}
        {DAY_HEADERS.map(h => (
          <div key={h} className="text-center text-xs font-bold py-1"
            style={{ color: '#74777c' }}>
            {h}
          </div>
        ))}

        {/* Day cells */}
        {cells.map((cell, i) => {
          if (!cell) return <div key={`gap-${i}`} />

          const sel = isSelected(cell)
          return (
            <button
              key={cell.day}
              onClick={() => handleDayClick(cell)}
              disabled={cell.disabled}
              className="aspect-square rounded-lg text-xs font-semibold flex items-center justify-center transition-colors"
              style={{
                background: sel ? '#0a1b29' : 'transparent',
                color: cell.disabled ? '#d0d0d0' : sel ? '#ffffff' : '#0a1b29',
                cursor: cell.disabled ? 'default' : 'pointer',
                outline: 'none',
              }}
              onMouseEnter={e => {
                if (!cell.disabled && !sel) e.currentTarget.style.background = '#f3ede0'
              }}
              onMouseLeave={e => {
                if (!cell.disabled && !sel) e.currentTarget.style.background = 'transparent'
              }}
              aria-label={cell.date.toLocaleDateString('en-AU', { day: 'numeric', month: 'long' })}
            >
              {cell.day}
            </button>
          )
        })}
      </div>

      {/* Time slots — shown after a date is picked */}
      {selectedDate && (
        <div className="flex flex-col gap-3 pt-3" style={{ borderTop: '1px solid #eee8db' }}>
          <p className="text-xs font-semibold" style={{ color: '#43474c' }}>
            {selectedDate.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'short' })}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
            {TIME_SLOTS.map(slot => {
              const isSel = selectedTime === slot
              return (
                <button
                  key={slot}
                  onClick={() => { setSelectedTime(slot); setError('') }}
                  className="py-2 rounded-lg text-xs font-semibold transition-colors"
                  style={{
                    background: isSel ? '#0a1b29' : '#f9f3e6',
                    color: isSel ? '#ffffff' : '#0a1b29',
                    border: `1px solid ${isSel ? '#0a1b29' : '#eee8db'}`,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (!isSel) e.currentTarget.style.background = '#eee8db'
                  }}
                  onMouseLeave={e => {
                    if (!isSel) e.currentTarget.style.background = '#f9f3e6'
                  }}
                >
                  {slot}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="text-xs leading-relaxed" style={{ color: '#ba1a1a' }}>{error}</p>
      )}

      {/* Confirm button */}
      <button
        onClick={handleConfirm}
        disabled={!canConfirm}
        className="w-full py-3 rounded-lg font-semibold text-sm transition-opacity"
        style={{
          background: canConfirm ? '#0a1b29' : 'rgba(10,27,41,0.18)',
          color: canConfirm ? '#ffffff' : 'rgba(10,27,41,0.4)',
          cursor: canConfirm ? 'pointer' : 'default',
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        {loading ? 'Confirming…' : 'Confirm Booking'}
      </button>
    </div>
  )
}

// ── Contact page ──────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [bookingConfirmed, setBookingConfirmed] = useState(null) // { date, time }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const recaptchaToken = await getRecaptchaToken('contact_form')
      await api.post('/api/contact', { ...form, recaptchaToken })
      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    border: '1px solid #c4c6cc',
    background: '#fff9ec',
    color: '#1d1c14',
    fontFamily: "'Public Sans', sans-serif",
  }

  return (
    <>
      {/* Page header */}
      <section style={{ background: '#f9f3e6', borderBottom: '1px solid #eee8db' }}>
        <div className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-14 max-md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#556065' }}>Get in touch</span>
              <h1 className="text-5xl max-md:text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                Make an inquiry
              </h1>
              <p className="text-xl max-md:text-base leading-relaxed" style={{ color: '#43474c' }}>
                Send us a detailed list of your service requirements and we'll get back to you within one business day to start aligning your books.
              </p>
            </div>
            <div className="w-full h-48 rounded-2xl overflow-hidden max-md:hidden"
              style={{ background: '#eee8db', border: '1px solid #c4c6cc' }}>
              <img src="https://res.cloudinary.com/dpnzgxrdb/image/upload/v1781092692/Contact_Hero_c4t4kh.jpg" alt="Contact Hero" className="w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-[1200px] mx-auto px-16 max-md:px-5 py-16 max-md:py-10">
        <div className="grid grid-cols-12 gap-10 max-md:grid-cols-1">

          {/* Contact form — 7 cols */}
          <div className="col-span-7 max-md:col-span-1">
            {submitted ? (
              <div className="rounded-2xl p-6 flex flex-col items-center gap-4 text-center"
                style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mt-2"
                  style={{ background: '#d6e2e8' }}>
                  <span className="material-symbols-outlined text-3xl"
                    style={{ color: '#20303f', fontVariationSettings: "'FILL' 1" }}>mark_email_read</span>
                </div>
                <h3 className="text-lg font-bold"
                  style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                  Message sent!
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#43474c' }}>
                  Thank you for reaching out. We'll be in touch within one business day.
                </p>
                <p className="text-xs" style={{ color: '#74777c' }}>
                  A confirmation has been sent to your email.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setError('')
                    setForm({ name: '', business: '', email: '', phone: '', service: '', message: '' })
                  }}
                  className="mt-1 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: '#20303f' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <div className="rounded-2xl p-8 max-md:p-6"
                style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
                <h2 className="text-xl font-bold mb-6"
                  style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Name *</label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={inputStyle}
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
                        style={inputStyle}
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
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#0a1b29'}
                        onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold" style={{ color: '#0a1b29' }}>Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} required onChange={handleChange}
                        placeholder="+61 4XX XXX XXX"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={inputStyle}
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
                      style={{ ...inputStyle, color: form.service ? '#1d1c14' : '#74777c' }}
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
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#0a1b29'}
                      onBlur={e => e.target.style.borderColor = '#c4c6cc'}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-center" style={{ color: '#ba1a1a' }}>{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    
                    className="w-full py-3.5 rounded-lg font-semibold text-base transition-opacity hover:opacity-90 active:scale-95 disabled:opacity-60"
                    style={{ background: '#20303f', color: '#ffffff', fontFamily: "'Public Sans', sans-serif" }}>
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar — 5 cols */}
          <div className="col-span-5 max-md:col-span-1 flex flex-col gap-6">

            {/* Contact details */}
            <div className="rounded-2xl p-6"
              style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
              <h3 className="text-base font-bold mb-5"
                style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
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

            {/* Booking calendar / success state */}
            {bookingConfirmed ? (
                
              <div className="rounded-2xl p-6 flex flex-col items-center gap-4 text-center"
                style={{ background: '#ffffff', border: '1px solid #c4c6cc' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mt-2"
                  style={{ background: '#d6e2e8' }}>
                  <span className="material-symbols-outlined text-3xl"
                    style={{ color: '#20303f', fontVariationSettings: "'FILL' 1" }}>event_available</span>
                </div>
                <h3 className="text-lg font-bold"
                  style={{ fontFamily: "'Work Sans', sans-serif", color: '#0a1b29' }}>
                  Booking confirmed!
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#43474c' }}>
                  Your 30-min call is set for{' '}
                  <strong>
                    {bookingConfirmed.date.toLocaleDateString('en-AU', {
                      weekday: 'long', day: 'numeric', month: 'long',
                    })}
                  </strong>{' '}
                  at <strong>{bookingConfirmed.time} AEST</strong>.
                </p>
                <p className="text-xs" style={{ color: '#74777c' }}>
                  A confirmation has been sent to your email.
                </p>
                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="mt-1 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: '#20303f' }}>
                  Book another time
                </button>
              </div>
            ) : (
              <BookingCalendar
                form={form}
                onSuccess={(info) => setBookingConfirmed(info)}
                onFormSubmitted={() => setSubmitted(true)}
              />
            )}

            {/* Compliance note */}
            <div className="rounded-xl p-4 flex gap-3" style={{ background: '#eee8db' }}>
              <span className="material-symbols-outlined text-base flex-shrink-0 mt-0.5"
                style={{ color: '#74777c' }}>info</span>
              <p className="text-xs leading-relaxed" style={{ color: '#43474c' }}>
                All information shared is handled in accordance with the NDIS Privacy Policy and
                Australian Privacy Act. We do not share your data with third parties.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
