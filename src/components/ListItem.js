import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                <Text style={{flex: 1 }}>
                    {this.props.library.description}
                </Text>
                </CardSection>
            )
        }
    }

    render() {
        const { id, title } = this.props.library;
        return (
        <TouchableWithoutFeedback onPress={ () => { this.props.selectLibrary(id)} }>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle} >
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>)
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

// mapStateToProps is called whenever our state changes and it causes our
// component to re-render with our new mapped props
const mapStateToProps = (state, ownProps) => {
    // we use state.selectedLibararyId because that is the name we chose in
    // our combineReducers function in reducers/index.js
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded, }
}

// first argument of connect is always to map state to props. 
// second argument takes our actions and adds them as props to our ListItem component
// also, connect will bind our actions which are now props in ListItem to our reducers
// so that every reducer will get called every time one of the action functions gets called.
export default connect(mapStateToProps, actions)(ListItem);