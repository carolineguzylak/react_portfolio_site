import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/About.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import profile from "../assets/profile.jpg"

const About = () => {
    return ( <div>
        <Navbar />
        <div className='frame'>
            <img src={profile} alt='Caroline Guzylak' className='profilePic'></img>
            <h1 className='aboutHeader'>About me</h1>
            <p className='aboutP'>
                Hello, my name is Caroline! I am a third-year student at UC Irvine pursuing a Bachelor's in Software Engineering. Thus far in my education, I have learned the importance of applying classical strategies to modern-day projects and how to solve problems creatively. I am passionate about using the knowledge I gain in both Software Engineering and Human-Computer Interaction to make a positive impact on the daily lives of the people who use the programs I create.
            </p>
            <p className='aboutP'>
                I consider myself to be a driven, dedicated, and creative person. I have both technical and design-oriented skill sets that make me a well-rounded addition to any team. I take initiative to ensure that the work I deliver is top-quality. 
            </p >
            <h1 className='aboutHeader'>My Technical Skills</h1>
            <Container>
                <Row className='skillTitle'><p>Languages</p></Row>
                <Row className="justify-content-center">
                    <div className='skill'>Python</div>
                    <div className='skill'>C++</div>
                    <div className='skill'>Java</div>
                    <div className='skill'>JavaScript</div>
                    <div className='skill'>HTML</div>
                    <div className='skill'>CSS</div>
                </Row>
                <Row className='skillTitle'><p>Frameworks and Tech</p></Row>
                <Row className="justify-content-center">
                    <div className='skill'>ReactJS</div>
                    <div className='skill'>Angular</div>
                    <div className='skill'>Bootstrap</div>
                    <div className='skill'>jQuery</div>
                    <div className='skill'>Ionic</div>
                    <div className='skill'>Sass</div>
                    <div className='skill'>Typescript</div>
                    <div className='skill'>Git</div>
                </Row>
                <Row className='skillTitle'><p>Software</p></Row>
                <Row className="justify-content-center">
                    <div className='skill'>Figma</div>
                    <div className='skill'>Adobe PS</div>                   
                </Row>
            </Container>

            <h1 className='aboutHeader'>Coursework</h1>
            <ul className='courses'>
                <Container>
                    <Row>
                        <Col>
                            <li className='course'>Python Programming and Libraries (3 courses)</li>
                            <li className='course'>Programming in C/C++</li>
                            <li className='course'>Programming in Java</li>
                            <li className='course'>Data Structure Implementation/Analysis</li>
                            <li className='course'>Requirements Analysis and Engineering</li>
                            <li className='course'>Software Testing and QA</li>
                            <li className='course'>Intro to Software Engineering</li>
                        </Col>
                        <Col>
                            <li className='course'>User Interaction Software</li>
                            <li className='course'>Project Management</li>
                            <li className='course'>Human-Computer Interaction (Project course)</li>
                            <li className='course'>Social Analysis of Computing</li>
                            <li className='course'>Science of Video Games</li>
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