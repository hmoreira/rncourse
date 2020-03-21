import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    const amount = action.multiplier * COLOR_INCREMENT;
    
    switch (action.colorToChange) {
        case 'red':
            return (state.red + amount > 255 || state.red + amount < 0) ? state :
                {...state, red: state.red + amount};
        case 'blue':
            return (state.blue + amount > 255 || state.blue + amount < 0) ? state :
                {...state, blue: state.blue + amount};
        case 'green':
            return (state.green + amount > 255 || state.green + amount < 0) ? state :
                {...state, green: state.green + amount};
        default:
            return state;
    }

};

const SquareScreen = () => {    

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    //console.log(red);

    return (
        <View>
            <ColorCounter onIncrease={() => 
                dispatch({colorToChange: 'red', multiplier: 1})}
                onDecrease={() => dispatch({colorToChange: 'red', multiplier: -1})} 
                color="Red" />
            <ColorCounter onIncrease={() => 
                dispatch({colorToChange: 'blue', multiplier: 1})}
                onDecrease={() => dispatch({colorToChange: 'blue', multiplier: -1})} 
                color="Blue" />
            <ColorCounter onIncrease={() => 
                dispatch({colorToChange: 'green', multiplier: 1})}
                onDecrease={() => dispatch({colorToChange: 'green', multiplier: -1})} 
                color="Green" />
            <View style={{ height: 150, width: 150, 
                backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;