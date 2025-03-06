import { useState } from 'react';
import Hero from './HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './ServicesSection';
import Work from './project';
import Work1 from './project1';
import Footer from './footer';
import About from './about';
import Work2 from './project2';
import Work3 from './project3';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      {/* <NavBar setActiveSection={setActiveSection} /> */}
      
      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <About />
          <Services />
          <Work />
          <Work1 />
          <Work2 />
          <Work3 />
          <Footer />
        </>
      )}
      
      {activeSection === 'services' && (
        <>
          <Services />
          <Footer />
        </>
      )}

      {activeSection === 'about' && (
        <>
          <About />
          <Footer />
        </>
      )}

      {activeSection === 'contact' && <Footer />}
    </>
  );
}

export default App;
