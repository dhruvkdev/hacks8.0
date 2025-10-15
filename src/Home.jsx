import './landing.css';
import sponsors from './assets/sponsors.json';
import runPikachu from './assets/images/run-pikachu.gif';
import bikingGirl from './assets/images/bikingGirl.gif'

const Home = () => {
  return (
    <>
      <div className="blueBg">
        <div className="clouds"></div>

        <div className="grass"></div>

        <div className="center-content">
          <h1 className="coming-soon-text">COMING SOON</h1>
          <img
            className="character-bike"
            src={bikingGirl}
            alt="Character on bike"
          />
          <img
            className="character-pikachu"
            src={runPikachu}
            alt="Pikachu"
          />
        </div>
      </div>



      <div className="grad-1"></div>
      <div className="grad-2"></div>
      <div className="grad-3"></div>
      <div className="grad-4"></div>
      <div className="grad-5"></div>

      <div className="footer">
        <section className="sponsor-section">
          <h2 className="sponsor-title" style={{ fontFamily: 'PokemonFont, Arial, sans-serif' }}>PREVIOUS SPONSORS</h2>
          <div className="carousel">
            <div className="carousel-track">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <a key={index} href={sponsor.uri} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.img} alt={sponsor.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
