import { Header } from './pages/Header';
import { PhotoTools } from './pages/PhotoTools';
import { AboutMe } from './pages/AboutMe';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AboutMe />
      <PhotoTools />

      <section className="Portfolio">
        <h1 className="captionPortfolio">My Portfolio</h1>
      </section>
    </div>
  );
}

export default App;
