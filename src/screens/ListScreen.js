import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Heber', age: 10 },
        { name: 'Marcel', age: 20 },
        { name: 'Felipe', age: 30 },
        { name: 'Mateus', age: 40 }
    ];
    return (
        <FlatList
            showsVerticalScrollIndicator={true}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Idade: {item.age}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 20
    }
});

export default ListScreen;