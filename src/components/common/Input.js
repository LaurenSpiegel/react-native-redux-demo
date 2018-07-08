import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, isSecure }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={ labelStyle }>
                { label }
            </Text>
            <TextInput
            // we set our value to the state passed through from the parent
            // and we set our cb function to the cb function defined in the parent
                value={value}
                onChangeText={onChangeText}
                style={ inputStyle }
                autoCorrect={false}
                autoCapitalize={'none'}
                placeholder={placeholder}
                secureTextEntry={isSecure}
            />

        </View>
    )
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        // since input and label are siblings this will dictate that the input
        // takes up 2/3 of the space and the label with flex of 1 will
        // take of the remaining 1/3
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;