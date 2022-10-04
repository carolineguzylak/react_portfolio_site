import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import orchestrate from "../assets/orchestrate.png"
import '../styles/ProjectPage.css'


const ProjectOrchestrate = () => {
    return ( <div>
        <Navbar />

        <div class='projectWrapper'>
            <img className='headerPic' alt="iPhone mockups" src={orchestrate}></img>
            <h1 class='projectHeader'>Orchestrate</h1>
            <h4 className='projectDescription'>Orchestrate is a concert socialization app that provides concert-goers with a means to discover shows in their area, find friends to go with, plan event itineraries with a group, and arrange ride shares.</h4>
            <div className='projectDetails'>
                <p>My role: UI/UX designer and researcher (team of 5)</p>
                <p>Time: 10 weeks</p>
            </div>
            <h2 class='projectHeader'>Demo Video</h2>
            <div className='demoVideo'>
                <iframe width='50px' height='50px' src="https://www.youtube.com/embed/hCR7i3i1sTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <h2 class='projectHeader'>Presentation</h2>
            <div className='presentation'>
                <iframe title='Orchestrate Presentation' loading="lazy" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFBGcPwxOI&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default ProjectOrchestrate;