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
                  title="Instagram QR Code"
                />
              </a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="https://wa.me/+393519741841" target="_blank">
                <img
                  src="http://qrcoder.ru/code/?https%3A%2F%2Fwa.me%2F%2B393519741841&3&0"
                  width="123"
                  height="123"
                  border="0"
                  title="WhatsApp QR Code"
                />
              </a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="https://telegram.me/@mavphotographeralex" target="_blank">
                <img
                  src="http://qrcoder.ru/code/?https%3A%2F%2Ftelegram.me%2F%40mavphotographer&4&0"
                  width="123"
                  height="123"
                  border="0"
                  title="Telegram QR Code"
                />
              </a>
            </h4>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
