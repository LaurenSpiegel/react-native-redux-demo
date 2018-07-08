import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    return (
        // Wrap anything you want to behave like a button in the TouchableOpacity
        <TouchableOpacity onPress={props.onPressProp} style={buttonStyle} >
            <Text style={textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
