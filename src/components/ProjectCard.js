import styles from '../styles/ProjectCard.module.css'
import React from 'react'

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const ProjectCard = (props) => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return ( 
        <div data-aos="fade-up" className={styles.projectCard}>
            <div className={styles.contentWrapper}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Link to={props.pagelink} className={styles.learnButton}>View case study</Link>
            </div>

            <img src={props.imgsrc} alt="Screen of project"/>
        </div>
     );
};
 
export default ProjectCard;

