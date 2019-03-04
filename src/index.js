//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
// import { createAppContainer } from 'react-navigation'

import WelcomeNavigator from './navigation/router/WelcomeNavigator'


// create a component
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WelcomeNavigator />
            </View>
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
