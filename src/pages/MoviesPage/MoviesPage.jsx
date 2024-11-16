import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import MoviesList from "../../components/MoviesList";
import moviesAPI from "../../sevices/movies-api.js";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title") ?? "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (title === "") return;
    const getMoviesByTitle = async (title) => {
      const movies = await moviesAPI.fetchMoviesByTitle(title);
      setMovies(movies);
    };
    getMoviesByTitle(title);
  }, [title]);

  return (
    <Container>
      <section>
        <SearchBar onSubmit={setSearchParams} />
      </section>
      <section>{movies.length > 0 && <MoviesList movies={movies} />}</section>
    </Container>
  );
};

export default MoviesPage;
