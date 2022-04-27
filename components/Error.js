import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropsTypes from 'prop-types';

const propTypes = {
    errorText1: PropsTypes.string,
    errorText2: PropsTypes.array,
}

const defaultProps = {
    errorText1: 'Some thing wrong',
    errorText2: 'make shure online !'
}

class Error extends React.PureComponent {
    
    render() {
        const {errorText1, errorText2} = this.props;
        return (
            <View style={styles.container}>
                <Text  style={styles.text}>{errorText1}</Text>
                <Text  style={styles.text}>{errorText2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold'
    }
})

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;
export default Error;