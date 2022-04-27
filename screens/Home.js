import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView, ActivityIndicator} from 'react-native';
import {getUpcomingMovies, getPopularMovies, getPopularTv, getFamilyMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List'; // pure componnet call without brackets
import Error from '../components/Error';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamiliyMovies] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies()
    ])
  }
  // use effect for runtime once
  useEffect(() => {

    getData()
      .then(
        ([upcomingMoviesData, popularMoviesData, popularTvData, familyMoviesData]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamiliyMovies(familyMoviesData);
        },
      )
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          {/* upcoming movie image moving slider */}
          {moviesImages && (
            <View style={styles.stliderContainer}>
              <SliderBox
                images={moviesImages}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>)}

          {/* popular moveies   */}
          {popularMovies && (
            <View style={styles.carousel}>
              <List title="Popular Movies" content={popularMovies} />
            </View>
          )}

          {/* popular tv shows   */}
          {popularTv && (
            <View style={styles.carousel}>
              <List title="Popular TV Shows" content={popularTv} />
            </View>
          )}
     
          {/* family movies   */}
          {familyMovies && (
            <View style={styles.carousel}>
              <List title="Family Movies" content={familyMovies} />
            </View>
          )}
        </ScrollView>
    )}
      {!loaded && <ActivityIndicator size={'large'} />}
      {error && <Error />}
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
