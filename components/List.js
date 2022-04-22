import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import Cards from './Cards';
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
        horizontal = {true}
        renderItem={({item}) => <Cards item={item} />}>  
        </FlatList>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    list: {
        marginTop: 1
    }
})

export default List;