import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCardData from '../components/ProjectCardData';
import ProjectCard from '../components/ProjectCard';
import ProjectCardExternalData from '../components/ProjectCardExternalData';
import ProjectCardExternal from '../components/ProjectCardExternal';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import styles from '../styles/Home.module.css';

const Home = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});
    
    return <div>
        <Navbar />
        <Header />

        <Tabs className={styles.tabs}>
            <TabList>
            <Tab><h3>Design</h3></Tab>
            <Tab><h3>Development</h3></Tab>
            </TabList>

            <TabPanel>
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
            </TabPanel>

            <TabPanel>
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
            </TabPanel>
        </Tabs>

        <div>


        </div> 

        <p className={styles.credits}>Recipe Generator logo credit to Zothacks 2020, ICSSC Redesign logo credit to UCI ICSSC</p>
        <Footer />
        
    </div>;
};

export default Home;