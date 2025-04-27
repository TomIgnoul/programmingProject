import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a href="#" className={styles.navButton}>LOGIN</a>
        <a href="/register" className={styles.navButton}>REGISTREREN</a>
    </nav>
  )
};

export default Navbar;