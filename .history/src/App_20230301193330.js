import Camera from './assets/img/camera.png';
import Lens from './assets/img/lens.png';
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
              <p>mav_photographer_alex</p>
            </div>
          </div>
        </div>
        <div className="bookMe">
          <CustomButton text="BOOK ME" style="link" />
        </div>
        <div className="lensImg">
          <img className="lens" width={200} height={180} src={Lens} alt="Lens" />
        </div>
      </header>
      <section className="aboutMe">
        <img className="avatar" width={200} height={200} src={AVATAR} alt="AVATAR" />
        <img className="camera" width={500} height={302} src={Camera} alt="Camera" />

        <div>
          <h1 className="textAboutCenter">Обо Мне:</h1>
          <h4 className="textAbout">
            Welcome to MAV photographer Alex website! I am Professional photographer, videographer,
            also i do video and photo by Drone. All my <a href="#">Photo Tools</a> you can find on
            my site. my expiriens is 5 yers with hard job and still study any new fitches. If you
            want to see my <a href="#">Portfolio</a>, you can do it in two things: On{' '}
            <a href="#">Instagram</a> or scroll a bit down to site and you will find all my best
            jobs. Kind regards!!!
          </h4>
        </div>
      </section>

      <section className="tools">SLIDER</section>
    </div>
  );
}

export default App;
