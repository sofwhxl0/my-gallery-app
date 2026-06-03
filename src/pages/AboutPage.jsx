function AboutPage() {
  return (
    <div className="section">
      <div className="section__corner section__corner--tl"></div>
      <div className="section__corner section__corner--tr"></div>
      <div className="section__corner section__corner--bl"></div>
      <div className="section__corner section__corner--br"></div>
      <h2 className="section__title">✦ о проекте ✦</h2>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <div className="quote">
          <div className="quote__mark">〝</div>
          <p className="quote__text" style={{ fontSize: '0.8rem' }}>
            «дневник тихих мыслей» — место для честных слов.
          </p>
          <div className="quote__mark quote__mark--right">〞</div>
        </div>

        <div className="footer__line" style={{ margin: '2rem auto' }}></div>

        <div className="char-card" style={{ textAlign: 'center' }}>
          <p className="char-card__desc" style={{ fontSize: '0.7rem' }}>
            <strong>возможности:</strong><br />
            • дневник с добавлением и удалением записей<br />
            • трекер настроения (птица меняет глаза)<br />
            • автоматическая смена цитат<br />
            • загрузка данных из внешнего API<br />
            • маршрутизация без перезагрузки
          </p>
          <div className="char-card__line" style={{ width: '50px', margin: '1rem auto' }}></div>
          <p className="char-card__desc" style={{ fontSize: '0.65rem', color: '#555' }}>
            технологии: React, Vite, React Router
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;