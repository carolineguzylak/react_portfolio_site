import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import zotdiet from "../assets/zotdiet.png"
import affinity from "../assets/zotdietAffinity.jpg"
import sketch1 from "../assets/zotdietSketch1.jpg"
import sketch2 from "../assets/zotdietSketch2.jpg"
import sketch3 from "../assets/zotdietSketch3.png"
import foodScannerLofi from "../assets/foodScannerLofi.png"
import restaurantLofi from "../assets/restaurantLofi.png"
import diningHallLofi from "../assets/diningHallLofi.png"
import foodScannerHifi from "../assets/foodScannerHifi.png"
import restaurantHifi from "../assets/restaurantHifi.png"
import diningHallHifi from "../assets/diningHallHifi.png"
import revision1 from "../assets/zotdietRevision1.png"
import revision2 from "../assets/zotdietRevision2.png"

import '../styles/ProjectPage.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const ProjectZotdiet = () => {
    return ( <div>
        <Navbar />
            
        <div class='projectWrapper'>
            <img className='headerPic' alt="iPhone mockups" src={zotdiet}></img>
            <h1>Zotdiet</h1>
            <div className='projectDescription'>
                <p>ZotDiet is an application designed for UCI students who live with dietary restrictions. Our research on these students indicated that they were in need of a solution to help them find suitable food either on or near campus during their time at UCI. This solution is ZotDiet. 
                    The application allows students to:
                    - View daily dining hall menus and nearby restaurant menus while automatically highlighting menu items that fit with the user's diet. 
                    - Scan food items at a grocery story. The app will immediately notify them if the item fits their diet. 
                    - Save favorite food items and restaurants.</p>
                <p><b>My role:</b> UI/UX designer and researcher (team of 5). I contributed to every part of the project, including market research, user interviews, ideation, prototyping, and user testing.</p>
                <p><b>Time:</b> 10 weeks</p>
            </div>

            <div className='projectDescription'>
                <h2>Motivation</h2>
                <p>Our team conducted research on how UCI students with dietary restrictions navigate grocery shopping and find restaurants in the Irvine area where they are accommodated. Members of our team have personally experienced the struggles that come with having a restrictive diet, so we were personally motivated to create a more accessible, inclusive dining environment for UCI students. Initial research suggests that studies on inclusive dining have been done at a handful of outside organizations, but not at UCI or other UC schools. Therefore, this study targets UCI student to improve their experiences with food on campus.</p>
            </div>

            <div className='projectDescription'>
                <h2>Design Question</h2>
                <p>How can UCI students who follow specific dietary restrictions gain better access and insight to food products and services at UCI?</p>

                <h2>Our Research Questions</h2>
                <ol>
                    <li>Do UCI students struggle to find a place to eat or grocery shop because of their dietary restrictions?</li>
                    <li>How do UCI students grocery shop according to their dietary restrictions?</li>
                    <li>What kinds of dietary restrictions do UCI students have?</li>
                    <li>What challenges do UCI students face when trying to adhere to their specific diets?</li>
                </ol>
            </div>

            <div className='projectDescription'>
                <h2>Our Research Methods</h2>

                <h3>Participants</h3>
                <p>Our team decided to conduct interview calls with our participants in order to gain deeper insight into their lives that would not be possible without having in-depth discussions. In total, we interviewed 4 participants with different kinds of dietary restrictions:</p>
                <ul>
                    <li>Halal Diet (Participant 1)</li>
                    <li>Gluten Intolerance & Lactose Sensitivity (Participant 2)</li>
                    <li>Peanuts & Other Nuts Allergy (Participant 3)</li>
                    <li>Vegetarian (Participant 4)</li>
                </ul>

                <h3>Data Collection</h3>
                <p>All four user interview calls were recorded and transcribed either by hand or by Zoom’s cloud recording transcription software. Each participant was recruited from UCI and was required to sign a consent form to be interviewed. </p> 
            </div>

            <div className='projectDescription'>
                <h2>Ethical Considerations</h2>
                <ul>
                    <li>We gave participants the option of having their camera on or off while being interviewed over Zoom. </li>
                    <li>Participant data is not associated with their name outside of our research group and all data will be kept confidential. We have omitted the participants’ names to protect their identities, referring to them as “P1”, “P2”, “P3”, and “P4”.</li>
                </ul>
            </div>

            <div className='projectDescription'>
                <h2>Affinity Diagram of Interview Data</h2>
                <p className="subtext">We created an affinity diagram in order to organize our data points before condensing them into 3 main themes.</p>
                <div class="imgWrapper">
                    <img alt="Interview data affinity diagram" src={affinity}></img>
                </div>
            </div>

            <div className='projectDescription'>
                <h2>We found that:</h2>
                <div className="listWrapper">
                    <ul>
                        {/* MAKE THESE INTO DROPDOWNS WITH MORE DETAILS */}
                        <li>Students want increased awareness about their dietary restrictions on campus</li>
                        <li>Students struggle with a lack of access to suitable foods for their diet on campus.</li>
                        <li>Student often faced negative social implications while trying to navigate their diets.</li>
                    </ul>
                </div>

                <p>Our research has revealed new insights into the experiences of students with dietary restrictions at UCI that we can use to answer our design question. We discovered that participants shared pain points regarding their dietary experience in three key areas: awareness, accessibility and social settings. Existing solutions are limited in that they are not generalized and cater to specific communities that live with dietary restrictions. Because our research included a variety of dietary restrictions at UCI, we can broaden the scope of existing solutions to include a wide range of dietary restrictions and accommodate the UCI area specifically.</p>

                <a className='subtext' href="https://docs.google.com/document/d/1H4d6S1Coa8gITBoI7xTTienTpeXJciVcWl_zIsLdXEM/edit?usp=sharing">Full interview data encoding</a>
            </div>

            <div className='projectDescription'>
                <h2>The Prototype</h2>
                <p>Based on the needs of our users determined by our interviews, we decided that the three main functions of our prototype would be:</p>
                <div className="listWrapper">
                    <ul>
                        <li>Viewing nearby restaraunt options</li>
                        <li>Viewing UCI daily dining hall options</li>
                        <li>Scanning food item barcodes for ingredient information</li>
                    </ul>
                </div>

                <h3>Early prototype sketches</h3>
                <div>
                    <div className="imgWrapper">
                        <img className="imgSketch" alt="zotdiet sketch 1" src={sketch1}></img>
                        <img className="imgSketch" alt="zotdiet sketch 2" src={sketch2}></img>
                        <img className="imgSketch" alt="zotdiet sketch 3" src={sketch3}></img>
                    </div>
                </div>  

                <div className="subsection">
                    <h3>Low fidelity prototype created for user testing</h3>

                    <div className="imgWrapper">
                        <img  alt="low fidelity food scanner screens" src={foodScannerLofi}></img>
                    </div>
                    <p className="subtext">Food scanner</p>

                    <div className="imgWrapper">
                        <img  alt="low fidelity restaurant search screens" src={restaurantLofi}></img>
                    </div>
                    <p className="subtext">Restaurant search</p>

                    <div className="imgWrapper">
                        <img  alt="low fidelity dining hall screens" src={diningHallLofi}></img>
                    </div>
                    <p className="subtext">UCI dining hall screens</p>

                </div>


            </div>

            <div className='projectDescription'>
                <h2>Usability Testing Process and Results</h2>
                <p>4 participants were asked to complete the following tasks within the prototype:</p>
                <ol>
                    <li>Fill out the onboarding form and inform the app about your dietary restrictions.</li>
                    <li>Imagine you have chosen to eat at an on-campus dining hall. Find a food item from a dining hall and check if it matches your diet.</li>
                    <li>Imagine you have chosen to eat out at a restaurant. Find a restaurant nearby and find an individual menu item that matches your diet.</li>
                    <li>Imagine you have chosen to purchase a snack from a nearby grocery store. Scan an item’s barcode and check if it matches your diet.</li>
                </ol>

                <h3>Key Revisions</h3>
                <p>Severe Issue: Some participants had trouble navigating to the Dining Hall section of the app, a main feature. To make this option more apparent, we added a large button to the 'Explore more options' section.</p>
                <img  alt="revision 1" src={revision1}></img>
                <p>Left: before, Right: revised</p>

                <p>Minor Issue: Some users expressed confusion while attempting to select their dietary preferences in the onboarding form. Our solution includes check boxes to indicate that multiple options can be selected and a scroll bar to better indicate that more options are available than those initially shown.</p>
                <img  alt="revision 2" src={revision2}></img>
                <p>Left: before, Right: revised</p>
            </div>

            <div className='projectDescription'>
                <h2>Final Prototype</h2>

                <img  alt="hifi food scanner screens" src={foodScannerHifi}></img>
                <p>Food scanner</p>

                <img  alt="hifi restaurant search screens" src={restaurantHifi}></img>
                <p>Restaurant search</p>

                <img  alt="hifi dining hall menu screens" src={diningHallHifi}></img>
                <p>Dining hall menu</p>
            </div>


            <h2>App Demo</h2>
            <div className='demo'>
                <iframe title="figma prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FE5bKgebcACwujnaPlRT6oh%2F132-Prototype%3Fpage-id%3D344%253A2479%26node-id%3D344%253A2480%26starting-point-node-id%3D344%253A2480" allowfullscreen></iframe>
            </div>
            <h2>Presentation</h2>
            <div className='presentation'>
                <iframe title="Zotdiet Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vQBlgVREqmFQW9uSBMCqe6iebJYgIgpQor23lpMPw7ghZs3iGA6O1erfEZdIs3OoNQd1fdogJv3XPXB/embed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div> 
        </div>
        <Footer />
    </div>
    );
};

export default ProjectZotdiet;