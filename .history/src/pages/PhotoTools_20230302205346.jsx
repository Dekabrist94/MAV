export const PhotoTools = () => {
  return (
    <section className="PhotoTools">
      <aside>
        <h1 className="CaptionTools">My Photo Tools</h1>
      </aside>
      <div className="cardContainer">
        <div className="card cardBorder">
          <img className="cardStyle" width={140} height={120} src={Drone} alt="card" />
          <p className="cardStyle">
            <h3>DJI Mavic Air</h3>
          </p>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={140} height={120} src={Mark} alt="card" />
          <p className="cardStyle">
            <h3>Canon 5D Mark II</h3>
          </p>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={160} height={120} src={CanonD} alt="card" />
          <p className="cardStyle">
            <h3>Canon EOS 1000D</h3>
          </p>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={160} height={120} src={Lumix} alt="card" />
          <p className="cardStyle">
            <h3>Lumix g7</h3>
          </p>
        </div>
        <div className="card cardBorder">
          <img className="cardStyle" width={160} height={120} src={Hero5} alt="card" />
          <p className="cardStyle">
            <h3>GoPro Hero 5</h3>
          </p>
        </div>
      </div>
    </section>
  );
};
