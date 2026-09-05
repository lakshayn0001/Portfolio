import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    message: '',
    email: '',
    name: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

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
      alert('Message sent successfully');
      setForm({ message: '', email: '', name: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section className='contact' id="contact">
      <div className="contact_header">
        <span className="section_badge">CONNECT</span>
        <h1>Get In Touch</h1>
        <p>Have a question, collaboration idea, or project to discuss? Drop a message below</p>
      </div>

      <div className="contentdata">
        <div className='firstpart'>
          <h2 className="contact_subheading">Direct Channels</h2>

          <a href="mailto:Lakshayn0001@gmail.com" className="contact_card">
            <div className="contact_icon_box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div>
              <h3>Email</h3>
              <p className="contact_val">Lakshayn0001@gmail.com</p>
              <span className="contact_action">Send an email →</span>
            </div>
          </a>

          <a
            href="https://wa.me/917988065094"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_card"
          >
            <div className="contact_icon_box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h3>WhatsApp</h3>
              <p className="contact_val">+91 7988065094</p>
              <span className="contact_action">Start chat →</span>
            </div>
          </a>
        </div>

        <div className='secondpart'>
          <form className='form_block' onSubmit={sendEmail}>
            <div className="form_group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact_submit_btn" disabled={loading}>
              {loading ? 'Sending Message...' : 'Send Message ↗'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
