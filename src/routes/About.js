import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import profile from "../assets/profile.jpg" 

import styles from '../styles/About.module.css';

const About = () => {
    return ( <div>
        <Navbar />
        <div className={styles.frame}>
            <img src={profile} alt='Caroline Guzylak' className={styles.profilePic}></img>
            <h1 className={styles.aboutHeader}>About me</h1>
            <p className={styles.aboutP}>
                Hello, my name is Caroline! I am a third-year student at UC Irvine pursuing a Bachelor's in Software Engineering. Thus far in my education, I have learned the importance of applying classical strategies to modern-day projects and how to solve problems creatively. I am passionate about using the knowledge I gain in both Software Engineering and Human-Computer Interaction to make a positive impact on the daily lives of the people who use the programs I create.
            </p>
            <p className={styles.aboutP}>
                I consider myself to be a driven, dedicated, and creative person. I have both technical and design-oriented skill sets that make me a well-rounded addition to any team. I take initiative to ensure that the work I deliver is top-quality. 
            </p >
            <h1 className={styles.Header}>My Technical Skills</h1>
            <Container>
                <Row className={styles.skillTitle}><p>Languages</p></Row>
                <Row className="justify-content-center">
                    <div className={styles.skill}>Python</div>
                    <div className={styles.skill}>C++</div>
                    <div className={styles.skill}>Java</div>
                    <div className={styles.skill}>JavaScript</div>
                    <div className={styles.skill}>HTML</div>
                    <div className={styles.skill}>CSS</div>
                </Row>
                <Row className={styles.skillTitle}><p>Frameworks and Tech</p></Row>
                <Row className="justify-content-center">
                    <div className={styles.skill}>ReactJS</div>
                    <div className={styles.skill}>Angular</div>
                    <div className={styles.skill}>Bootstrap</div>
                    <div className={styles.skill}>jQuery</div>
                    <div className={styles.skill}>Ionic</div>
                    <div className={styles.skill}>Sass</div>
                    <div className={styles.skill}>Typescript</div>
                    <div className={styles.skill}>Git</div>
                </Row>
                <Row className={styles.skillTitle}><p>Software</p></Row>
                <Row className="justify-content-center">
                    <div className={styles.skill}>Figma</div>
                    <div className={styles.skill}>Adobe PS</div>                   
                </Row>
            </Container>

            <h1 className={styles.aboutHeader}>Coursework</h1>
            <ul className={styles.courses}>
                <Container>
                    <Row>
                        <Col>
                            <li className={styles.course}>Python Programming and Libraries (3 courses)</li>
                            <li className={styles.course}>Programming in C/C++</li>
                            <li className={styles.course}>Programming in Java</li>
                            <li className={styles.course}>Data Structure Implementation/Analysis</li>
                            <li className={styles.course}>Requirements Analysis and Engineering</li>
                            <li className={styles.course}>Software Testing and QA</li>
                            <li className={styles.course}>Intro to Software Engineering</li>
                        </Col>
                        <Col>
                            <li className={styles.course}>User Interaction Software</li>
                            <li className={styles.course}>Project Management</li>
                            <li className={styles.course}>Human-Computer Interaction (Project course)</li>
                            <li className={styles.course}>Social Analysis of Computing</li>
                            <li className={styles.course}>Science of Video Games</li>
                        </Col>
                    </Row>
                </Container>
            </ul>
        </div>
        <Footer />
    </div>
    )
} 

export default About