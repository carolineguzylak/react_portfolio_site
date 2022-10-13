import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import insta from "../assets/insta.png"

import styles from '../styles/ProjectPage.module.css';

const ProjectOrchestrate = () => {
    return ( <div>
        <Navbar />

        <div class={styles.projectWrapper}>
            <img className={styles.headerPic} alt="iPhone mockups" src={insta}></img>
            <h1 class={styles.projectHeader}>Instagram Redesign</h1>
            <div className={styles.projectDescription}>
                <p>Performed a research study on the impact social media has on the mental health of university students with a team of 4 researchers. Redesigned a popular social media app to better support the mental health of its users based upon our research findings.</p>
                <p>My role: UI/UX designer and researcher (team of 5)</p>
                <p>Time: 10 weeks</p> 
            </div>
            <h2 class={styles.projectHeader}>App Demo</h2>
            <div className={styles.demo}>
                <iframe title="figma prototype" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIFjFXv4jkMSlur3uM91t4Z%2FSocial-Media-Setting-Updates-Prototype%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
            </div>
            <h2 class={styles.projectHeader}>Presentation</h2>
            <div className='presentation'>
                <iframe title="Insta Redesign Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vTXekL6PghR_1IGJPnWyEwNs5G3mJ_Uz2J5-Wjpgt2S7cKL3nepKkd2P1IJW6CNARnl3LM217p7RD33/embed?start=false&loop=true&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
         <Footer />   
    </div>
    );
};

export default ProjectOrchestrate;