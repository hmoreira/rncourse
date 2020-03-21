import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');

    return <View>
        <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false}
            onChangeText={newText => setName(newText)} value={name} />  
        <Text>My name is {name}</Text>
        { name.length <= 5 ? 
            <Text>Nome deve ser maior que 5 caracteres</Text> : null
        }
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;