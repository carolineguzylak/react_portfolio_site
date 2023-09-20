import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import logo from "../assets/Teradata/TDLogo.png"
import catalogBig from "../assets/Teradata/catalogBig.png"
import catalogMedium from "../assets/Teradata/catalogMedium.png"
import deltaBig from "../assets/Teradata/deltaBig.png"
import passwordError from "../assets/Teradata/passwordError.png"
import ctaDelta from "../assets/Teradata/ctaDelta.png"
import m3Primary from "../assets/Teradata/m3Primary.png"
import palettes from "../assets/Teradata/palettes.png"
import usecases from "../assets/Teradata/usecases.png"
import webcomponent from "../assets/Teradata/webcomponent.gif"
import createaccount from "../assets/Teradata/createaccount.png"
import createaccounterror from "../assets/Teradata/createaccounterror.png"

import styles from '../styles/ProjectPage.module.css';

const ProjectTeradata = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return ( <div>
        <Navbar />
            
        <div class={styles.projectWrapper}>
            <div className={styles.imgWrapper}>
                <img style={{width: '100px'}} alt="Teradata logo" src={logo}></img>
            </div>
            <h1>Teradata UX Design Internship Projects</h1>
            <div className={styles.projectDescription}>
                <p><b>Internship duration:</b> 11 weeks</p>
                <p><b>Location:</b> Remote</p>
                <p>During my 2023 UX Design summer internship at Teradata, I contributed to 3 main projects. Each is described in detail below.</p>
            </div>
            <div style={{paddingBottom: '20px'}}>
                <a href="#unifiedLogin"className={styles.button}>Unified login experience</a>
                <a href="#designSystem" className={styles.button}>Design system modernization</a>
                <a href="#webComponent" className={styles.button}>Web component development</a>
            </div>

            <hr />

            <span class="anchor" id="unifiedLogin"></span>

            <div className={styles.projectDescription}>
                <h2>Unified login experience initiative</h2>
                <p>The goal of the ULE initiative is to create a single ideal login experience that can be used across all 14 Teradata web domains in order to create a simple, unified experience. I took the opportunity to spearhead this effort during my internship and build the foundation for these design changes to take place.</p>
                <p>To begin, I cataloged the account creation, login, and password recovery flows for each of the 14 web domains. I used a Miro board and documented each step of each flow, beginning to identify deviations or mistakes in each flow.</p>
           
                <div className={styles.imgWrapper}>
                    <img style={{width: '1000px'}} alt="High level view of catalog Miro board" src={catalogBig}></img>
                </div>

                <p>Below is an example of a board created for a single domain. It tracks the user flow through account creation, login, and password recovery.</p>

                <div className={styles.imgWrapper}>
                    <img alt="Lower level view of catalog Miro board" src={catalogMedium}></img>
                </div>

                <p>After each process was cataloged, I started to identify categories that these flow deltas, or differences, occurred in. These categories include UI component styling, language differences, and error handling discrepancies as pictured below.</p>
            
                <div className={styles.imgWrapper}>
                    <img style={{width: '1000px'}} alt="High level view of flow delta Miro board" src={deltaBig}></img>
                </div>
            </div>


            {/*ACCOUNT CREATION PASSWORD RESTRICTIONS*/}
                <div className={styles.projectDescription}>
                <h2>Account creation password acceptance delta analysis</h2>
                <p><b>Key deltas</b></p>
                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="Account creation password acceptance deltas" src={passwordError}></img>
                </div>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>Password restrictions vary between domains.</li>
                        <li>Sometimes all error messages are shown at once, other times only one is shown at a time.</li>
                    </ul>
                </div>
                <p><b>Suggested improvements and proposed wireframe</b></p>
                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="CTA UI styling deltas" src={createaccount}></img>
                </div>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>Create a set of standardized, secure password acceptance rules.</li>
                        <li>All error messages should be visible at once.</li>
                        <li>Error feedback should be responsive - Show errors while the user types.</li>
                    </ul>
                </div>
            </div>

            {/*CTA UI STYLING DELTAS*/}
            <h2>Create account call to action delta analysis</h2>
            <div className={styles.projectDescription}>
                <p><b>Key deltas</b></p>
                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="CTA UI styling deltas" src={ctaDelta}></img>
                </div>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>There are 4 different ways that "Create account" is phrased.</li>
                        <li>There are 4 different button stylings.</li>
                        <li>There are 3 different CTA placement options.</li>
                    </ul>
                </div>
                <p><b>Suggested improvements and proposed wireframe</b></p>
                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="CTA UI styling deltas" src={createaccounterror}></img>
                </div>
                <div className={styles.listWrapper}>
                    <ul className={styles.projectUl}>
                        <li>Standardized language: Use "Create account" only.</li>
                        <li>Use standardized primary and secondary button stylings.</li>
                        <li>"Create account" call to action will always be at the bottom-right of form fields and on the right side of the global header.</li>
                    </ul>
                </div>
            </div>

            

            <hr/>

            <span class="anchor" id="designSystem"></span>

            <div className={styles.projectDescription}>
                <h2>Design system modernization</h2>
                <div style={{paddingBottom: '20px', paddingTop: '10px'}}>
                    <a href="https://www.figma.com/file/icwFl2Av5K1RCJC1kkDeTW/%5BPortfolio%5D-M3-Colors?type=design&node-id=0%3A1&mode=design&t=PXx17IZ3BSZzbzPQ-1"className={styles.button}>Figma: Documentation and experimentation</a>
                </div>
                <p style={{textAlign: "left"}} className={styles.subtext}>Participants: Myself and one other UX design intern.</p>   
                <p>The design system used by Teradata at the start of my internship was dated, as it followed Material Design 1 guidelines and the Figma components did not make use of new features like variables or component properties. I was first tasked with redesigning the color system used by the UX team following Material Design 3 standards.</p>
                <p>Material Design 3 mandates specific color roles, such as primary, secondary, and surface. Each of these colors encompasses a set of applications, such as the base color, and a color for objects on top of the base.</p>
            
                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="Material 3 primary color example" src={m3Primary}></img>
                </div>
                <p className={styles.subtext}>Image from m3.material.io</p>      

                <p>These colors are selected from a tonal palette that is generated based on the desired key color. Material Design provides a palette generator for this purpose, but the palettes generated from this tool did not satisfy Teradata designs due to lack of contrast and incorrect translation between light and dark mode. To resolve this, I decided to generate a different palette for light and dark mode for each color. I did this using a shades and tints generator and adjusted the palettes to suit Teradata use cases.</p>          

                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="Generated palettes" src={palettes}></img>
                </div>
                <p className={styles.subtext}>Color palettes assigned to Material 3 color roles and custom Teradata roles</p>   

                <p>After assigning these newly generated colors to Figma variables, I began applying these colors to Teradata design components and pages. I also added code syntax properties to these Figma variables according to developer requested naming conventions for easy dev use.</p>

                <div className={styles.demoVideo}>
                    <iframe title="Component testing" width="900" height="550" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FicwFl2Av5K1RCJC1kkDeTW%2F%255BPortfolio%255D-M3-Colors%3Ftype%3Ddesign%26node-id%3D1%253A21318%26mode%3Ddesign%26t%3DPXx17IZ3BSZzbzPQ-1" allowfullscreen></iframe>
                </div>
                <p className={styles.subtext}>Component testing - Comparing original colors to new color palettes</p> 

                <p>I repeatedly showcased these designs and received feedback from the UX team and made adjustments accordingly. The final product consisted of the colors below</p>

                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="Color use cases" src={usecases}></img>
                </div>
                <p className={styles.subtext}>Color use cases</p>   

                <p>Finally, I created documentation for the new color system that includes explanations of color roles and examples of usage.</p>

                <div className={styles.demoVideo}>
                    <iframe title="Color documentation" width="900" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FicwFl2Av5K1RCJC1kkDeTW%2F%255BPortfolio%255D-M3-Colors%3Ftype%3Ddesign%26node-id%3D1%253A1665%26mode%3Ddesign%26t%3DPXx17IZ3BSZzbzPQ-1" allowfullscreen></iframe>
                </div>
                <p className={styles.subtext}>Documentation</p> 

            </div>









            <hr/>

            <span class="anchor" id="webComponent"></span>
            
            <div className={styles.projectDescription}>
                <h2>Web component development</h2>
                <p>I created an Expansion Panel responsive web component for Teradata’s component library hosted in Github Storybook. Based on an existing Figma design for the Expansion Panel, I programmed the component using the Lit web component framework.</p>
                <p>The component contains optional content previews and footers. The main content or footer can contain text or any other component, such as action buttons.</p>
                <div className={styles.imgWrapper}>
                    <img  style={{width: '800px'}} alt="Expansion panel web component" src={webcomponent}></img>
                </div>
                <p className={styles.subtext}>Expansion panel web component</p>   
            
            </div>

        </div>
        <Footer />
    </div>
    );
};

export default ProjectTeradata;