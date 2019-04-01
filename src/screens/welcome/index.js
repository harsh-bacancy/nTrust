//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';
// import { LoginManager } from "react-native-fbsdk";
import { LoginButton, AccessToken } from 'react-native-fbsdk';



import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'
import { BACKGROUNDCOLOR, NTRUSTCOLOR, BLUE, GREEN, WHITE } from '../../hepler/Constant'



// create a component
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false
        }
    }
    componentDidMount() {
        <Spinner
            visible={this.state.spinner}
            textStyle={{ color: '#FFF' }}
            customIndicator={<UIActivityIndicator color={GREEN} />}
        />
        this.setState({ spinner: false })
    }
    render() {
        return (
            <LinearGradient colors={BACKGROUNDCOLOR} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[{ flex: 1 }, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <View style={{ padding: 20, alignItems: 'center' }}>
                    <Image
                        source={require('./../../assets/images/nTrust_logo_header.png')}
                        style={{ height: wp('35%'), width: wp('35%') }}
                    />
                    <Text style={styles.nTrusttext}>nTrust</Text>
                </View>
                <Swiper style={styles.wrapper} loop={false} dotColor={BLUE} activeDotColor={GREEN}  >
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
                        colors={NTRUSTCOLOR}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TabNavigator')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('7%'), width: wp('70%') }}>
                                <Image
                                    source={require('./../../assets/images/icon_facebook.png')}
                                    style={{ height: 30, width: 30, paddingHorizontal: 5 }}
                                />
                                <Text style={{ fontSize: wp('4%'), paddingHorizontal: 10, color: WHITE }}>SIGN IN WITH FACEBOOK</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LoginButton
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            console.log(data.accessToken.toString())
                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={() => console.log("logout.")} />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('TabNavigator')}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('7%'), width: wp('70%') }}
                    >
                        <Text style={{ fontSize: 11, paddingHorizontal: 10, textDecorationLine: 'underline', color: WHITE }}>SKIP FOR LATER</Text>
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
        color: WHITE,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -15
    }
});

//make this component available to the app
export default Welcome;
