import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRegClipboard } from "react-icons/fa";

import styles from '../styles/Contact.module.css';

const Contact = () => {

    window.scrollTo({top:0, left:0, behavior:'instant'});

    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.contactWrapper}>
                    <h3>Contact</h3>

                    <p className={styles.contactP}><b>Email:</b> carolineguzylak@gmail.com  <button id={styles.clipboard} onClick={() => {navigator.clipboard.writeText("carolineguzylak@gmail.com")}}><FaRegClipboard /></button> </p>
                    
                    <div><a className={styles.contactLink} href="http://www.linkedin.com/in/cguzylak">Linkedin</a>
                    <a  className={styles.contactLink} href="https://github.com/carolineguzylak">Github</a></div>
                </div>
            </div>

            <Footer />
        </>
    )
} 

export default Contact