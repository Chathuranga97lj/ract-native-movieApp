import React, {useState} from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => { 
  const resp = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=17713b08f0f0a87d14e6f8836fc0798b");
  return resp.data.results;
};

const App = () => {

  const [movie, setMovie] = useState('');

  getPopularMovies().then(movies => {
    setMovie(movies[0]);
  });


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Movie Name: {movie.original_title}</Text>
      <Text>Movie Langulage: {movie.original_language}</Text>
      <Text>Release Date: {movie.release_date}</Text>
    </View>
  )
}
export default App;