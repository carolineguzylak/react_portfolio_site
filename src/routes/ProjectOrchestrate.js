import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import orchestrate from "../assets/orchestrate.png"
import surveyGraphs from "../assets/orchestrateSurveyGraphs.png"
import methods from "../assets/orchestrateMethods.png"
import lofi from "../assets/orchestrateLofi.png"
import hifi from "../assets/orchestrateHifi.png"
import feedback1 from "../assets/orchestrateFeedback1.png"
import feedback2 from "../assets/orchestrateFeedback2.png"

import styles from '../styles/ProjectPage.module.css';


const ProjectOrchestrate = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});
    
    return ( <div>
        <Navbar />

        <div class={styles.projectWrapper}>

            <img className={styles.headerPic} alt="iPhone mockups" src={orchestrate}></img>
            <h1 className={styles.projectHeader}>Orchestrate</h1>
            <div>
                <a href="#demo" className={styles.button}>Prototype Demo</a>
                <a href="#presentation" className={styles.button}>Presentation</a>
            </div>
            <div className={styles.projectDescription}>
                <p>Orchestrate is a concert socialization app that provides concert-goers with a means to discover shows in their area, find friends to go with, plan event itineraries with a group, and arrange ride shares.</p>
                <p><b>My role:</b> UI/UX designer and researcher (team of 5)</p>
                <p><b>Time:</b> 8 weeks</p>
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
                {/* <ul className={styles.projectUl}>
                    <li>Competetive Analysis</li>
                    <li>Surveys</li>
                    <li>Usability Testing</li>
                </ul> */}

                <div className={styles.imgWrapper}>
                    <img src={methods} className={styles.imgPrototype} alt="orchestrate survey graphs"></img>
                </div>

            </div>

            <div className={styles.projectDescription}>
                <h3>When asked about the details of their concert experiences, participants reported
                struggling the most with:</h3>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        {/* MAKE THESE INTO DROPDOWNS WITH MORE DETAILS */}
                        <li>Purchasing tickets to concerts (due to price, availability, etc)</li>
                        <li>Finding transportation to concerts</li>
                        <li>Finding people to attend concerts with</li>
                    </ul>
                </div>

                <div className={styles.imgWrapper}>
                    <img src={surveyGraphs} className={styles.imgPrototype} alt="orchestrate survey graphs"></img>
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
                <p>After conducting user testing, we gained this critical feedback on some of our app features:</p>

                <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize} src={feedback1} alt="orchestrate feedback 1"></img>
                </div>

                <p>Some users were not able to identify the filter icon, so we changed the icon to text that says "filters"
                    in order to make the option as clear as possible.
                </p>

                <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize} src={feedback2} alt="orchestrate feedback 2"></img>
                </div>

                <p>Some users suggested that a profile display upcoming events instead of past events, as this information
                    would be more beneficial to users who are looking for friends to go to concerts with.
                    Users also did not think that the status indicators were understandable or necessary, so we removed them 
                    entirely. Finally, we added a feature to direct message a user from their profile.
                </p>
                
            </div>

            <div className={styles.projectDescription}>
                <h2>Final Prototype</h2>

                <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototype} src={hifi} alt="orchestrate lofi prototype"></img>
                </div>

            </div>




            <div id="demo" style={{width: '90%', padding:"1rem"}}>
                <h2 className={styles.projectHeader}>Demo Video</h2>
                <div className={styles.demoVideo}>
                    <iframe width='50px' height='50px' src="https://www.youtube.com/embed/hCR7i3i1sTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </div>

            <div id="presentation" style={{width: '90%', padding:"1rem"}}>
                <h2 className={styles.projectHeader}>Presentation</h2>
                <div className='presentation'>
                    <iframe title='Orchestrate Presentation' loading="lazy" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFBGcPwxOI&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                </div>
            </div>

        </div>
        <Footer />
    </div>
    );
};

export default ProjectOrchestrate;