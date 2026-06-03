import { useState, useEffect } from 'react';
import './MangaQuote.css';

const quotes = [
  { text: 'звёзды такие далёкие. но они всё равно светят.', source: '— пунпун' },
  { text: 'иногда молчание говорит громче слов.', source: '— айдзу' },
  { text: 'этот мир — просто чья-то иллюзия.', source: '— сэки' },
  { text: 'я ищу место, где можно остаться.', source: '— мияко' }
];

function MangaQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote">
      <div className="quote__mark">〝</div>
      <p className="quote__text">{quote.text}</p>
      <p className="quote__source">{quote.source}</p>
      <div className="quote__mark quote__mark--right">〞</div>
    </div>
  );
}

export default MangaQuote;