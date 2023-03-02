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
