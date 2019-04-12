//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';

import { NTRUSTCOLOR, GREEN, BLUE, DARKBLUE, BLACK, WHITE, DISABLE } from '../hepler/Constant'

// create a component
class WebViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: true
        }
    }
    render() {
        const { spinner } = this.state
        const item = this.props.navigation.getParam('item', 'data')
        console.warn('dataaa------', item)
        return (
            <View style={styles.container}>
                <View style={{ flex: .5, backgroundColor: '#eee', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}
                    ><Text style={{ fontWeight: 'bold', color: 'grey' }}>CLOSE</Text>

                    </TouchableOpacity>
                </View>
                <View style={{ flex: 7, backgroundColor: 'red', width: '100%' }}>
                    <WebView
                        source={{ uri: item.toString() }}
                        onLoadStart={() => this.setState({ spinner: true })}
                        onLoadEnd={() => this.setState({ spinner: false })}
                    />
                </View>
                <Spinner
                    visible={spinner}
                    textStyle={{ color: WHITE }}
                    customIndicator={<UIActivityIndicator color={GREEN} />}
                />
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default WebViewComponent;
