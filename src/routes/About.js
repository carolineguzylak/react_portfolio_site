import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import profile from "../assets/profile.jpg" 

import styles from '../styles/About.module.css';

const About = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return ( <div>
        <Navbar /> 
        <div className={styles.frame}>
            <img src={profile} alt='Caroline Guzylak' className={styles.profilePic}></img>
            <h1 className={styles.aboutHeader}>About me</h1>
            <p className={styles.aboutP}>
            Hi, I’m Caroline Guzylak. I’m a fourth-year student at UC Irvine studying Informatics with a specialization in Human-Computer Interaction, as well as a minor in Computer Science. I take pride in my well-rounded skill set that consists of deep design knowledge, technical ability, and project management skills. I’m a passionate logical creative with a strong ability to understand my users and their needs. I have a love for challenge and experimentation, and I always seek growth.
            </p>
            <p className={styles.aboutP}>
            I am intimately familiar with UX design processes and have employed them in each of my projects. I take initiative to ensure that the work I deliver is top-quality.
            </p >
            <p className={styles.aboutP}>
            Currently, I am employed as a UX intern at Teradata where I am making impactful contributions to design and product work. 
            </p >
            <p className={styles.aboutP}>
                I designed and developed this site myself using React.
            </p>
            <h1 className={styles.Header}>My Technical Skills</h1>

            <Container className={styles.skillContainer}>
                <Row className={styles.skillTitle}><p>Design Skills</p></Row>
                <Row className="justify-content-center">
                    <div className={styles.skill}>
                        <span>Low-High fidelity prototyping</span>
                        <span>Wireframing</span>
                        <span>Usability testing</span>
                        <span>Competetive analysis</span>
                        <span>User research</span>
                    </div>
                </Row>
                <Row className={styles.skillTitle}><p>Design Programs</p></Row>
                <Row className="justify-content-center">
                    <div className={styles.skill}><span>Figma</span>
                        <span>Adobe Photoshop and Creative Cloud</span>
                        <span>Miro</span>
                        <span>Procreate</span>
                        <span>Clip Studio</span>
                    </div>
                </Row>
                <Row className={styles.skillTitle}><p>Languages</p></Row>
                <Row className="justify-content-center">
                    <div className={styles.skill}>
                        <span>Python</span>
                        <span>C++</span>
                        <span>Java</span>
                        <span>JavaScript/Typescript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                </Row>
                <Row className={styles.skillTitle}><p>Frameworks and Tech</p></Row>
                <Row className="justify-content-center">
                    <div className={styles.skill}>
                        <span>React</span>
                        <span>Angular</span>
                        <span>Lit Dev</span>
                        <span>Git</span>
                    </div>
                </Row>
            </Container>

            {/* <h1 className={styles.aboutHeader}>Coursework</h1>
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
            </ul> */}
        </div>
        <Footer />
    </div>
    )
} 

export default About