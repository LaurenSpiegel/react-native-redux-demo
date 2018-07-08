import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    
    // set up state on startup
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => { r1 !== r2 }
        });

        // using this.props.libraries is the only particular thing
        // in this componentWillMount method. otherwise, boilerplate for
        // ListView to work. we have to pass it our data here.
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            < ListView 
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        );
    };
}

// due to the connect call below, this mapStateToProps function
// will cause our LibraryList component above to have the props
// returned from this function
const mapStateToProps = state => {
    console.log("state!", state)
    return { libraries: state.libraries };
}

// calling connect returns another function which then gets called with our LibraryList
export default connect(mapStateToProps)(LibraryList);