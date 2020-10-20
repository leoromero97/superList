import React from 'react';
import logo from './assets/img1.svg';
import styles from './index.module.scss';


function Header() {
  return (
    <div className={styles.containerHome}>
      <h1 className={styles.title}>LIST MARKET</h1>
      <img src={logo} className={styles.logo} title="logo" alt="logo"/>
      <h2 className={styles.subTitle}>Bienvenidx !</h2>
      <p className={styles.text}>Armemos juntxs la lista que necesitas antes de ir de compras</p>
      <a className={styles.buttonPrimary} href="#home"> <span>EMPEZAR</span></a>

    </div>
  );
}

export default Header;
