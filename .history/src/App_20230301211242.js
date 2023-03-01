import Camera from './assets/img/camera.png';
import Drone from './assets/img/mavicAir.png';
import Mark from './assets/img/5dmark.png';
import CanonD from './assets/img/1000d.png';
import Lumix from './assets/img/lumix.png';
import Hero5 from './assets/img/hero5.png';
import AVATAR from './assets/img/AVATAR.jpg';
import MAV from './assets/img/MAV.png';
import PHOTOGRAPHER from './assets/img/photographer.png';
import InstaLogo from './assets/img/instagram.png';
import { CustomButton } from './components/button UI';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={130} height={50} src={MAV} alt="logo" />
          <div className="headerInfo">
            <img width={150} height={30} src={PHOTOGRAPHER} alt="logo" />
            <div className="instaLink">
              <img width={15} height={15} src={InstaLogo} alt="Instagram" />
              <a href="#" className="underLogoLink">
                mav_photographer_alex
              </a>
            </div>
          </div>
        </div>
        <div className="bookMe">
          <CustomButton text="BOOK ME" style="link" />
        </div>
      </header>

      <section className="aboutMe">
        <img className="avatar" width={200} height={200} src={AVATAR} alt="AVATAR" />
        <img className="camera" width={500} height={302} src={Camera} alt="Camera" />

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

      <section className="PhotoTools">
        <aside>My Photo Tools</aside>
        <div className="cardContainer">
          <div className="card1">
            <img width={40} height={40} src={Drone} alt="card" />
          </div>
          <div className="card2">
            <img width={60} height={40} src={Mark} alt="card" />
          </div>
          <div className="card3">
            <img width={40} height={40} src={CanonD} alt="card" />
          </div>
          <div className="card4">
            <img width={40} height={40} src={Lumix} alt="card" />
          </div>
          <div className="card5">
            <img width={40} height={40} src={Hero5} alt="card" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
