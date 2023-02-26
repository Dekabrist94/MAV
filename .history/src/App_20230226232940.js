import Logo from './assets/img/logo.png';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={320} height={50} src={Logo} alt="logo" />
          <div className="headerInfo">
            <svg />
            <p>mav_photographer_alex</p>
          </div>
        </div>
        <div id="container">
          <button className={`${button} ${buttonBtn}`} type={type}>
            <span>{text}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </header>
      <div className="aboutMe">
        <img src="" />
        <h1>Обо Мне:</h1>
      </div>
    </div>
  );
}

export default App;
