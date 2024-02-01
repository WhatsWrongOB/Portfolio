import React, { useState } from 'react'
import phone from '/public/phone.svg'
import msg from '/public/msg.svg'
import { useStore } from '../Context'


const Contact = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { contact } = useStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const contactSuccess = await contact(email, message)
      if (contactSuccess) {
        alert("Message Sent Successfully")
        setEmail('')
        setMessage('')
      } else {
        alert("Message not Sent")
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <section id="contact">
      <div className="contact_container">
        <h1 className="contact_heading">Contact Me</h1>
        <p className="contact_para"><span>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</span></p>
        <div className="contact_btns">
          <button className='emails'>
            <img src={msg} alt="email" />
            <p>obaidbro9@gmail.com</p>
          </button>
          <button className='phone'>
            <img src={phone} alt="phone" />
            <p>03204872665</p>
          </button>
        </div>
        <h3 className="contact_heading_two">Get in touch using the form below</h3>
        <form className='contact_form' onSubmit={handleSubmit}>
          <input
            className='cemail'
            type="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <textarea
            className='message'
            name="message"
            cols="30"
            rows="10"
            placeholder='Type Your Message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          >
          </textarea>
          <button type='send' className='submit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact