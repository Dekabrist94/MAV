import React from 'react';
// import '../index.scss';
import Camera from '../../assets/img/camera.png';
import AVATAR from '../../assets/img/AVATAR.jpg';
import Bride from '../../assets/img/bride.png';
import style from './About.module.css';
import mediaStyle from '../../components/media/Media.module.css';
export const AboutMe = () => {
  return (
    <section className={style.aboutMe}>
      <div className={style.aboutImg}>
        <img className={style.avatar} width={200} height={200} src={AVATAR} alt="AVATAR" />
        <img className={style.camera} width={500} height={302} src={Camera} alt="Camera" />
      </div>

      <span className={style.textAbout}>
        <h1 className={style.textAboutCenter}>About Me:</h1> Welcome to MAV photographer Alex
        website! I am Professional photographer, videographer, also i do video and photo by Drone.
        All my:
        <a className={style.aboutLinks} href="#">
          {' '}
          Photo Tools{' '}
        </a>
        you can find on my site. my expiriens is 5 yaers with hard job and still study any new
        fitches. If you want to see my:{' '}
        <a className={style.aboutLinks} href="#">
          {' '}
          Portfolio
        </a>
        , you can click on link:{' '}
        <a className={style.aboutLinks} href="#">
          Instagram
        </a>{' '}
        or scroll a bit down to site and you will find all my best jobs. Kind regards!!!
      </span>

      <div className={style.brideContainer}>
        <img className={style.bride} width={320} height={350} src={Bride} alt="Bride" />
      </div>
    </section>
  );
};
