//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
import {UIActivityIndicator} from 'react-native-indicators';


import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'
// create a component
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false
        }
    }
    OnSkip() {
        // setInterval(() => {
        //     this.setState({
        //         spinner: !this.state.spinner
        //     });
        // }, 5000);
        this.setState({
            spinner: !this.state.spinner
        });
    }
    render() {
        const Colors = ['#164349', '#17464D', '#184A51', '#1A4E55', '#1A4E55', '#1B5259', '#1D565D', '#1E5961', '#1F5D65', '#216169', '#22656D', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#246972', '#22656D', '#216169', '#1F5D65', '#1E5961', '#1D565D', '#1B5259', '#1A4E55', '#1A4E55', '#184A51', '#17464D', '#164349']
        const ButtonColor = ['#00E98A', '#00DE95', '#00DA98', '#00D39E', '#00C9A7', '#00C6AA', '#00DE95', '#00C7AA', '#00BCB4', '#00B0BF', '#00A5C9', '#0099D4', '#008EDE', '#0083E9']
        return (
            <LinearGradient colors={Colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
                <Spinner
                    visible={this.state.spinner}                    
                    textStyle={{color:'#FFF'}}
                    customIndicator={<UIActivityIndicator color='#00DE95'/>}
                />
                <View style={{ padding: 20, alignItems: 'center' }}>
                    <Image
                        source={require('./../../assets/images/nTrust_logo_header.png')}
                        style={{ height: 100, width: 100 }}
                    />
                    <Text style={styles.nTrusttext}>nTrust</Text>
                </View>
                <Swiper style={styles.wrapper} loop={false} dotColor='#0089E7' activeDotColor='#00FF8E'  >
                    <View style={styles.slide}>
                        <SlideOne />
                    </View>
                    <View style={styles.slide}>
                        <SlideTwo />
                    </View>
                    <View style={styles.slide}>
                        <SlideThree />
                    </View>
                </Swiper>
                <View style={styles.login}>
                    <LinearGradient
                        colors={ButtonColor}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                    >
                        <TouchableOpacity
                            onPress={() => this.OnSkip()}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('7%'), width: wp('70%') }}>
                                <Image
                                    source={require('./../../assets/images/icon_facebook.png')}
                                    style={{ height: 30, width: 30, paddingHorizontal: 5 }}
                                />
                                <Text style={{ fontSize: 15, paddingHorizontal: 10, color: '#FFF' }}>SIGN IN WITH FACEBOOK</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('7%'), width: wp('70%') }}
                    >
                        <Text style={{ fontSize: 11, paddingHorizontal: 10, textDecorationLine: 'underline', color: '#FFF' }}>SKIP FOR LATER</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        height: hp('20%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -15
    },
    nTrusttext: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -15
    }
});

//make this component available to the app
export default Welcome;
