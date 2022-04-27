import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Cards from './Cards';
import PropsTypes from 'prop-types';

const propTypes = {
  title: PropsTypes.string,
  content: PropsTypes.array,
};
class List extends React.PureComponent {
  render() {
    const {title, content} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View> 
         <FlatList 
          data={content}
          horizontal={true}
          renderItem={({item}) => <Cards item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  list: {
    marginTop: 1,
  },
});

List.propTypes = propTypes;

export default List;