import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import insta from "../assets/insta.png"

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

            <h2 id="presentation" class={styles.projectHeader}>Presentation</h2>
            <div className='presentation'>
                <iframe title="Insta Redesign Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vTXekL6PghR_1IGJPnWyEwNs5G3mJ_Uz2J5-Wjpgt2S7cKL3nepKkd2P1IJW6CNARnl3LM217p7RD33/embed?start=false&loop=true&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
         <Footer />   
    </div>
    );
};

export default ProjectOrchestrate;