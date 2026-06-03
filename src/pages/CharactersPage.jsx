import CharacterCard from '../components/CharacterCard';

const characters = [
  { name: 'ПУНПУН', role: 'птица', desc: 'наблюдает. молчит. мечтает улететь.' },
  { name: 'АЙДЗУ', role: 'девочка', desc: 'доброе сердце. любит тишину.' },
  { name: 'СЭКИ', role: 'мечтатель', desc: 'иллюзии реальнее жизни.' },
  { name: 'МИЯКО', role: 'странница', desc: 'свободная. ищет. надеется.' }
];

function CharactersPage() {
  return (
    <div className="section">
      <div className="section__corner section__corner--tl"></div>
      <div className="section__corner section__corner--tr"></div>
      <div className="section__corner section__corner--bl"></div>
      <div className="section__corner section__corner--br"></div>
      <h2 className="section__title">✦ персонажи ✦</h2>
      <div className="grid-3col">
        {characters.map((c, i) => (
          <CharacterCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
}

export default CharactersPage;