import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import travelotl from "../assets/travelotl.png"
import surveyGraphs from "../assets/orchestrateSurveyGraphs.png"
import methods from "../assets/orchestrateMethods.png"
import lofi from "../assets/orchestrateLofi.png"
import hifi from "../assets/orchestrateHifi.png"

import styles from '../styles/ProjectPage.module.css';


const ProjectTravelotl = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});
    
    return ( <div>
        <Navbar />

        <div class={styles.projectWrapper}>

            <img className={styles.headerPic} alt="iPhone mockups" src={travelotl}></img>
            <h1 className={styles.projectHeader}>Travelotl</h1>
            <div>
                <a href="https://www.figma.com/proto/gKSDbPqRvbDF5cUDW11W4G/Travelotl-PORTFOLIO-VER?page-id=225%3A611&node-id=225%3A898&viewport=-2784%2C1527%2C0.39&scaling=scale-down&starting-point-node-id=225%3A898" className={styles.button}>Figma Prototype</a>
                <a href="#presentation" className={styles.button}>Presentation</a>
                <a href="https://www.canva.com/design/DAFSp_Lb_rM/mJbtbWCA82wkbUGKxGreqQ/watch?utm_content=DAFSp_Lb_rM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className={styles.button}>Demo Video</a>
            </div>
            <div className={styles.projectDescription}>
                <p>Travelotl is an app designed for both museum-goers and museum curators. The app allows visitors to scan QR
                    codes attached to exhibits in order to gain in-depth knowledge of the exhibit or a translation of the
                    exhibit plaque. Curators can register their museum with the app and generate QR codes for their exhibits.
                    Museum-goers can add their friends and share their museum experiences.
                </p>
                <p><b>My role:</b> UI/UX designer and researcher (team of 56)</p>
                <p><b>Time:</b> 8 weeks</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Problem space</h2>
                <p>Bu</p>
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


            <div id="presentation" style={{width: '90%', padding:"1rem"}}>
                <h2 className={styles.projectHeader}>Presentation</h2>
                <div className='presentation'>
                    <iframe title='Travelotl Presentation' src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFSRiK1pSM&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                </div>
            </div>

        </div>
        <Footer />
    </div>
    );
};

export default ProjectTravelotl;