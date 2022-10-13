import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import orchestrate from "../assets/orchestrate.png"
import surveyGraphs from "../assets/orchestrateSurveyGraphs.png"
import methods from "../assets/orchestrateMethods.png"
import lofi from "../assets/orchestrateLofi.png"
import hifi from "../assets/orchestrateHifi.png"

import styles from '../styles/ProjectPage.module.css';


const ProjectOrchestrate = () => {
    return ( <div>
        <Navbar />

        <div class={styles.projectWrapper}>

            <img className={styles.headerPic} alt="iPhone mockups" src={orchestrate}></img>
            <h1 className={styles.projectHeader}>Orchestrate</h1>
            <div className={styles.projectDescription}>
                <p>Orchestrate is a concert socialization app that provides concert-goers with a means to discover shows in their area, find friends to go with, plan event itineraries with a group, and arrange ride shares.</p>
                <p>My role: UI/UX designer and researcher (team of 5)</p>
                <p>Time: 10 weeks</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Motivation</h2>
                <p>Concerts can be stressful for many
                    reasons. Our goal is to provide concert
                    goers with a tool that will help them
                    navigate and enhance their concert
                    experience.</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Our Research Methods</h2>
                <ul className={styles.projectUl}>
                    <li>Competetive Analysis</li>
                    <li>Surveys</li>
                    <li>Usability Testing</li>
                </ul>

                <div className={styles.imgWrapper}>
                    <img src={methods} className={styles.imgDesc} alt="orchestrate survey graphs"></img>
                </div>

            </div>

            <div className={styles.projectDescription}>
                <h2>When asked about the details of their concert-going experiences, participants reported
                struggling the most with:</h2>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        {/* MAKE THESE INTO DROPDOWNS WITH MORE DETAILS */}
                        <li>Purchasing tickets to concerts (due to price, availability, etc)</li>
                        <li>Finding transportation to concerts</li>
                        <li>Finding people to attend concerts with</li>
                    </ul>
                </div>

                <div className={styles.imgWrapper}>
                    <img src={surveyGraphs} className={styles.imgDesc} alt="orchestrate survey graphs"></img>
                </div>

            </div>

            <div className={styles.projectDescription}>
                <h2>The Prototype</h2>
                <p>Based on the needs of our users determined by our interviews, we decided that the main functions of our prototype would be:</p>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>Accessing cheaper tickets: Ticket offers page</li>
                        <li>Accessing transportation: Ride-share feature</li>
                        <li>Finding friends: Personal profiles, messaging, and forums</li>
                    </ul>
                </div>

                <div className={styles.subsection}>
                    <h3>Low fidelity prototype</h3>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototype} src={lofi} alt="orchestrate lofi prototype"></img>
                    </div>

                </div>


            </div>

            <div className={styles.projectDescription}>
                <h2>Usability Testing Process and Results</h2>
                <p>After conducting user testing, we received
                    mostly positive feedback about our
                    prototype, with users reporting only a few
                    minor visual issues such as the placement
                    of certain icons.</p>
                
            </div>

            <div className={styles.projectDescription}>
                <h2>Final Prototype</h2>

                <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototype} src={hifi} alt="orchestrate lofi prototype"></img>
                </div>

            </div>





            <h2 className={styles.projectHeader}>Demo Video</h2>
            <div className={styles.demoVideo}>
                <iframe width='50px' height='50px' src="https://www.youtube.com/embed/hCR7i3i1sTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <h2 className={styles.projectHeader}>Presentation</h2>
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