import React from 'react';
import {View} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Home />
    </View>
  );
};

export default App;
