const nodemailer = require('nodemailer')
const logger = require('./logger.service')

let transporter

const getTransporter = () => {
  if (transporter) return transporter

  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  return transporter
}

const sendMail = async ({ to, subject, html }) => {
  try {
    const info = await getTransporter().sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    })
    logger.info(`Email sent to ${to}: ${info.messageId}`)
    return info
  } catch (err) {
    logger.error(`Email failed to ${to}: ${err.message}`)
    throw err
  }
}

const sendContactConfirmation = async ({ name, email }) => {
  await sendMail({
    to: email,
    subject: 'We received your enquiry — Books Align',
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fff9ec;border-radius:12px;">
        <h2 style="color:#0a1b29;font-size:22px;margin-bottom:8px;">Thanks, ${name}!</h2>
        <p style="color:#43474c;line-height:1.7;">We've received your message and will be in touch within <strong>one business day</strong>.</p>
        <p style="color:#43474c;line-height:1.7;">In the meantime, feel free to explore our <a href="${process.env.CLIENT_URL}/services" style="color:#20303f;">services</a>.</p>
        <hr style="border:none;border-top:1px solid #c4c6cc;margin:24px 0;"/>
        <p style="color:#74777c;font-size:13px;">Books Align · NDIS Specialist Accounting · Kathmandu, Nepal</p>
      </div>
    `,
  })
}

const sendContactNotification = async ({ name, email, businessName, service, message }) => {
  await sendMail({
    to: process.env.ADMIN_EMAIL,
    subject: `New enquiry from ${name} — ${service}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;">
        <h2 style="color:#0a1b29;">New Contact Enquiry</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:700;color:#0a1b29;">Name</td><td style="padding:8px;color:#43474c;">${name}</td></tr>
          <tr style="background:#f9f3e6;"><td style="padding:8px;font-weight:700;color:#0a1b29;">Business</td><td style="padding:8px;color:#43474c;">${businessName || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:700;color:#0a1b29;">Email</td><td style="padding:8px;color:#43474c;">${email}</td></tr>
          <tr style="background:#f9f3e6;"><td style="padding:8px;font-weight:700;color:#0a1b29;">Service</td><td style="padding:8px;color:#43474c;">${service}</td></tr>
          <tr><td style="padding:8px;font-weight:700;color:#0a1b29;">Message</td><td style="padding:8px;color:#43474c;">${message}</td></tr>
        </table>
      </div>
    `,
  })
}

const sendBookingConfirmation = async ({ name, email, startTime }) => {
  const formatted = new Date(startTime).toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  await sendMail({
    to: email,
    subject: 'Your booking is confirmed — Books Align',
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fff9ec;border-radius:12px;">
        <h2 style="color:#0a1b29;margin-bottom:8px;">Booking confirmed, ${name}!</h2>
        <p style="color:#43474c;line-height:1.7;">Your 30-minute discovery call is scheduled for:</p>
        <div style="background:#20303f;color:#fff;padding:16px 20px;border-radius:8px;margin:16px 0;">
          <p style="font-size:16px;font-weight:700;margin:0;">${formatted} (AEST)</p>
        </div>
        <p style="color:#74777c;font-size:13px;margin-top:24px;">To cancel, reply to this email or visit your bookings page.</p>
        <hr style="border:none;border-top:1px solid #c4c6cc;margin:24px 0;"/>
        <p style="color:#74777c;font-size:13px;">Books Align · NDIS Specialist Accounting</p>
      </div>
    `,
  })
}

const sendBookingNotification = async ({ name, email, startTime }) => {
  const formatted = new Date(startTime).toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  await sendMail({
    to: process.env.ADMIN_EMAIL,
    subject: `New booking: ${name} — ${formatted}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;">
        <h2 style="color:#0a1b29;">New Booking</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:700;color:#0a1b29;">Client</td><td style="padding:8px;color:#43474c;">${name}</td></tr>
          <tr style="background:#f9f3e6;"><td style="padding:8px;font-weight:700;color:#0a1b29;">Email</td><td style="padding:8px;color:#43474c;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:700;color:#0a1b29;">Time</td><td style="padding:8px;color:#43474c;">${formatted} (AEST)</td></tr>
        </table>
      </div>
    `,
  })
}

const sendCancellationConfirmation = async ({ name, email, startTime }) => {
  const formatted = new Date(startTime).toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  await sendMail({
    to: email,
    subject: 'Your booking has been cancelled — Books Align',
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fff9ec;border-radius:12px;">
        <h2 style="color:#0a1b29;margin-bottom:8px;">Booking cancelled</h2>
        <p style="color:#43474c;line-height:1.7;">Hi ${name}, your booking for <strong>${formatted} (AEST)</strong> has been cancelled.</p>
        <a href="${process.env.CLIENT_URL}/contact" style="display:inline-block;background:#20303f;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;margin:16px 0;">
          Book a new time
        </a>
        <hr style="border:none;border-top:1px solid #c4c6cc;margin:24px 0;"/>
        <p style="color:#74777c;font-size:13px;">Books Align · NDIS Specialist Accounting</p>
      </div>
    `,
  })
}

module.exports = {
  sendContactConfirmation,
  sendContactNotification,
  sendBookingConfirmation,
  sendBookingNotification,
  sendCancellationConfirmation,
}
