import mainCamera from './assets/img/mainCamera.png';
export const Contacts = () => {
  return (
    <section className="Portfolio">
      <h1 className="captionPortfolio">My Portfolio</h1>
      <div className="slider">
        <div className="mainCamera">
          <img className="cameraSlider" width={800} height={1100} src={mainCamera} />
        </div>
      </div>
    </section>
  );
};
