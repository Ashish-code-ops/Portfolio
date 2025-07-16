import {useRef} from 'react'
import "./Contact.css"
import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"
import Insta from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import emailjs from "@emailjs/browser"

function Contact() {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     const isValid = Form.current.checkValidity();

     if(!isValid) {
        alert("please fill in all required fields.");
        return;
     } 
    emailjs
      .sendForm('service_jw44ahh', 'template_bgqgcb9', form.current, {
        publicKey: '3w_JzAPOFPLf8YkDo',
      })
      .then(
        () => {
           alert("Form Submitted!!");
           console.log('SUCCESS!');
           form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
     
  return (
    <>
       <section id="contact">
          <div id="social">
            <h1 className="socialTitle">Socials</h1>
            <p>Here you can connect with me on my social media</p>

            <div className="socialImgs">
              <a href='#'><img src={LinkedIn} alt='LinkedIn' className='socialImg'/></a>
              <a href='#'><img src={Github} alt='Github' className='socialImg'/></a>
              <a href='#'><img src={Insta} alt='Instagram' className='socialImg'/></a>
              <a href='#'><img src={Facebook} alt='Facebook' className='socialImg'/></a>
            </div>
          </div>

          <div id="contactPage">
            <h1 id="contactTitle">Contact</h1>
            <span className="contactDesc">Feel free to contact me</span>

            <form className="contactForm" ref={form} onSubmit={sendEmail}> 
              <input type="text" className="name" required placeholder="Your Name" name="from_name" />
              <input type="email" className="email" required placeholder="Your Email" name="your_email"  />
              <textarea className="msg" name="message" required rows="5" placeholder="Your Message"  ></textarea>
              <button type="submit" value="submit" className='submitBtn'>Submit</button>
            </form>
          </div>
       </section>
    </>
  )
}

export default Contact
