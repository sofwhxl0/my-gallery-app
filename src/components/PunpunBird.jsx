import './PunpunBird.css';

function PunpunBird({ mood }) {
  const moodEyes = {
    happy: { left: '◍', right: '◍' },
    sad: { left: '◍', right: '◡' },
    melancholy: { left: '•', right: '•' },
    dark: { left: '⬤', right: '⬤' },
    neutral: { left: '○', right: '○' }
  };

  const eyes = moodEyes[mood] || moodEyes.neutral;

  return (
    <div className="punpun">
      <div className="punpun__shadow"></div>
      <div className="punpun__body">
        <div className="punpun__face">
          <span className="punpun__eye">{eyes.left}</span>
          <span className="punpun__eye">{eyes.right}</span>
        </div>
        <div className="punpun__beak">▼</div>
      </div>
      <div className="punpun__legs">| |</div>
    </div>
  );
}

export default PunpunBird;