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

const api = { fetchTrendingMovies, fetchMovieById };

export default api;
