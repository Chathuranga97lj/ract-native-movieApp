import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=17713b08f0f0a87d14e6f8836fc0798b';

// Get popular Movies
export const getPopularMovies = async () => { 
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
};

// Get upcomming Movies
export const getUpcomingMovies = async () => { 
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};

// Get popular TV
export const getPopularTv = async () => { 
  const resp = await axios.get(`${apiUrl}/tv/upcoming?${apiKey}`);
  return resp.data.results;
};