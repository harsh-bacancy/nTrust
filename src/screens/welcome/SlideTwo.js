//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



// create a component
class SlideTwo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('./../../assets/images/introscreen_walletone.png')}
                        style={{ height: 125, width: 125 }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', width: wp('50%'), alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 15 }}>Lend your items and make some bank.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            <Image
                                // source={require('./../../assets/images/rating_on.png')}
                                style={{ height: 25, width: 25, margin: 6 }}
                            />
                            {/* <Text style={{ color: '#FFF' }}>Local</Text> */}
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            {/* <Image
                                source={require('./../../assets/images/rating_on.png')}
                                style={{ height: 25, width: 25, margin: 6 }}
                            />
                            <Text style={{ color: '#FFF' }}>Verified</Text> */}
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
});

//make this component available to the app
export default SlideTwo;
