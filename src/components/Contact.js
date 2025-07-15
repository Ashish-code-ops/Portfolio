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

    emailjs
      .sendForm('service_jw44ahh', 'template_bgqgcb9', form.current, {
        publicKey: '3w_JzAPOFPLf8YkDo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.from_name.value = "";
              form.current.your_email.value = "";
              form.current.message.value = "";
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
              <input type="text" className="name" placeholder="Your Name" name="from_name" required/>
              <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
              <textarea className="msg" name="message"  rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" value="send" className='submitBtn' onClick={()=>{alert("Form Submitted!!")}}>Submit</button>
            </form>
          </div>
       </section>
    </>
  )
}

export default Contact
