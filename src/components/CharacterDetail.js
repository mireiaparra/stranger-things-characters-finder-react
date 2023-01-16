import { Link, useParams } from "react-router-dom";
import arrow from "../images/arrow.png";
import alien from "../images/alien.png";
import human from "../images/human.png";
import NotFound from "./NotFound";
import dead from "../images/dead.png";
import alive from "../images/alive.png";
import unknown from "../images/unknown.png";
const CharacterDetail = (props) => {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);

  if (characterFound === undefined) {
    return <NotFound />;
  } else {
    const returnSpecies = () => {
      if (characterFound.species === "Alien") {
        return alien;
      } else {
        return human;
      }
    };

    const returnStatus = () => {
      if (characterFound.status === "Dead") {
        return dead;
      } else if (characterFound.status === "Alive") {
        return alive;
      } else {
        return unknown;
      }
    };
    return (
      <section className="detail">
        <article className="detail__article">
          <img
            className="detail__img"
            src={characterFound.image}
            alt={characterFound.name}
          />
          <div className="detail__allText">
            <h2 className="detail__h2">{characterFound.name}</h2>
            <div className="detail__text">
              <p className="detail__p">Especie:</p>
              <img
                className="list__icon"
                src={`${returnSpecies()}`}
                alt={characterFound.species}
              />
            </div>
            <div className="detail__text">
              <p className="detail__p">Planeta: </p>
              <p>{characterFound.planet}</p>
            </div>
            <div className="detail__text">
              <p className="detail__p">Número de episodios: </p>
              <p className="detail__episodes">{characterFound.episodes}</p>
            </div>
            <div className="detail__text">
              <p className="detail__p"> Estatus: </p>
              <img
                className="list__icon"
                src={`${returnStatus()}`}
                alt={characterFound.status}
              />
            </div>
          </div>
          <Link to="/">
            <img className="detail__arrow" src={arrow} alt="arrow back" />
          </Link>
        </article>
      </section>
    );
  }
};
export default CharacterDetail;
