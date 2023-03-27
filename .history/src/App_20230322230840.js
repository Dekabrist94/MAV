import { Header } from './pages/Header';
import { PhotoTools } from './pages/PhotoTools';
import { AboutMe } from './pages/AboutMe';
import { Portfolio } from './pages/Portfolio';
import { Contacts } from './pages/Contacts';
import style from './components/media/Media.module.css';
function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <AboutMe />
      <PhotoTools />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
