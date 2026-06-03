import './MoodTracker.css';

const moods = [
  { id: 'happy', label: 'свет', symbol: '◍ ◍' },
  { id: 'sad', label: 'грусть', symbol: '◍ ◡' },
  { id: 'melancholy', label: 'тишина', symbol: '• •' },
  { id: 'dark', label: 'темнота', symbol: '⬤ ⬤' },
  { id: 'neutral', label: 'нейтрально', symbol: '○ ○' }
];

function MoodTracker({ mood, setMood }) {
  return (
    <div className="mood-tracker">
      {moods.map(m => (
        <button
          key={m.id}
          className={`mood-btn ${mood === m.id ? 'active' : ''}`}
          onClick={() => setMood(m.id)}
        >
          <span className="mood-btn__symbol">{m.symbol}</span>
          <span className="mood-btn__label">[{m.label}]</span>
        </button>
      ))}
    </div>
  );
}

export default MoodTracker;