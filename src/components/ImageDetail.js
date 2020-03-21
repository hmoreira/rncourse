import React from 'react';
import { Text, StyleSheet, Image, View} from 'react-native';

const ImageDetail = (props) => {
    return <View>
        <Image source={props.source} />
        <Text>{props.title}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default ImageDetail;