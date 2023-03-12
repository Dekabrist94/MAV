import { Header } from './pages/Header';
import { PhotoTools } from './pages/PhotoTools';
import { AboutMe } from './pages/AboutMe';
import { Portfolio } from './pages/Portfolio';
import { Contacts } from './pages/Contacts';
import {UniversalContainer} from './MyContainer/UniversalContainer'
function App() {
  return (
    <div className="MyContainer">
      <UniversalContainer/>
      <div/>
{/*     
     <div className="wrapper">
    
       <Header />
       <AboutMe />
       <PhotoTools />
       <Portfolio />
       <Contacts />
     </div> */}
  );
}

export default App;
