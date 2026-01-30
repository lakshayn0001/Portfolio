import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>

      <div className="contact_header">
        <h1>Contact Me</h1>
        <p>Get in touch</p>
      </div>

      <div className="contentdata" id="contact">

        {/* LEFT SIDE */}
        <div className='firstpart'>
          <h2>Let's Connect</h2>
          <a href='mailto:Lakshay1731@gmail.com' className='contact-card'>
            <h3>Email</h3>
            <p>Lakshayn0001@gmail.com</p>
            <p>Write me →</p>
          </a>
          <a href='https://wa.me/917988065094' className='contact-card'>
            <h3>WhatsApp</h3>
            <p>7988065094</p>
            <p>Write me →</p>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className='secondpart'>
          <div className='form-block'>
            <p>Dear Lakshay,</p>
            <input placeholder='Write your message here' />

            <p>My email address is,</p>
            <input placeholder='Your email' />

            <p>Regards,</p>
            <input placeholder='Your name' />

            <button>Send Message</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
