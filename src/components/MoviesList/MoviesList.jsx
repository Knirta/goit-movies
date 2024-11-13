import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MoviesListItem from "../MoviesListItem";
import s from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link to={`/movies/${movie.id}`}>
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
