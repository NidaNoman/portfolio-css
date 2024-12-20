import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero";
import Navbar from "./navbar";
import Skills from "./skills/page";
import Footer from "./footer";

export default function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer />
    
    </div>
  )
}