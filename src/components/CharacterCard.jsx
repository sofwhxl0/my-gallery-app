import './CharacterCard.css';

function CharacterCard({ name, role, desc }) {
  return (
    <div className="char-card">
      <div className="char-card__header">
        <span className="char-card__name">{name}</span>
        <span className="char-card__role">[{role}]</span>
      </div>
      <div className="char-card__line"></div>
      <p className="char-card__desc">{desc}</p>
    </div>
  );
}

export default CharacterCard;