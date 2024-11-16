import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import MoviesListItem from "../MoviesListItem";
import s from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <MoviesListItem movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
