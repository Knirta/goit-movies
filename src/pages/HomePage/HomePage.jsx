import { useState, useEffect } from "react";
import Container from "../../components/Container";
import MoviesList from "../../components/MoviesList";
import movies_API from "../../sevices/movies-api";

const HomePage = () => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    let getTrendingMovies = async () => {
      let trendingMovies = await movies_API.fetchTrendingMovies();
      setMovies(trendingMovies);
    };
    getTrendingMovies();
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
};

export default HomePage;
