import { Header } from './pages/Header/Header';
import { PhotoTools } from './pages/Cards/PhotoTools';
import { AboutMe } from './pages/About/AboutMe';
import { Portfolio } from './pages/MyPorfolio/Portfolio';
import { Contacts } from './pages/Contacts/Contacts';
function App() {
  return (
    <div className="wrapper">
      <Header collapseOnSelect expand="lg" />
      {/* <AboutMe />
      <PhotoTools />
      <Portfolio />
      <Contacts /> */}
    </div>
  );
}

export default App;
