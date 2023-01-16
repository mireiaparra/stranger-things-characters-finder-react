import { Link } from "react-router-dom";
import female from "../images/female.png";
import male from "../images/male.png";
const CharacterItem = (props) => {
  const returnGender = () => {
    if (props.character.gender === "Female") {
      return female;
    } else {
      return male;
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
            src={`${returnGender()}`}
            alt={props.character.gender}
          />
        </article>
      </li>
    </Link>
  );
};
export default CharacterItem;
