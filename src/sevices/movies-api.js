import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGJlNWY4Y2UzZTExZjkwMjBjNmI1ZDE0M2ZlMzc4ZSIsIm5iZiI6MTczMTQwMzA1NC4yNjMwMDIyLCJzdWIiOiI2NzMyNjUxMzU3NWQwNjlkMzlmYzZiM2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6Y1FuKg672DRYw95zWOoHb4hRPUNj-vtYOVVCoYK5IY";
axios.defaults.headers.common["Accept"] = "application/json";

const fetchTrendingMovies = async () => {
  let { data: { results } = [] } = await axios({ url: "/trending/movie/day" });
  return results;
};

const fetchMovieById = async (movieId) => {
  let { data } = await axios({ url: `/movie/${movieId}` });
  return data;
};

const fetchCastById = async (movieId) => {
  let { data: { cast } = [] } = await axios({
    url: `/movie/${movieId}/credits`,
  });
  return cast;
};

const fetchReviewsById = async (movieId) => {
  let { data: { results } = [] } = await axios({
    url: `/movie/${movieId}/reviews`,
  });
  return results;
};

const api = {
  fetchTrendingMovies,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
};

export default api;
