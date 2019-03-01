//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Welcome from './screens/welcome'

// create a component
class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Welcome/>
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
export default Index;
