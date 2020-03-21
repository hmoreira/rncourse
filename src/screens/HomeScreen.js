import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return <View>    
    <Button onPress={() => navigation.navigate('Components')}
      title="Components Demo" />
    <Button title="List Demo"
      onPress={() => navigation.navigate('List')} />
    <Button title="Image Screen"
      onPress={() => navigation.navigate('Image')} />
    <Button title="Counter Screen"
      onPress={() => navigation.navigate('Counter')} />
    <Button title="Color Screen"
      onPress={() => navigation.navigate('Color')} />
    <Button title="Square Screen"
      onPress={() => navigation.navigate('Square')} />
    <Button title="Text Screen"
      onPress={() => navigation.navigate('Text')} />
    <Button title="Box Screen"
      onPress={() => navigation.navigate('Box')} />
    
  </View>

};

const styles = StyleSheet.create({
  ViewStyle: {
    fontSize: 30,
    justifyContent: 'center'
  }
});

export default HomeScreen;
