import React from 'react';
import { Text, View } from 'react-native';

// For functional component, just need to return some jsx
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
return (
    // when reference a js variable in jsx, wrap it in {}
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        fontFamily: 'helvetica-light'
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        // moves content vertically
        justifyContent: 'center',
        // moves content horizontally
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export default Header;
