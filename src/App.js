import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home';
import AboutMe from './Components/About Me/AboutMe'
import Skills from './Components/Skills/Skills';
import Testimonial from './Components/Testimonial/Testimonial';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contact/ContactUs'
function App() {
  return (
    <div className="App">
 
     
      <div id="Home"><Home/></div>
      <div id="About" className="about-id">
      <AboutMe/>
      </div>
      <div id="Skills" className="about-id"><Skills/></div>
      <div id="Projects" className="about-id"><Project/></div>
      <div id="Testimonial" className="about-id"><Testimonial/></div>
      <div id="Contact"> <ContactUs/></div>
      <Footer/>
    </div>
  );
}

export default App;
