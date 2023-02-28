import MAV from './assets/img/MAV.png';
import InstaLogo from './assets/img/instagram.png';
import { CustomButton } from './components/button UI';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src={MAV} alt="logo" />
          <div className="headerInfo">
            <img width={21} height={21} src={InstaLogo} alt="Instagram" />
            <p>mav_photographer_alex</p>
          </div>
        </div>
        <section className="headerRight">
          <CustomButton text="BOOK ME" style="link" />
        </section>
      </header>
      <div className="aboutMe">
        <img src="" />
        <h1>Обо Мне:</h1>
      </div>
    </div>
  );
}

export default App;
