import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Hero from "./HeroSection";
import About from "./about";
import Services from "./ServicesSection";
import Work from "./project";
import Work1 from "./project1";
import Work2 from "./project2";
import Work3 from "./project3";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Work1 />
      <Work2 />
      <Work3 />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<></>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
