import React from 'react';
import { View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.text1Style}></View>
        <View style={styles.text2Style}></View>
        <View style={styles.text3Style}></View>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 100
    },
    text1Style: {
        borderWidth: 1,
        backgroundColor: 'pink',        
        height: 50,
        width: 100        
    },
    text2Style: {
        borderWidth: 1,
        backgroundColor: 'lightgreen',        
        height: 50,
        width: 100,        
        alignSelf: 'flex-end'        
    },
    text3Style: {
        borderWidth: 1,
        backgroundColor: 'mediumpurple',
        height: 50,
        width: 100,
        alignSelf: 'flex-start'        
    }
});

export default BoxScreen;