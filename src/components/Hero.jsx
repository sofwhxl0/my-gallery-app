import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__corner hero__corner--tl"></div>
        <div className="hero__corner hero__corner--tr"></div>
        <div className="hero__corner hero__corner--bl"></div>
        <div className="hero__corner hero__corner--br"></div>

        <img 
          src="https://avatars.mds.yandex.net/i?id=1bc3f2fea9068cd1330ddaf36aca0e32_l-4840969-images-thumbs&n=13" 
          alt="Punpun art" 
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '1rem',
            border: '2px solid #555'
          }}
        />

        <h1 className="hero__title">
          <span>спокойной ночи,</span>
          <span className="hero__title-accent">пунпун</span>
        </h1>
        <p className="hero__subtitle">
          дневник тихих мыслей<br />
          <span className="hero__subtitle-small">— место для честных слов —</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;