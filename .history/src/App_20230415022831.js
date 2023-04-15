import React from 'react';
import style from './App.module.css';
import { Header } from './pages/Header/Header';
import { PhotoTools } from './pages/Cards/PhotoTools';
import { AboutMe } from './pages/About/AboutMe';
import { Portfolio } from './pages/MyPorfolio/Portfolio';
import { Contacts } from './pages/Contacts/Contacts';
function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      {/* <AboutMe />
      <PhotoTools />
      <Portfolio />
      <Contacts /> */}
    </div>
  );
}

export default App;
