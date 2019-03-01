//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



// create a component
class SlideOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
                    <Image
                        source={require('./../../assets/images/nTrust_logo_header.png')}
                        style={{ height: 100, width: 100 }}
                    />
                    <Text style={styles.nTrusttext}>nTrust</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('./../../assets/images/introscreen_cartone.png')}
                        style={{ height: 125, width: 125 }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', width: wp('50%'), alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 15 }}>Borrow an item for few hours or even few days!</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image
                                source={require('./../../assets/images/rating_on.png')}
                                style={{ height: 25, width: 25, margin: 6 }}
                            />
                            <Text style={{ color: '#FFF' }}>Local</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image
                                source={require('./../../assets/images/rating_on.png')}
                                style={{ height: 25, width: 25, margin: 6 }}
                            />
                            <Text style={{ color: '#FFF' }}>Verified</Text>
                        </View>
                    </View>
                </View>
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
        // backgroundColor: '#2c3e50',
    },
    nTrusttext: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -15
    }
});

//make this component available to the app
export default SlideOne;
