import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCardData from '../components/ProjectCardData';
import ProjectCard from '../components/ProjectCard';

import 'react-tabs/style/react-tabs.css';


import styles from '../styles/Home.module.css';

const Home = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});
    
    return <div>
        <Navbar />

        <div className={styles.contentWrapper}>
            <Header />
            <div className={styles.cards}>
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
        </div>

        <Footer />
        
    </div>;
};

export default Home;