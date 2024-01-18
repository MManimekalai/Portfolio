import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import NavBarComp from './Components/NavBarComp';
import Skills from './Components/Skills';
import ImagePage from './Components/ImagePage';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
function App() {
  return (
    <div className="App" style={{overflow:"hidden"}}>
        <NavBarComp />
        <div className='first-page'>
        <ImagePage/>
      </div>
      <div id="about"><About/></div>
      <div id="skills"><Skills/></div>
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact/></div>
    </div>
  );
}

export default App;