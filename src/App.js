import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
        {/* setting style of flex 1 will cause the 
        view to take up the full screen rather than
        cutting off when scroll down */}
            <View style={{ flex: 1 }}>
            <Header headerText='Tech Stack' />
            <LibraryList />
           </View>
        </Provider>
    )
}

export default App;