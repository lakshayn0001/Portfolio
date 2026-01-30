import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {

  const [form, setForm] = useState({
    message: '',
    email: '',
    name: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_4v0vih9',
      'template_hyd3lv7',
      {
        message: form.message,
        email: form.email,
        name: form.name
      },
      'u6NYbdXpxDfPbO_XZ'
    )
    .then(() => {
      alert('Message sent successfully ✅')
      setForm({ message: '', email: '', name: '' })
    })
    .catch((error) => {
      console.error('EmailJS Error:', error)
      alert('Failed to send message ❌')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className='contact' id="contact">

      <div className="contact_header">
        <h1>Contact Me</h1>
        <p>Get in touch</p>
      </div>

      <div className="contentdata">

        {/* LEFT */}
        <div className='firstpart'>
          <h2>Let's Connect</h2>

          <a href="mailto:Lakshayn0001@gmail.com" className="contact-card">
            <h3>Email</h3>
            <p>Lakshayn0001@gmail.com</p>
            <p>Write me →</p>
          </a>

          <a
            href="https://wa.me/917988065094"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>WhatsApp</h3>
            <p>7988065094</p>
            <p>Write me →</p>
          </a>
        </div>

        {/* RIGHT */}
        <div className='secondpart'>
          <form className='form-block' onSubmit={sendEmail}>

            <p>Dear Lakshay,</p>
            <textarea
              name="message"
              placeholder="Write your message here"
              value={form.message}
              onChange={handleChange}
              required
            />

            <p>My email address is,</p>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <p>Regards,</p>
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
