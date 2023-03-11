import '../index.scss';
import Camera from '../assets/img/camera.png';
import AVATAR from '../assets/img/AVATAR.jpg';
import Bride from '../assets/img/bride.png';
export const AboutMe = () => {
  return (
    <section className="aboutMe">
      <img className="avatar" width={200} height={200} src={AVATAR} alt="AVATAR" />
      <img className="camera" width={500} height={302} src={Camera} alt="Camera" />
      <img className="bride" width={320} height={302} src={Bride} alt="Bride" />

      <div>
        <h1 className="textAboutCenter">About Me:</h1>
        <h4 className="textAbout">
          Welcome to MAV photographer Alex website! I am Professional photographer, videographer,
          also i do video and photo by Drone. All my{' '}
          <a className="aboutLinks" href="#">
            Photo Tools
          </a>{' '}
          you can find on my site. my expiriens is 5 yers with hard job and still study any new
          fitches. If you want to see my{' '}
          <a className="aboutLinks" href="#">
            Portfolio
          </a>
          , you can do it in two things: On{' '}
          <a className="aboutLinks" href="#">
            Instagram
          </a>{' '}
          or scroll a bit down to site and you will find all my best jobs. Kind regards!!!
        </h4>
      </div>
    </section>
  );
};
