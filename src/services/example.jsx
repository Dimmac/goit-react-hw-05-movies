import axios from 'axios';
const API_KEY = 'd16c53a3a4d5eb154f379745597d6181';
const baseURL = 'https://api.themoviedb.org';

export default class ApiService {
  constructor() {
    this.page = 1;
  }
  async fetchTrendingMovies() {
    const response = await axios.get(
      `${baseURL}/3/trending/movie/day?api_key=${API_KEY}&page=${this.page}`
    );
    // /trending/get-trending
    // console.log(response.data);
    return response.data;
  }

  async fetchMovieForQuery(searchValue) {
    const response = await axios.get(
      `${baseURL}/3/search/movie?api_key=${API_KEY}&page=${this.page}&query=${searchValue}&language=en-US&include_adult=false`
    );
    // /search/search-movies
    // console.log(response.data);
    return response.data;
  }

  async fetchMovieDetails(movieId) {
    const response = await axios.get(
      `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    // /movies/get-movie-details
    return response.data;
  }

  async fetchMovieActors(movieId) {
    const response = await axios.get(
      `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    // /movies/get-movie-credits
    // console.log(response.data);
    return response.data;
  }

  async fetchMovieReviews(movieId) {
    const response = await axios.get(
      `${baseURL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${this.page}`
    );
    // /movies/get-movie-reviews
    // console.log(response.data);
    return response.data;
  }

  pageAdd() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchValue;
  }

  set query(newValue) {
    this.searchValue = newValue;
  }
}
