import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../../sevices/movies-api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getActors = async (movieId) => {
      const cast = await movieAPI.fetchCastById(movieId);
      setActors(cast);
    };
    getActors(movieId);
  }, [movieId]);

  return (
    actors.length > 0 && (
      <ul className={s.list}>
        {actors.map((actor) => {
          return (
            <li key={actor.id} className={s.item}>
              {actor.profile_path ? (
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}.jpg`}
                  alt={actor.name}
                />
              ) : (
                <span>photo not avaliable</span>
              )}
              <h2>{actor.name}</h2>
              <p>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default MovieCast;
