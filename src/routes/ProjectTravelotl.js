import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import travelotl from "../assets/travelotl.png"

import surveys from "../assets/travelotlSurvey.png"
import solution from "../assets/travelotlSolution.png"
import comp from "../assets/travelotlComp.png"

import sketch1 from "../assets/travelotlSketch1.png"
import sketch2 from "../assets/travelotlSketch2.png"
import sketch3 from "../assets/travelotlSketch3.png"

import midfi from "../assets/travelotlMidfi.png"
import hifi1 from "../assets/travelotlHifi1.png"
import hifi2 from "../assets/travelotlHifi2.png"
import hifi3 from "../assets/travelotlHifi3.png"
import hifi4 from "../assets/travelotlHifi4.png"
import hifi5 from "../assets/travelotlHifi5.png"

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
                    Museum-goers can add their friends and share their museum experiences. <b>This project was awarded 3rd place at Design@UCI's Fall 2022 Design Competetion!</b>
                </p>
                <p><b>My role:</b> UI/UX designer (team of 6)</p>
                <p><b>Time:</b> 8 weeks</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Problem space</h2>
                <p>Museums and exhibitions want all of their visitors to be able to access their exhibits, and learn
                    everything there is to learn about them. Travelers often miss out on learning opportunities because
                    deeper information about an exhibit is either not available or not in their language.
                </p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Initial Survey Research</h2>

                <div className={styles.imgWrapper}>
                    <img src={surveys} className={styles.imgPrototype} alt="travelotl survey graphs"></img>
                </div>

                <p>
                    Based on our users' desire to find hidden gems that the general tourist population does not
                    know about, as well as the strong desire to learn while abroad, we decided to direct our solution
                    at helping users to learn the most they can, including hidden secrets, about the attractions they visit.
                </p>

                <div className={styles.imgWrapper}>
                    <img src={comp} className={styles.imgPrototype} alt="travelotl comp"></img>
                </div>

                <p>
                    We also performed a competetive analysis where we found that features like a virtual tour guide,
                    social media features, and transalation accessibility were sparse. Therefore, we decided to include
                    these features in our app.
                </p>

                <p> We focused our solution on these 4 features:</p>

                <div className={styles.imgWrapper}>
                    <img src={solution} className={styles.imgPrototype} alt="travelotl solutions"></img>
                </div>

            </div>


            <div className={styles.projectDescription}>
                <h2>The Prototype</h2>

                <div className={styles.subsection}>
                    <h3>Prototype Sketches</h3>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize2} src={sketch1} alt="travelotl sketch 1"></img>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize2} src={sketch2} alt="travelotl sketch 2"></img>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize2} src={sketch3} alt="travelotl sketch 3"></img>
                    </div>

                </div>

                <div className={styles.subsection}>
                    <h3>Mid-Fidelity Prototype Screens</h3>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototype} src={midfi} alt="travelotl lofi prototype"></img>
                    </div>

                </div>

                <div className={styles.subsection}>
                    <h3>High-Fidelity Prototype Screens</h3>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize3} src={hifi1} alt="travelotl hifi prototype"></img>
                    </div>
                    <p className={styles.subtext}>Login and account screens</p>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize3} src={hifi2} alt="travelotl hifi prototype"></img>
                    </div>
                    <p className={styles.subtext}>Home and Museum Screens</p>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize2} src={hifi3} alt="travelotl hifi prototype"></img>
                    </div>
                    <p className={styles.subtext}>Activity Screens</p>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize2} src={hifi4} alt="travelotl hifi prototype"></img>
                    </div>
                    <p className={styles.subtext}>Exhibit scanning screens</p>

                    <div className={styles.imgWrapper}>
                        <img className={styles.imgPrototypeMaxSize2} src={hifi5} alt="travelotl hifi prototype"></img>
                    </div>
                    <p className={styles.subtext}>Museum curator views</p>

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