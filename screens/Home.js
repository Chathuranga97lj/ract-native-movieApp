import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {getUpcomingMovies, getPopularMovies, getPopularTv, getFamilyMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List'; // pure componnet call without brackets

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState('');
  const [familyMovies, setFamiliyMovies] = useState('');
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

      getPopularTv()
      .then(movies => {
        setPopularTv(movies)
      })
      .catch(err => {
        setError(err);
      });

      getFamilyMovies()
      .then(movies => {
        setFamiliyMovies(movies)
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
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
        <List title="Popular Movies" content={popularMovies} />
      </View>
      <View style={styles.carousel}>
        <List title="Popular TV Shows" content={popularTv} />
      </View>
      <View style={styles.carousel}>
        <List title="Family Movies" content={familyMovies} />
      </View>
      </ScrollView>  
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
