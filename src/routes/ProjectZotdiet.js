import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import zotdiet from "../assets/zotdiet.png"
import affinity from "../assets/zotdietAffinity.jpg"
import zotdietSketches from "../assets/zotdietSketches.png"
import foodScannerLofi from "../assets/foodScannerLofi.png"
import restaurantLofi from "../assets/restaurantLofi.png"
import diningHallLofi from "../assets/diningHallLofi.png"
import foodScannerHifi from "../assets/foodScannerHifi.png"
import restaurantHifi from "../assets/restaurantHifi.png"
import diningHallHifi from "../assets/diningHallHifi.png"
import revision1 from "../assets/zotdietRevision1.png"
import revision2 from "../assets/zotdietRevision2.png"

import styles from '../styles/ProjectPage.module.css';

const ProjectZotdiet = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return ( <div>
        <Navbar />
            
        <div class={styles.projectWrapper}>
            <img className={styles.headerPic} alt="iPhone mockups" src={zotdiet}></img>
            <h1>Zotdiet</h1>
            <div>
                <a href="https://www.figma.com/proto/E5bKgebcACwujnaPlRT6oh/132-Prototype?page-id=344%3A2479&node-id=344%3A2480&starting-point-node-id=344%3A2480" className={styles.button}>Prototype Demo</a>
                <a href="#presentation" className={styles.button}>Presentation</a>
            </div>
            <div className={styles.projectDescription}>
                <p>ZotDiet is an application designed for UCI students who live with dietary restrictions. Our research on these students indicated that they were in need of a solution to help them find suitable food either on or near campus during their time at UCI. This solution is ZotDiet. 
                    The application allows students to: </p>
                    <div className={styles.listWrapper}>
                        <ul className={styles.projectUl}>
                            <li>View daily dining hall menus and nearby restaurant menus while automatically highlighting menu items that fit with the user's diet. </li>
                            <li>Scan food items at a grocery story. The app will immediately notify them if the item fits their diet.</li>
                            <li>Save favorite food items and restaurants.</li>
                        </ul>
                    </div>  
                <p><b>My role:</b> UI/UX designer and researcher (team of 5). I contributed to every part of the project, including market research, user interviews, ideation, prototyping, and user testing.</p>
                <p><b>Time:</b> 10 weeks</p>
                <p>This project was created for Informatics 132 at UC Irvine, a project course on Human-Computer Interaction, where students use HCI principles to complete design projects.</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Motivation</h2>
                <p>Our team conducted research on how UCI students with dietary restrictions navigate grocery shopping and find restaurants in the Irvine area where they are accommodated. Members of our team have personally experienced the struggles that come with having a restrictive diet, so we were personally motivated to create a more accessible, inclusive dining environment for UCI students. Initial research suggests that studies on inclusive dining have been done at a handful of outside organizations, but not at UCI or other UC schools. Therefore, this study targets UCI student to improve their experiences with food on campus.</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Design Question</h2>
                <p><b>How can UCI students who follow specific dietary restrictions gain better access and insight to food products and services at UCI?</b></p>

                <h2>Research Questions</h2>
                <div className={styles.listWrapper}>
                    <ol>
                        <li>Do UCI students struggle to find a place to eat or grocery shop because of their dietary restrictions?</li>
                        <li>How do UCI students grocery shop according to their dietary restrictions?</li>
                        <li>What kinds of dietary restrictions do UCI students have?</li>
                        <li>What challenges do UCI students face when trying to adhere to their specific diets?</li>
                    </ol>
                </div>
            </div>

            <div className={styles.projectDescription}>
                <h2>Our Research Methods</h2>

                <h4>Participants</h4>
                <p>Our team decided to conduct interview calls with our participants in order to gain deeper insight into their lives that would not be possible without having in-depth discussions. In total, we interviewed 4 participants with different kinds of dietary restrictions:</p>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>Halal Diet (Participant 1)</li>
                        <li>Gluten Intolerance & Lactose Sensitivity (Participant 2)</li>
                        <li>Peanuts & Other Nuts Allergy (Participant 3)</li>
                        <li>Vegetarian (Participant 4)</li>
                    </ul>
                </div>

                <h4>Data Collection</h4>
                <p>All four user interview calls were recorded and transcribed either by hand or by Zoom’s cloud recording transcription software. Each participant was recruited from UCI and was required to sign a consent form to be interviewed. </p> 
            </div>

            <div className={styles.projectDescription}>
                <h2>Ethical Considerations</h2>
                <ul className={styles.projectUl}>
                    <li>We gave participants the option of having their camera on or off while being interviewed over Zoom. </li>
                    <li>Participant data is not associated with their name outside of our research group and all data will be kept confidential. We have omitted the participants’ names to protect their identities, referring to them as “P1”, “P2”, “P3”, and “P4”.</li>
                </ul>
            </div>

            <div className={styles.projectDescription}>
                <h2>Affinity Diagram of Interview Data</h2>
                <p className={styles.subtext}>We created an affinity diagram in order to organize our data points.
                Sticky notes contain quotes by participants and are placed into categories. From these categories,
                we condensed the struggles of our participants into 3 main themes.</p>
                <div className={styles.imgWrapper}>
                    <img className={styles.imgPrototype} alt="Interview data affinity diagram" src={affinity}></img>
                </div>
            </div>

            <div className={styles.projectDescription}>
                <h2>We found that:</h2>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        {/* MAKE THESE INTO DROPDOWNS WITH MORE DETAILS */}
                        <li>Students want increased awareness about their dietary restrictions on campus</li>
                        <li>Students struggle with a lack of access to suitable foods for their diet on campus.</li>
                        <li>Student often faced negative social implications while trying to navigate their diets.</li>
                    </ul>
                </div>

                <p>Our research has revealed new insights into the experiences of students with dietary restrictions at
                     UCI that we can use to answer our design question. 
                    We discovered that participants shared pain points regarding their dietary experience in three key areas: 
                    <b>awareness, accessibility and social settings.</b> Existing solutions are insufficient because they 
                    cater to specific dietary restrictions, and leave others out. We will accomodate a wide variety of 
                    diets the UCI area specifically.</p>

                <a className={styles.subtext} href="https://docs.google.com/document/d/1H4d6S1Coa8gITBoI7xTTienTpeXJciVcWl_zIsLdXEM/edit?usp=sharing">Full interview data encoding</a>
            </div>

            <div className={styles.projectDescription}>
                <h2>The Prototype</h2>
                <p className={styles.subtext}>Based on the needs of our users determined by our interviews, we decided that the three main functions of our prototype would be:</p>
            </div>


            <h3>Early prototype sketches</h3>
            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Early zotdiet sketches" src={zotdietSketches}></img>
            </div>


            <div className={styles.subsection}>
                <h3>Low fidelity prototype created for user testing</h3>
            </div>

            <div className={styles.imgWrapper}>
                    <img  className={styles.imgPrototype} alt="low fidelity food scanner screens" src={foodScannerLofi}></img>
            </div>
            <p className={styles.subtext}>Food scanner</p>


            <div className={styles.imgWrapper}>
                <img  className={styles.imgPrototype} alt="low fidelity food scanner screens" src={restaurantLofi}></img>
            </div>
            <p className={styles.subtext}>Restaurant search</p>

            <div className={styles.imgWrapper}>
                <img  className={styles.imgPrototype} alt="low fidelity food scanner screens" src={diningHallLofi}></img>
            </div>
            <p className={styles.subtext}>UCI dining hall screens</p>



            <div className={styles.projectDescription}>
                <h2>Usability Testing Process and Results</h2>
                <p>4 participants were asked to complete the following tasks within the prototype:</p>
                <ol>
                    <li>Fill out the onboarding form and inform the app about your dietary restrictions.</li>
                    <li>Imagine you have chosen to eat at an on-campus dining hall. Find a food item from a dining hall and check if it matches your diet.</li>
                    <li>Imagine you have chosen to eat out at a restaurant. Find a restaurant nearby and find an individual menu item that matches your diet.</li>
                    <li>Imagine you have chosen to purchase a snack from a nearby grocery store. Scan an item’s barcode and check if it matches your diet.</li>
                </ol>

                <h3>Key Revisions</h3>
                <p><b>Severe Issue:</b> Some participants had trouble navigating to the Dining Hall section of the app, a main feature. To make this option more apparent, we added a large button to the 'Explore more options' section.</p>
            </div>

            <div className={styles.imgWrapper}>
                <img  className={styles.imgPrototype} alt="revision 1" src={revision1}></img>
            </div>
            <p className={styles.subtext}>Left: before, Right: revised</p>

            <div className={styles.projectDescription}>
                <p><b>Minor Issue:</b> Some users expressed confusion while attempting to select their dietary preferences in the onboarding form. Our solution includes check boxes to indicate that multiple options can be selected and a scroll bar to better indicate that more options are available than those initially shown.</p>
            </div>
            <div className={styles.imgWrapper}>
                <img  className={styles.imgPrototype} alt="revision 2" src={revision2}></img>
            </div>
            <p className={styles.subtext}>Left: before, Right: revised</p>

            <div className={styles.projectDescription}>
                <h2>Final Prototype</h2>
            </div>

            <div className={styles.imgWrapper}>
                <img  className={styles.imgPrototype} alt="hifi food scanner screens" src={foodScannerHifi}></img>
            </div>  
            <p className={styles.subtext}>Food scanner</p>

            <div className={styles.imgWrapper}>
                <img  className={styles.imgPrototype} alt="hifi restaurant search screens" src={restaurantHifi}></img>
            </div>
            <p className={styles.subtext}>Restaurant search</p>

            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="hifi dining hall menu screens" src={diningHallHifi}></img>
            </div>  
            <p className={styles.subtext}>Dining hall menu</p>


            <h2>Presentation</h2>
            <div id="presentation" className='presentation'>
                <iframe title="Zotdiet Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vQBlgVREqmFQW9uSBMCqe6iebJYgIgpQor23lpMPw7ghZs3iGA6O1erfEZdIs3OoNQd1fdogJv3XPXB/embed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div> 
        </div>
        <Footer />
    </div>
    );
};

export default ProjectZotdiet;