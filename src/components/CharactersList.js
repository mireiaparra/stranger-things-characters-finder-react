import CharacterItem from "./CharacterItem";

const CharactersList = ({ characters, filterByName }) => {
  if (characters.length === 0) {
    return (
      <p className="list__notFound">{`No hay ningún personaje que coincida con la palabra "${filterByName}"`}</p>
    );
  }
  const characterElement = characters.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });
  return (
    <section>
      <ul className="list">{characterElement}</ul>
    </section>
  );
};

export default CharactersList;
