import Drone from '../../assets/img/mavicAir.png';
import Mark from '../../assets/img/5dmark.png';
import CanonD from '../../assets/img/1000d.png';
import Lumix from '../../assets/img/lumix.png';
import Hero5 from '../../assets/img/hero5.png';
import React from 'react';
// import '../index.scss';
import mediaStyle from '../../components/media/Media.module.css';
import style from './Cards.module.css';
export const PhotoTools = () => {
  return (
    <section className="PhotoTools">
      <aside>
        <h1 className="CaptionTools">My Photo Tools</h1>
      </aside>
      <div className="cardContainer">
        <div className="card cardBorder">
          <img className="cardStyle" width={140} height={120} src={Drone} alt="card" />
          <i className="cardStyle">
            <h3>DJI Mavic Air</h3>
          </i>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={140} height={120} src={Mark} alt="card" />
          <i className="cardStyle">
            <h3>Canon 5D Mark II</h3>
          </i>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={160} height={120} src={CanonD} alt="card" />
          <i className="cardStyle">
            <h3>Canon EOS 1000D</h3>
          </i>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={160} height={120} src={Lumix} alt="card" />
          <i className="cardStyle">
            <h3>Lumix g7</h3>
          </i>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={160} height={120} src={Hero5} alt="card" />
          <i className="cardStyle">
            <h3>GoPro Hero 5</h3>
          </i>
        </div>
      </div>
    </section>
  );
};
