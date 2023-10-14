import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import persona1 from "../assets/CDSCaseStudy1.png"
import persona2 from "../assets/CDSCaseStudy2.png"
import compAudit from "../assets/CDSCompetetiveAudit.png"
import logo from "../assets/CDSLogo.png"
import thankYouVideo from "../assets/CDS.MOV"
import facilities from "../assets/CDSfacilities.png"
import dogpage from "../assets/CDSdogpage.png"
import dogpage2 from "../assets/CDSdogpage2.png"

import styles from '../styles/ProjectPage.module.css';

const ProjectCellDogs = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return ( <div>
        <Navbar />
            
        <div class={styles.projectWrapper}>
            <div className={styles.imgWrapper}>
                <img style={{width: '100px'}} alt="Cell Dogs logo" src={logo}></img>
            </div>
            <h1>Cell Dogs</h1>
            <div className={styles.projectDescription}>
                <p>Over the course of one academic year, I designed a database website to support the non-profit organization, <a href="https://www.celldogs.org/">Cell Dogs</a>. Cell Dogs assists the rehabilitation of adults and juveniles in correctional facilities by giving them the opportunity to train rescued dogs.</p>
                <p><b>My role:</b> UI/UX designer on a team of 5 designers. I contributed to market research, prototyping, and user validation.</p>
                <p><b>Time:</b> October 2022 - May 2023</p>
                <p>This project was created under UC Irvine's <a href="https://ctc-uci.com/">Commit the Change</a>, a student-led volunteer organization that produces high-quality software for non-profit organizations.</p>
            </div>

            <div className={styles.projectDescription}>
            <h2>Requirements</h2>
                <p>This NPO was struggling with data management, and previously kept all organization data in a spreadsheet that was <b>prone to error</b>, <b>difficult to search</b>, and <b>difficult to update</b>.</p>
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
                        <li>Color-coded chips that are applied to each dog. These chips indicate categories like adoption or graduation status.</li>
                        <li>Database filters contained in a side-sheet. These would allow users to sort through the dogs by checking off certain filters.</li>
                        <li>A profile view for each individual dog, where their detailed data can be viewed and edited.</li>
                    </ul>
                </div>
           </div>

            <div className={styles.projectDescription}>
                <h2>Design</h2>
                <p>My team and I began ideating through simple whiteboard sketches that outlined each page we would need to include in our final designs.</p>
                <p>I primarily designed the individual dog view page. The designs that were presented for user validation are shown below.</p>
                <p>To better standardize our designs and ease handoff to the developer team, the designs use Chakra UI kit for Figma.</p>
            </div>

            <div className={styles.demoVideo}>
                <iframe title="Dog page demo" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZGemGZiFEZ0In0kjdmNAsp%2FCDS-Portfolio-Ver%3Ftype%3Ddesign%26node-id%3D1%253A5817%26mode%3Ddesign%26t%3DGQNgRbCqtIxgQJTU-1" allowfullscreen></iframe>
            </div>

            <div className={styles.projectDescription}>
                <h2>User validation</h2>
                <p>My team and I presented the following tasks to NPO representatives to test our designs.
                    Each task is intended to test a feature of the app.
                </p>
                <ul className={styles.projectUl}>
                        <li><b>Login: </b>Can you walk me through how you would use your username and password to log into the Cell Dogs website? How would you reset your password?</li>
                        <li><b>Add a new dog: </b>How would you add a new dog from the Irvine Dog Rescue with the following information:
                            <ul className={styles.projectUl}>
                                <li>Name: Buddy</li>
                                <li>Gender: Male</li>
                                <li>Grad Age: 4</li>
                                <li>Graduated from: OC Probation</li>
                                <li>Chip number: 1234567</li>
                                <li>Adopter: Bill Smith</li>
                            </ul>
                        </li>
                        <li><b>Search for a dog: </b>How would you search for a dog that is female, graduated from OC probation, and a Husky?</li>
                </ul>

                <p><b>The results:</b> Our NPO representative was able to complete all of the tasks successfully, but had a few requests for design changes:</p>
                <p>1. Key facility contacts should be shown for each entry in the facilities table.</p>
                <img style={{width: '90%'}} alt="Facilities page amendments" src={facilities}></img>
                <p>2. Under each dog's details, the specific unit they trained under at their facility should be displayed.</p>
                <img style={{width: '90%'}} alt="Dog page amendments" src={dogpage}></img>
                <p>3. The dog's age should not be its actual age, but the age of graduation from the Cell Dogs program.</p>
                <img style={{width: '90%'}} alt="Dog page amendments" src={dogpage2}></img>

                <p>After making these changes, we gained full approval from Cell Dogs and prepared to finalize the product.</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>User manual</h2>
                <p>We created a user manual that Cell Dogs could refer to if they ever needed help using our software. This manual was created in Gitbook and contains step-by-step instructions on how to perform main functions, such as 'How to add a new dog' or 'How to edit a dog's information.' </p>
                <p>This user manual cannot be shared publically due to the fact it contains sensitive internal information.</p>
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
        </div>
        <Footer />
    </div>
    );
};

export default ProjectCellDogs;