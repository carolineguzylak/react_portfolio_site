import styles from '../styles/Header.module.css'

const Header = () => {
    return ( 
        <div className={styles.headerContainer}>
            <div className={styles.headerText}>
                <h1 className={styles.intro}>Hi! I'm Caroline.</h1>
                <h3>Welcome to my design portfolio.</h3>
            </div>
        </div>
     );
};
 
export default Header;
