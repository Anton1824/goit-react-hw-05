import axios from "axios";

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDgzMjQ3YzYxYjE5OTFkNzk4ZTg5ZWNhNGY4ODJhMyIsInN1YiI6IjY2MTZkY2NkMjljNjI2MDEzMGExZTE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wHci4g4AqvwI0cTD0GayxCLTHkPkGoeRw8HvzG68btQ";


axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export const fetchTrendMovies = async () => {
  const { data } = await axios.get("3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return data.results;
};

export const fetchMoviesById = async (id) => {
  const { data } = await axios.get(`3/movie/${id}`);
  return data;
};

export const fetchCreditsById = async (id) => {
  const { data } = await axios.get(`3/movie/${id}/credits`);
  return data;
};

export const fetchReviewsById = async (id) => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get("3/search/movie", {
    params: {
      query,
    },
  });
  return data.results;
};
