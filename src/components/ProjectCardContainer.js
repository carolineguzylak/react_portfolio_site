import '../styles/ProjectCardContainerStyles.css'
import ProjectCardData from './ProjectCardData';
import ProjectCard from './ProjectCard';
import React from 'react'

// stateless function component: sfc
const ProjectCardContainer = (props) => {
    return ( 
        <div className="card-container">
            {ProjectCardData.map((value, index) => {
            return(
                <ProjectCard
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                pagelink={value.pagelink}
                />
            )
            })}
        </div>
     );
};
 
export default ProjectCardContainer;