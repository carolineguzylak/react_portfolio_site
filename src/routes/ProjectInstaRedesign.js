import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import insta from "../assets/insta.png"
import survey11 from "../assets/instaSurvey11.png"
import survey12 from "../assets/instaSurvey12.png"
import survey2 from "../assets/instaSurvey2.png"
import instaProto1 from "../assets/instaProto1.png"
import instaProto2 from "../assets/instaProto2.png"
import instaProto3 from "../assets/instaProto3.png"
import instaProto4 from "../assets/instaProto4.png"

import styles from '../styles/ProjectPage.module.css';

const ProjectOrchestrate = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return ( <div>
        <Navbar />

        <div class={styles.projectWrapper}>
            <img className={styles.headerPic} alt="iPhone mockups" src={insta}></img>
            <h1 class={styles.projectHeader}>Instagram Redesign</h1>
            <div>
                <a href="https://www.figma.com/file/rnMrusTdS1nzED926Ks4wE/(PORTFOLIO-VER)Social-Media-Setting-Updates-Prototype?node-id=0%3A1" className={styles.button}>Prototype</a>
                <a href="#presentation" className={styles.button}>Presentation</a>
            </div>
            <div className={styles.projectDescription}>
                <p>Performed a research study on the impact social media has on the mental health of university students with a team of 4 researchers. Redesigned a popular social media app to better support the mental health of its users based upon our research findings.</p>
                <p><b>My role:</b> UI/UX designer and researcher (team of 5)</p>
                <p><b>Time:</b> 10 weeks</p> 
            </div>

            <div className={styles.projectDescription}>
                <h2>Motivation</h2>
                <p>Our motivation for this project was to gain a deeper understanding of the impact that social media can have on the mental health of its users. Using this understanding, we aimed to revise a popular social media app to better support the mental health of its users.</p>
            </div>

            <div className={styles.projectDescription}>
                <h2>Research</h2>
                <p>To begin our project, we surveyed 22 people about their experiences with social media and its impact on their mental health:</p>
           
                <h4>Digital care package</h4>
                <p>Survey-takers were incentivized with our custom digital care package consisting of music playlists, self-care guides, and healthy recipes.</p> 
                <div className={styles.listWrapper}>
                    <a href="https://express.adobe.com/page/wLtEn6X245hEE/" className={styles.button}>Self-care package</a>
                </div> 
            </div>

            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Preliminary Survey Infographic" src={survey11}></img>
            </div>
            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Preliminary Survey Infographic" src={survey12}></img>
            </div>

            <div className={styles.projectDescription}>
                <h2>Prototyping</h2>
                <p>Due to our research data, we decided to redesign 3 aspects of Instagram:</p>

                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        {/* MAKE THESE INTO DROPDOWNS WITH MORE DETAILS */}
                        <li><b>Feed filters:</b> Allow users to only show posts from certain people or topics.</li>
                        <li><b>Scroll limits:</b> Notify users when they've scrolled through a set number of reels and encourage them to exit the app.</li>
                        <li><b>Bedtime Notifications:</b> Disable notifcations and display to other users that primary user has gone to bed in anyone attempst to message them.</li>
                        <li><b>Informative reel consumption:</b> Show users who's story is coming up next in the story feed and allow them to skip certain users.</li>
                    </ul>
                </div>
            </div>

            <h3>Redesign Prototype</h3>
            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Feed Filters" src={instaProto1}></img>
            </div>
            <p className={styles.subtext}>Feed filters</p>

            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Scroll Limit" src={instaProto2}></img>
            </div>
            <p className={styles.subtext}>Scroll Limit</p>

            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Bedtime notifs" src={instaProto3}></img>
            </div>
            <p className={styles.subtext}>Bedtime notifications</p>
            

            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Informative consumption" src={instaProto4}></img>
            </div>
            <p className={styles.subtext}>Informative consumtion (Story warnings)</p>


            <div className={styles.projectDescription}>
                <h2>User feedback</h2>
                <p>After creating our prototype, we surveyed 16 Instagram users. Below is the data we collected after surveying them about our prototype.</p>
            </div>


            <div className={styles.imgWrapper}>
                <img className={styles.imgPrototype} alt="Prototype Survey" src={survey2}></img>
            </div>

            <div className={styles.projectDescription}>
                <h2>Conclusion</h2>
                <p>The results of our prototype survey show that most users either believe that the redesign for each feature would improve their mental health in relation to social media use, or were not sure. At the end of this study, we learned that majority of social media users report their time on social media having a negative impact on their mental health. Our study focused on creating solutions to improve mental health, both by adding reminders, limits, and entirely new features to the app. Our solutions were positively recepted and reflected the data gathered in out preliminary survey.</p>
            </div>

        </div>
         <Footer />   
    </div>
    );
};

export default ProjectOrchestrate;