import { Header } from './pages/Header';
import { PhotoTools } from './pages/PhotoTools';
import { AboutMe } from './pages/AboutMe';
import mainCamera from './assets/img/mainCamera.png';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <AboutMe />
      <PhotoTools />

      <section className="Portfolio">
        <h1 className="captionPortfolio">My Portfolio</h1>
        <div className="slider">
          <div className="mainCamera">
            <img className="cameraSlider" width={1060} height={1800} src={mainCamera} />
          </div>
        </div>
      </section>

      <section className="contContainer">
        <div className="contacts"></div>
        <h1 className="contCaption">Contacts</h1>
        <ul>
          <li>
            <h4>WhatsApp</h4>
          </li>
          <li>
            <h4>Instagram</h4>
          </li>
          <li>
            <h4>Tel:</h4>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
