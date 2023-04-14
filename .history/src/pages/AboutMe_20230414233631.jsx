import React from 'react';
import '../index.scss';
import Camera from '../assets/img/camera.png';
import AVATAR from '../assets/img/AVATAR.jpg';
import Bride from '../assets/img/bride.png';
import '../components/media/media.css';
export const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutImg">
        <img className="avatar" width={200} height={200} src={AVATAR} alt="AVATAR" />
        <img className="camera" width={500} height={302} src={Camera} alt="Camera" />
      </div>

      <p className="textAbout">
        <h1 className="textAboutCenter">About Me:</h1> Welcome to MAV photographer Alex website! I
        am Professional photographer, videographer, also i do video and photo by Drone. All my:
        <a className="aboutLinks" href="#">
          {' '}
          Photo Tools{' '}
        </a>
        you can find on my site. my expiriens is 5 yaers with hard job and still study any new
        fitches. If you want to see my:{' '}
        <a className="aboutLinks" href="#">
          {' '}
          Portfolio
        </a>
        , you can click on link:{' '}
        <a className="aboutLinks" href="#">
          Instagram
        </a>{' '}
        or scroll a bit down to site and you will find all my best jobs. Kind regards!!!
      </p>

      <div className="brideContainer">
        <img className="bride" width={320} height={350} src={Bride} alt="Bride" />
      </div>
    </section>
  );
};
