import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';
import {getUpcomingMovies, getPopularMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [error, setError] = useState(false);

  // use effect for runtime once
  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });  

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies)
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <React.Fragment>
    <View style={styles.stliderContainer}>
      <SliderBox
        images={moviesImages}
        dotStyle={styles.sliderStyle}
        sliderBoxHeight={dimensions.height / 1.5}
        autoplay={true}
        circleLoop={true}
      />
    </View>
    <View style={styles.carousel}>
      <FlatList 
        data={popularMovies} 
        horizontal = {true}
        renderItem={({item}) => <Text>{item.title}</Text>}>  
        </FlatList>
    </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  stliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height:0
  },
  carousel:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Home;
