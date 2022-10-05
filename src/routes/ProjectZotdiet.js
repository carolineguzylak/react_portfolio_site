import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import zotdiet from "../assets/zotdiet.png"
import '../styles/ProjectPage.css'


const ProjectZotdiet = () => {
    return ( <div>
        <Navbar />
            
        <div class='projectWrapper'>
            <img className='headerPic' alt="iPhone mockups" src={zotdiet}></img>
            <h1 class='projectHeader'>Zotdiet</h1>
            <div className='projectDescription'>
                <p>ZotDiet is an application designed for UCI students who live with dietary restrictions. Our research on these students indicated that they were in need of a solution to help them find suitable food either on or near campus during their time at UCI. This solution is ZotDiet. 
                    The application allows students to:
                    - View daily dining hall menus and nearby restaurant menus while automatically highlighting menu items that fit with the user's diet. 
                    - Scan food items at a grocery story. The app will immediately notify them if the item fits their diet. 
                    - Save favorite food items and restaurants.</p>
                <p>My role: UI/UX designer and researcher (team of 5)</p>
                <p>Time: 10 weeks</p>
            </div>

            <h2 class='projectHeader'>App Demo</h2>
            <div className='demo'>
                <iframe title="figma prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FE5bKgebcACwujnaPlRT6oh%2F132-Prototype%3Fpage-id%3D344%253A2479%26node-id%3D344%253A2480%26starting-point-node-id%3D344%253A2480" allowfullscreen></iframe>
            </div>
            <h2 class='projectHeader'>Presentation</h2>
            <div className='presentation'>
                <iframe title="Zotdiet Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vQBlgVREqmFQW9uSBMCqe6iebJYgIgpQor23lpMPw7ghZs3iGA6O1erfEZdIs3OoNQd1fdogJv3XPXB/embed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div> 
        </div>
        <Footer />
    </div>
    );
};

export default ProjectZotdiet;