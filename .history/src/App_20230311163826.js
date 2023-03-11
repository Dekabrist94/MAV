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
            <img className="cameraSlider" width={800} height={1100} src={mainCamera} />
          </div>
        </div>
      </section>

      <section className="contContainer">
        <div className="contacts"></div>
        <h1 className="contCaption">Contacts</h1>
        <ul>
          <li>
            <h4>
              <a href="https://www.instagram.com/palazzagofotografo/" target="_blank">
                <img
                  src="http://qrcoder.ru/code/?https%3A%2F%2Fwww.instagram.com%2Fpalazzagofotografo%2F&3&0"
                  width="123"
                  height="123"
                  border="0"
                  title="QR код"
                />
              </a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="http://qrcoder.ru" target="_blank">
                <img
                  src="http://qrcoder.ru/code/?https%3A%2F%2Fwa.me%2F%2B393519741841&3&0"
                  width="111"
                  height="111"
                  border="0"
                  title="QR код"
                />
              </a>
            </h4>
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
