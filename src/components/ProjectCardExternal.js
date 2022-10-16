import '../styles/ProjectCard.css'
import React from 'react'

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const ProjectCard = (props) => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return ( 
        <div data-aos="fade-up" className="project-card">
            <img src={props.imgsrc} alt="Screen of project"/>
            <div className='description-box'>
                <h2 className="project-title">{props.title}</h2>
                <p className="project-description">{props.text}</p>
                <br></br>
                <a href={props.pagelink} className="learnButton">View project</a>
                {/* <a href={props.pagelink} className="learnButton">View case study</a> */}
            </div>
        </div>
     );
};
 
export default ProjectCard;

