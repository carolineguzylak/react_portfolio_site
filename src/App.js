import React from "react"
import './styles/globals.css';
import {Route, Routes} from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"
import ProjectOrchestrate from "./routes/ProjectOrchestrate"
import ProjectZotdiet from "./routes/ProjectZotdiet"
import ProjectInstaRedesign from "./routes/ProjectInstaRedesign"

function App() {
  return (
    <>
      <Routes>
        <Route path="/react_portfolio_site" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-orchestrate" element={<ProjectOrchestrate />} />
        <Route path="/project-zotdiet" element={<ProjectZotdiet />} />
        <Route path="/project-insta" element={<ProjectInstaRedesign />} />
      </Routes>
    </>
  );
}

export default App;
