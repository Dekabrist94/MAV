import React from 'react';
import mainCamera from '../../assets/img/mainCamera.png';

import style from './Portfolio.module.css';
export const Portfolio = () => {
  return (
    <section className={style.Portfolio}>
      <h1 className={style.captionPortfolio}>My Portfolio</h1>
      <div className={style.slider}>
        <div className={style.mainCamera}>
          <img className={style.cameraSlider} width={800} height={1100} src={mainCamera} />
        </div>
      </div>
    </section>
  );
};
