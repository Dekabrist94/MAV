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
            <img width={600} src={mainCamera} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
