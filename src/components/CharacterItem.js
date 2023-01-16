import { Link } from "react-router-dom";
import alien from "../images/alien.png";
import human from "../images/human.png";
const CharacterItem = (props) => {
  const returnSpecies = () => {
    if (props.character.species === "Alien") {
      return alien;
    } else {
      return human;
    }
  };
  return (
    <Link to={`character/${props.character.id}`}>
      <li>
        <article className="list__article">
          <img
            className="list__img"
            src={props.character.image}
            alt={props.character.name}
          />
          <h2 className="list__name">{props.character.name}</h2>
          <img
            className="list__icon"
            src={`${returnSpecies()}`}
            alt={props.character.species}
          />
        </article>
      </li>
    </Link>
  );
};
export default CharacterItem;
