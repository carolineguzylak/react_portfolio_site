import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRegClipboard } from "react-icons/fa";

import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.contactWrapper}>
                    <h3>Contact</h3>

                    <p className={styles.contactP}><b>Email:</b> carolineguzylak@gmail.com  <button id={styles.clipboard} onClick={() => {navigator.clipboard.writeText("carolineguzylak@gmail.com")}}><FaRegClipboard /></button> </p>
                    
                    <a className={styles.contactLink} href="http://www.linkedin.com/in/cguzylak">Linkedin</a>
                    <a  className={styles.contactLink} href="https://github.com/carolineguzylak">Github</a>
                </div>
            </div>

            <Footer />
        </>
    )
} 

export default Contact