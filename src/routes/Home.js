import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCardData from '../components/ProjectCardData';
import ProjectCard from '../components/ProjectCard';
import ProjectCardExternalData from '../components/ProjectCardExternalData';
import ProjectCardExternal from '../components/ProjectCardExternal';

import styles from '../styles/Home.module.css';

const Home = () => {
    return <div>
        <Navbar />
        <Header />
        <button>Design</button> <button>Development</button>

        <div>
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
            <div className={styles.cards}>
                {ProjectCardExternalData.map((value, index) => {
                    return(
                        <ProjectCardExternal
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