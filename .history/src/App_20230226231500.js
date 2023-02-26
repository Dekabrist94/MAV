import Logo from './assets/img/logo.png';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={240} height={40} src={Logo} alt="logo" />
          <div className="headerInfo">
            <svg />
            <p>mav_photographer_alex</p>
          </div>
        </div>
        <section className="headerRight">
          <btn />
        </section>
      </header>
      <div className="aboutMe">
        <img src="" />
        <h1>Обо Мне:</h1>
      </div>
    </div>
  );
}

export default App;
