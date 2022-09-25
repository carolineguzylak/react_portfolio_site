import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer"
import ProjectCardContainer from "../components/ProjectCardContainer";

const Home = () => {
    return <div>
        <Navbar />
        <Header />
        <ProjectCardContainer />
        <Footer />
    </div>;
};

export default Home;