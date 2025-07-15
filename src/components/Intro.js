import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll'
import btnImg  from '../assets/hireme.png'
import react from '../assets/react.svg'

function intro() {
  return (
   <>  
 <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
             <h1>I'm<span className='introName'>  Ashish</span>
              </h1>
             <h1>Web Developer</h1>
        </span>
        <p className='introPara'> 
             I am a skilled web developer with experience in creating
             <br/>
             visually appealing and user friendly websites.
        </p>
      <Link>
        <button className='btn2'> 
          <img src={btnImg} alt='Img' className='btnImg2'/>
           Hire me
        </button>
      </Link>
    </div>

    <img src={react} className='logo2' alt='React Logo'/>


 </section>
   </>
  )
}

export default intro
