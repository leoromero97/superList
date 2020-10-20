import React from 'react';

import styles from './index.module.scss';
import imagen2 from './assets/img3.svg';

function End() {
  return(
    <div className={styles.containerHome}>
      <img src={imagen2} className={styles.img} title="Imagen 2" alt="Imagen 2" />
      <p className={styles.text}>Gracias por utilizar la App</p>
      <div className={styles.conatainerFooter}>
        <a href="https://www.linkedin.com/in/leonardo-gerbacio-romero/" target="blank" className={styles.text}>Leonardo Gerbacio Romero © 2020</a>
      </div>
    </div>
  );
}

export default End;