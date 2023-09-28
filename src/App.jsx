import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Random from "./components/Random"
import Scroller from "./components/Scroller"
import { Skill } from "./components/Skill"


function App() {

  return (
    <>
    <Loading/>
    <Scroller/>
     <Navbar/>
     <Home/>
     <About/>
     <Skill/>
     <Project/>
     <Random/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
