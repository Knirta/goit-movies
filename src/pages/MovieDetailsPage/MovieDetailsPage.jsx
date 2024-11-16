import { useState, useEffect, useRef } from "react";
import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import Container from "../../components/Container";
import { MdKeyboardBackspace } from "react-icons/md";
import movies_API from "../../sevices/movies-api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovie = async () => {
      const movie = await movies_API.fetchMovieById(movieId);
      setMovie(movie);
    };
    getMovie();
  }, [movieId]);

  return (
    <Container>
      <section>
        <Link to={backLinkHref.current} className={s.link}>
          <MdKeyboardBackspace /> Go back
        </Link>
        {movie && (
          <div className={s.wrap}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg`}
              width="400"
              alt={movie.title}
            />
            <div className={s.info}>
              <h1 className={s.title}>{movie.title}</h1>
              <p>Popularity: {movie.popularity}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(({ name }) => name).join(", ")}</p>
            </div>
          </div>
        )}
      </section>
      <section>
        <h2>Additional information</h2>
        <div className={s.tabs}>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </div>
        <Outlet />
      </section>
    </Container>
  );
};

export default MovieDetailsPage;
