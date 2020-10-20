import React from 'react';

import styles from './index.module.scss';
import imagen2 from './assets/img3.svg';

function End() {
  return(
    <div className={styles.containerHome}>
      <img src={imagen2} className={styles.img} title="Imagen 2" alt="Imagen 2" />
      <p className={styles.text}>Gracias por utilizar la App</p>
      <div className={styles.conatainerFooter}>
        <p className={styles.text}>Leonardo Gerbacio Romero © 2020</p>
      </div>
    </div>
  );
}

export default End;