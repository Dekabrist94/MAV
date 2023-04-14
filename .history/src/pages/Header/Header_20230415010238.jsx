import PHOTOGRAPHER from '../assets/img/photographer.png';
import InstaLogo from '../assets/img/instagram.png';
import MAV from '../assets/img/MAV.png';
import style from './Header.module.css';
// import '../index.scss';
import { CustomButton } from '../../components/button UI/Button';
import React from 'react';
// import '../components/media/media.css';
export const Header = () => {
  return (
    <header collapseOnSelect expand="lg">
      <div className={style.headerLeft}>
        <img className={style.headerImg} width={130} height={50} src={MAV} alt="logo" />
        <div className={style.headerInfo}>
          <img
            className={style.headerImgLogo}
            width={150}
            height={30}
            src={PHOTOGRAPHER}
            alt="logo"
          />
          <div className={style.instaLink}>
            <img
              className={style.headerImgLogo}
              width={15}
              height={15}
              src={InstaLogo}
              alt="Instagram"
            />
            <a
              href="https://www.instagram.com/mav_photographer_alex/?igshid=YmMyMTA2M2Y%3D"
              className={style.underLogoLink}>
              mav_photographer_alex
            </a>
          </div>
        </div>
      </div>
      <div className={style.booking}>
        <CustomButton className="bookMe" text="BOOK ME" style="link" />
      </div>
    </header>
  );
};
