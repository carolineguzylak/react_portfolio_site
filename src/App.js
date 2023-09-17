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
import ProjectTravelotl from "./routes/ProjectTravelotl"
import ProjectCellDogs from "./routes/ProjectCellDogs"
import ProjectTeradata from "./routes/ProjectTeradata"
import ProjectStudentCenter from "./routes/ProjectStudentCenter"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-orchestrate" element={<ProjectOrchestrate />} />
        <Route path="/project-zotdiet" element={<ProjectZotdiet />} />
        <Route path="/project-insta" element={<ProjectInstaRedesign />} />
        <Route path="/project-travelotl" element={<ProjectTravelotl />} />
        <Route path="/project-celldogs" element={<ProjectCellDogs />} />
        <Route path="/project-teradata" element={<ProjectTeradata />} />
        <Route path="/project-studentcenter" element={<ProjectStudentCenter />} />
      </Routes>
    </>
  );
}

export default App;
