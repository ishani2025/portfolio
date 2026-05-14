import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";

import "./index.css";

export default function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Expertise />

      <Projects />

      <About />

      <Contact />

    </div>
  );
}