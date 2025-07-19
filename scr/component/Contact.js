import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';  // 👈 icons imported

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e04l94q',
      'template_k8bssdt',
      form.current,
      'igquxE4RWoc2b7b6W'
    ).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className="section-subtitle">
        Have a project in mind or want to collaborate? Feel free to reach out to me.
      </p>

      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="info-block">
            <h4>📧 Email</h4>
            <p>workwithsundaram@gmail.com</p>
          </div>
          <div className="info-block">
            <h4>📞 Phone</h4>
            <p>+91 8530348748</p>
          </div>
          <div className="info-block social-icons">
  <a href="https://www.instagram.com/iamthelocalfilmmaker/" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.youtube.com/@sundaram_tarone" target="_blank" rel="noreferrer">
    <FaYoutube />
  </a>
  <a href="https://www.linkedin.com/in/sundaram-tarone-521389271/" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
</div>

          <div className="info-block">
            <h4>📅 Availability</h4>
            <p>
              I’m currently available for freelance projects and collaborations.
              Let’s create something amazing together!
            </p>
          </div>
        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Your Name *</label>
            <input type="text" name="user_name" placeholder="Enter your full name" required />
            <label>Email Address *</label>
            <input type="email" name="user_email" placeholder="youremail@example.com" required />
            <label>Subject *</label>
            <input type="text" name="subject" placeholder="What's this about?" required />
            <label>Your Message *</label>
            <textarea name="message" placeholder="Tell me about your project or idea..." rows="5" required></textarea>
            <button type="submit">🚀 Send Message</button>
            {isSent && <p className="success-msg">✅ Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
   

  );
};

export default Contact;
