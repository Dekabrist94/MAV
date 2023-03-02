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
import { Header } from './pages/Header';
import { PhotoTools } from './pages/PhotoTools';
import { AboutMe } from './pages/AboutMe';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AboutMe />
      <PhotoTools />

      <section className="Portfolio"></section>
    </div>
  );
}

export default App;
