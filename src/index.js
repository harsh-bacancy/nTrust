//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
// import { createAppContainer } from 'react-navigation'

import store from './redux/store'
import ProductListNavigator from './navigation/router/ProductListNavigator'


// create a component
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <ProductListNavigator />
                </View>
            </Provider>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
//make this component available to the app
export default App;
