// import '../index.scss';
import React from 'react';
import mainCamera from '../../assets/img/mainCamera.png';
import mediaStyle from '../../components/media/Media.module.css';
import style from './Portfolio.module.css';
export const Portfolio = () => {
  return (
    <section className="Portfolio">
      <h1 className="captionPortfolio">My Portfolio</h1>
      <div className="slider">
        <div className="mainCamera">
          <img className="cameraSlider" width={800} height={1100} src={mainCamera} />
        </div>
      </div>
    </section>
  );
};
