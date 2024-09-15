import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactImage from './assets/contactUs.svg';
import image from './assets/pic-5.jpg';
import './style/contact.css';
import { FooterSection } from './FooterSection';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l89uv0q', 'template_xwegywz', form.current, 'Y_eoAC5HB4q6HmQAk')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
    <div className='contactus-page'>
    <div className='container-projects'>
                <img src={image} alt='image' className="fluidproject" />
                <div className='top-half'>
                    <div className='top-half-content'>
                        <h1 className='heading-projects'>Contact Us</h1>
                    </div>
                </div>
            </div>
    <div className='contact-section'>
    <div className="contact-header">
      </div>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="image" />
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="contact-info">
        <h3>Additional Information</h3>
        <p>
          <strong>Phone:</strong> 123-456-7890
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
        <p>
          <strong>Location:</strong> 123 Main Street, Anytown USA
        </p>
      </div>
    </div>
      <FooterSection/>
    </div>
       
    </>
  );
}

export default Contact;