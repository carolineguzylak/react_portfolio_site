import styles from '../styles/Footer.module.css';
import React from 'react';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <p>Site created in React by Caroline Guzylak</p>
            <p className={styles.credits}>Recipe Generator logo credit to Zothacks 2020, ICSSC Redesign logo credit to UCI ICSSC</p>
        </footer>
    );
};

export default Footer;