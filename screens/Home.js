import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from '../services/services';

const Home = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);
  
  // use effect for runtime once
  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0]);
      })
      .catch(err => {
        setError(err);
      });
  });

  return (
    <View>
      <Text>Movie Name: {movie.original_title}</Text>
      <Text>Movie Langulage: {movie.original_language}</Text>
      <Text>Release Date: {movie.release_date}</Text>
      {error && <Text style={{color: 'red'}}>Error in the server</Text>}
    </View>
);
};

export default Home;
