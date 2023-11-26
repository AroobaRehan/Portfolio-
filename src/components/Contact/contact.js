import React,{useRef} from 'react';
import'./contact.css';
import Linkedin from '../../assets/linkedin1.png';
import Github from '../../assets/github4.png';
import mail from '../../assets/mail1.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_as193ta', 'template_gb6j4do', form.current, '7XHilHiTbW_7kl63hnZWY')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent')
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id='contactPage'>
            <div id="contact">
<h1 className='contactPageTitle'>Contact Me</h1>
<span className='contactDesc'>Fill out the form below to contact for any work opportunities</span>
<form className='contactForm' ref={form} onSubmit={sendEmail}>
<input type="text" className='name' placeholder='Your Name' name="your_name"/>
<input type="email" className='email' placeholder='Your Email' name='your_email'/>
<textarea className="msg" name="message" rows="5" placeholder='Message:'></textarea>
<button type='submit' value='Send Message' className='submitBtn'>Submit</button>
</form>
    <div className='links'>
        <a href='https://github.com/AroobaRehan'><img src={Github} alt='' className='link'/></a>
        <a href='www.linkedin.com/in/arooba-rehan-8a61b4223'><img src={Linkedin} alt='' className='link'/></a>
        <a href='https://accounts.google.com/servicelogin?hl=en-gb'><img src={mail} alt='' className='link'/></a>
    </div>

            </div>
        </section>
    )
}

export default Contact