import React, { useReducer } from 'react';
import { Button, View, Text } from 'react-native';

const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1 };
        case 'decrement':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }

};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;

    return <View>
        <Button title="Increase"
            onPress={() => dispatch({ type: 'increment' })} />
        <Button title="Decrease"
            onPress={() => dispatch({ type: 'decrement' })} />
        <Text>Counter: {counter}</Text>
    </View>
}

export default CounterScreen;