// import React from 'react'
// import "./project.css"
// import project from "../assets/project.jpg"

// function Project() {
//   return (
//    <> 
//    <section id = "project">
//     <h2 className="projectTitle">My Projects</h2>
//     <span className="projectDesc">Here are my Projects</span>

//     <div className="project-item">
//         <div className="item-details">
//             <p className="P1">Project-1</p>
//             <p className="P2">TechStack:- HTML and CSS</p>
//         </div>
//       <img src={project} alt="project" className="projectImg"/>
//     </div>


//     <div className="project-item">
//         <div className="item-details">
//             <p className="P1">Project-2</p>
//             <p className="P2">TechStack:- Javascript and React</p>
//         </div>
//       <img src={project} alt="project" className="projectImg"/>
//     </div>


//     <div className="project-item">
//         <div className="item-details">
//             <p className="P1">Project-3</p>
//             <p className="P2">TechStack:- c++</p>
//         </div>
//       <img src={project} alt="project" className="projectImg"/>
//     </div>


//    </section>

//    </>
//   )
// }

// export default Project


import React from 'react'
import "./project.css"
import project from "../assets/project.jpg"

function Project() {
  return (
    <>
      <section id="project">
        <h2 className="projectTitle">My Projects</h2>
        <span className="projectDesc">Here are my Projects</span>

        <div className="projectContainer">

          <div className="project-item">
            <img src={project} alt="project" className="projectImg" />
            <div className="item-details">
              <p className="P1">Project-1</p>
              <p className="P2">TechStack: HTML and CSS</p>
            </div>
          </div>

          <div className="project-item">
            <img src={project} alt="project" className="projectImg" />
            <div className="item-details">
              <p className="P1">Project-2</p>
              <p className="P2">TechStack: Javascript and React</p>
            </div>
          </div>

          <div className="project-item">
            <img src={project} alt="project" className="projectImg" />
            <div className="item-details">
              <p className="P1">Project-3</p>
              <p className="P2">TechStack: C++</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Project