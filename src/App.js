import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/about"
import Project from "./components/project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </>
    
  );
}

export default App;
