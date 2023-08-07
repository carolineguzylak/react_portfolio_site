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
import persona1 from "../assets/CDSCaseStudy1.png"
import persona2 from "../assets/CDSCaseStudy2.png"
import compAudit from "../assets/CDSCompetetiveAudit.png"
import logo from "../assets/CDSLogo.png"
import thankYouVideo from "../assets/CDS.MOV"

import styles from '../styles/ProjectPage.module.css';

const ProjectCellDogs = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return ( <div>
        <Navbar />
            
        <div class={styles.projectWrapper}>
            <div className={styles.imgWrapper}>
                <img style={{width: '100px'}} alt="Cell Dogs logo" src={logo}></img>
            </div>
            <h1>Cell Dogs (UNDER CONSTRUCTION)</h1>
            <div className={styles.subsection}>
                <a href="https://www.figma.com/proto/E5bKgebcACwujnaPlRT6oh/132-Prototype?page-id=344%3A2479&node-id=344%3A2480&starting-point-node-id=344%3A2480" className={styles.button}>?</a>
            </div>
            <div className={styles.projectDescription}>
                <p>Over the course of one academic year, I took part in designing a database website to support the non-profit organization, <a href="https://www.celldogs.org/">Cell Dogs</a>. Cell Dogs is a non-profit organization that assists with the rehabilitation of adults and juveniles in correctional facilities, by giving them the opportunity to train rescued dogs. This NPO was struggling with data management, and previously kept all organization data in a spreadsheet that was <b>prone to error</b>, <b>difficult to search</b>, and <b>difficult to update</b>.</p>
                <p>The NPO required the following functionality for the new website:</p>    
                    <div className={styles.listWrapper}>
                        <ul className={styles.projectUl}>
                            <li>Add a dog or edit a dog within the database.</li>
                            <li>Add a jail or edit a jail within the database.</li>
                            <li>Search and filter the database</li>
                            <li>Securely log in as an administrator</li>
                            <li>Add new administrator logins</li>
                        </ul>
                    </div>  
                <p><b>My role:</b> UI/UX designer on a team of 5 designers. I contributed to market research, prototyping, and user validation.</p>
                <p><b>Time:</b> October 2022 - May 2023</p>
                <p>This project was created under UC Irvine's Commit the Change, a student-led volunteer organization that produces high-quality software for non-profit organizations.</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>User personas</h2>
                <p>To begin, my design team and I created user personas to better understand our two main users, the head NPO administrators.</p>
                <div className={styles.imgWrapper}>
                    <img alt="User persona 1" src={persona1} className={styles.imgPersona}></img>
                    <img alt="User persona 2" src={persona2} className={styles.imgPersona}></img>
                </div>
            </div>

            <div className={styles.projectDescription}>
                <h2>Competetive audit</h2>
                <div className={styles.imgWrapper}>
                <img alt="Competetive audit jamboard" src={compAudit} className={styles.imgPersona}></img>
                </div>
                <p>My team held a session to research existing database product in order to determine the best way to display and edit the NPO's data. We decided to include these key features in our designs:</p>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>Color coded chips that are applied to each dog. These would indicate tags like if the dog had graduated the program or if the dog had been adopted.</li>
                        <li>Database filters contained in a side-sheet. These would allow users to sort through the dogs by checking off certain filters.</li>
                        <li>A profile view for each individual dog, where their detailed data can be viewed and edited.</li>
                    </ul>
                </div>
           </div>

            <div className={styles.projectDescription}>
                <h2>Design</h2>
                <p>My team and I began ideating through simple whiteboard sketches that outlined each page we would need to include in our final designs.</p>
                <p>I primarily work on the individual dog view page. The designs for this page that were presented for user validation are shown below.</p>
                <p>To better standardize our designs and ease handoff to the developer team, the designs use Chakra UI kit for Figma.</p>
            </div>

            <div className={styles.demoVideo}>
                <iframe title="Dog page demo" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZGemGZiFEZ0In0kjdmNAsp%2FCDS-Portfolio-Ver%3Ftype%3Ddesign%26node-id%3D1%253A5817%26mode%3Ddesign%26t%3DGQNgRbCqtIxgQJTU-1" allowfullscreen></iframe>
            </div>

            <div className={styles.projectDescription}>
                <h2>Thank you video from Cell Dogs</h2>
                <p>After delivering the final product, we received this thank you video from Cell Dogs. It shows all the dogs that were rehabilitated by the NPO during the time that we completed this project. Thanks to Cell Dogs for finding forever homes for these dogs!</p>
                <div className={styles.imgWrapper}>
                    <video height="540px" controls>
                        <source src={thankYouVideo}/>
                    </video>
                </div>
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
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>We gave participants the option of having their camera on or off while being interviewed over Zoom. </li>
                        <li>Participant data is not associated with their name outside of our research group and all data will be kept confidential. We have omitted the participants’ names to protect their identities, referring to them as “P1”, “P2”, “P3”, and “P4”.</li>
                    </ul>
                </div>
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

                <a className={styles.button} href="https://docs.google.com/document/d/1H4d6S1Coa8gITBoI7xTTienTpeXJciVcWl_zIsLdXEM/edit?usp=sharing">Raw interview data and encoding</a>
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

export default ProjectCellDogs;