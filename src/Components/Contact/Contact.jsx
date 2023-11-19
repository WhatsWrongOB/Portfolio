import React, { useRef } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qh8gjd8', 'template_n40018y', form.current, 'yAp2oDC4_jh3T6U2V')
    .then((result) => {
      console.log(result.text);
      alert('Message send succesfully') 
    },(err) =>{
      console.log(err.text)
    }
    );
  };

  return (
    <section className="contact">
      <div className="contact_left">
        <h1 className="contact_heading">Contact <span>ME</span></h1>
        <div className="contact_info">
          <h4 className="conatct_heading_two">Let's Work Together</h4>
          <p className="contact_para">Unlocking potential through collaboration. Experience synergy, achieve excellence. Let's build, create, and thrive together. Explore my collaborative journey.</p>
          <div className="contact_icons">
            <div className="emaill">
              <i className="icon fa-regular fa-envelope"></i>
              <p className="email_para">obaidbro9@gmail.com</p>
            </div>
            <div className="phone">
              <i className="icon fa-solid fa-phone"></i>
              <p className="phone_para">03204872665</p>
            </div>
          </div>
          <div className="contact_icons">
            <Link to="https://www.facebook.com/baid.ali.92?mibextid=ZbWKwL">
              <i className="icon fa-brands fa-facebook" ></i>
            </Link>
            <Link to="https://www.instagram.com/its_0baid_/?igshid=MTRmdjc4bzl6ODJxdg%3D%3D">
              <i className="icon fa-brands fa-instagram"></i>
            </Link>
            <Link to="https://wa.me/+923204872665">
              <i className="icon fa-brands fa-whatsapp"></i>
            </Link>
            <Link to="https://github.com/WhatsWrongOB/">
              <i className="icon fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact_right">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact_form">
            <input className='name' type="text" placeholder="Full name" name='from_name' required />
            <input className='email' type="email" placeholder="Email" name='from_email' required />
            <textarea className='text' cols="30" rows="6" placeholder="Write here..." name='message'></textarea>
            <input className="contact_button" type="submit" value='Send' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact