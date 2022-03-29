import axios from 'axios';
const key = '1acbf41d75d474f9881d4c6d1275cf32';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const trendingFetchMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${key}`);
  console.log(response.data);
  console.log(response.data.total_pages);
  console.log(response.data.total_results);
  return response.data;
};

export const trendingFetchMoviesById = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}?api_key=${key}&language=en-US&append_to_response=credits,reviews`
  );
  console.log(response.data);
  return response.data;
};

// export const imageMovie = async () => {
//   const response = await axios.get(`configuration?api_key=${key}`);
//   return response.data;
// };

export const searchFetchMovie = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${key}&language=en-US&include_adult=false&query=${query}`
  );
  console.log(response.data);
  return response.data;
};
