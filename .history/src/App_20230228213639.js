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
      </header>
      <div className="aboutMe">
        <h1>Обо Мне:</h1>
        <div>
          <img className="avatar" width={200} height={200} src={AVATAR} alt="AVATAR" />
        </div>
        <div>
          <h4 className="textAbout">
            dsadklasjdkljasldjsakdjlk dasdljaksjdlasjd dsdjka dskajdasdjkas{' '}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
