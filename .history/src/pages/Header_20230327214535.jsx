import PHOTOGRAPHER from '../assets/img/photographer.png';
import InstaLogo from '../assets/img/instagram.png';
import MAV from '../assets/img/MAV.png';
import '../index.scss';
import { CustomButton } from '../components/button UI';
import React from 'react';
export const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <img className="headerImg" width={130} height={50} src={MAV} alt="logo" />
        <div className="headerInfo">
          <img className="headerImgLogo" width={150} height={30} src={PHOTOGRAPHER} alt="logo" />
          <div className="instaLink">
            <img className="headerImg" width={15} height={15} src={InstaLogo} alt="Instagram" />
            <a
              href="https://www.instagram.com/mav_photographer_alex/?igshid=YmMyMTA2M2Y%3D"
              className="underLogoLink">
              mav_photographer_alex
            </a>
          </div>
        </div>
      </div>
      <div className="bookMe">
        <CustomButton text="BOOK ME" style="link" />
      </div>
    </header>
  );
};
