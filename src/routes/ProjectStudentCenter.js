import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import logo from "../assets/Teradata/TDLogo.png"

import styles from '../styles/ProjectPage.module.css';

const ProjectTeradata = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return ( <div>
        <Navbar />
            
        <div class={styles.projectWrapper}>
            <div className={styles.imgWrapper}>
                <img style={{width: '100px'}} alt="Teradata logo" src={logo}></img>
            </div>
            <h1>Teradata UX Design Internship</h1>
            <div className={styles.projectDescription}>
                <p>I am currently working as a UX Design Intern at Teradata. Please check back in September to see a full case study of my work once I have completed my internship!</p>  
                <p>Here's what I am working on right now:</p>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>Updating the Product Experience Team’s design system to follow Material Design 3 standards.</li>
                        <li>Updating existing Figma components to use new Figma features like variables and component properties.</li>
                        <li>Designing a unified login experience to support 14 Teradata domains. Analyzing user flow deltas to create a single, ideal experience to be implemented across all domains.</li>
                        <li>Developing responsive web components based on Figma designs using the Lit web component framework.</li>
                    </ul>
                </div>  
            </div>

        </div>
        <Footer />
    </div>
    );
};

export default ProjectTeradata;