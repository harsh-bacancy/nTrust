//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'

import { nTrustColor } from '../../hepler/Constant'
// create a component
class TentDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                onPress={()=> this.props.navigation.goBack()}
                    style={{ position: 'absolute', marginTop: 15, marginLeft: 15, alignSelf: 'flex-start' }}
                >
                    <Image
                        source={require('../../assets/images/arrow_dark.png')}
                        style={{ height: 30, width: 30, }}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Image
                        source={require('../../assets/images/camera.png')}
                        style={{ height: 125, width: 125 }}
                    />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#164349', fontWeight: 'bold' }}>Tent</Text>
                    <Text style={{ fontSize: 17, color: '#00DE95', fontWeight: 'bold' }}>Current Price you''ll pay: $14/Day</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, color: '#164349', fontWeight: 'bold' }}>Deposit: $10</Text>
                        <Image
                            source={require('../../assets/images/icon_question_mark.png')}
                            style={{ height: 15, width: 15, margin: 8 }}
                        />
                    </View>
                </View>
                <View style={{ borderWidth: 2, borderColor: '#164349', width: wp('90%'), margin: 10, }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darkloc.png')}
                            style={{ height: 35, width: 35, margin: 5 }}
                        />
                        <Text>Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 2, borderColor: '#164349', width: wp('90%'), margin: 10 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darkcalendar.png')}
                            style={{ height: 35, width: 35, margin: 5 }}
                        />
                        <Text>Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 2, borderColor: '#164349', width: wp('90%'), margin: 10 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darktime.png')}
                            style={{ height: 35, width: 35, margin: 5 }}
                        />
                        <Text>Location</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 12, marginVertical: 20 }}>You will not charged until you select a lender</Text>
                <View style={{bottom:0,position:'absolute'}}>
                    <LinearGradient
                        colors={nTrustColor}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                        style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'center', height: hp('10%') }}
                    >
                        <TouchableOpacity>
                            <Text style={{ color: '#FFF', fontSize: 25 ,fontWeight:'bold'}}>SEE MATCHES</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TentDetails;
