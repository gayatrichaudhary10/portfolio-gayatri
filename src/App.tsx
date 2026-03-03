import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      
      <Hero />
      <About />
      <Projects />      
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;