import PropTypes from "prop-types";
import { FaRegThumbsUp } from "react-icons/fa6";
import s from "./MoviesListItem.module.css";

const MoviesListItem = ({ movie }) => {
  let { title, poster_path, vote_average } = movie;
  return (
    <figure className={s.item}>
      <img
        className={s.img}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}.jpg`}
        alt={title}
      />
      <figcaption className={s.caption}>
        {<FaRegThumbsUp />}
        <span className={s.vote}>{vote_average}</span>
      </figcaption>
    </figure>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object,
};

export default MoviesListItem;
