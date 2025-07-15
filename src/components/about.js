import React from 'react'
import "./about.css"
import HTML from "../assets/HTML5_Badge.svg"
import CSS from "../assets/css-3.svg"
import JS from "../assets/javascript.svg"
import R from "../assets/react.svg"

function About() {
  return (
  <section id = "about">
            <span className="aboutTitle">What I Know</span>
            <span className="aboutDesc"> I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in  HTML,CSS and Javascript.</span>
        <div className="aboutBars">
          <div className="aboutBar">
               <img src={HTML} alt="HTML" className="aboutBarImg"/>
               <div className="aboutBarText">
                   <h2>HTML</h2>
                  <p>Hypertext Markup language</p>
               </div>
          </div>
             <div className="aboutBar">
               <img src={CSS} alt="CSS" className="aboutBarImg"/>
               <div className="aboutBarText">
                 <h2>CSS</h2>
                  <p>Cascading Style Sheets</p>
               </div>
          </div>
            <div className="aboutBar">
               <img src={JS} alt="JS"className="aboutBarImg"/> 
               <div className="aboutBarText">
                   <h2>JS</h2>
                  <p>Javascript</p>
               </div>
          </div>
           <div className="aboutBar">
               <img src={R} alt="R" className="aboutBarImg"/>
               <div className="aboutBarText">
                   <h2>React</h2>
                  <p>React.js</p>
               </div>
          </div>

          </div>
    </section>
  )
}
export default About
