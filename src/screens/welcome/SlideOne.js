//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { styles } from './styles'

// create a component
class SlideOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('./../../assets/images/introscreen_cartone.png')}
                        style={styles.InfoImage}
                    />
                </View>
                <View style={styles.InfoView}>
                    <Text style={styles.InfoText}>Borrow an item for few hours or even few days!</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={styles.InfoDetails}>
                            <Image
                                source={require('./../../assets/images/rating_on.png')}
                                style={{ height: wp('6%'), width: wp('6%'), margin: 6 }}
                            />
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Local</Text>
                        </View>
                        <View style={styles.InfoDetails}>
                            <Image
                                source={require('./../../assets/images/rating_on.png')}
                                style={{ height: wp('6%'), width: wp('6%'), margin: 6 }}
                            />
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Verified</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles


//make this component available to the app
export default SlideOne;
