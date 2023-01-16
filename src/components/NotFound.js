import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="notFound">
      <article className="notFound__article">
        <h2 className="notFound__title">Página no encontrada</h2>
        <Link to="/">
          <img className="detail__arrow" src={arrow} alt="arrow back" />
        </Link>
      </article>
    </section>
  );
};
export default NotFound;
