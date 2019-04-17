//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import SplashScreen from 'react-native-splash-screen'


import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'
import { BACKGROUNDCOLOR, NTRUSTCOLOR, BLUE, GREEN, WHITE } from '../../hepler/Constant'
import { styles } from './styles'
// import { LOGIN } from '../../api/index'


// create a component
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false
        }
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    _stoteAccessToken = async (authToken) => {
        try {
            await AsyncStorage.setItem('authToken', JSON.stringify(authToken));
            console.warn('successfuly saved')
            // userId = await AsyncStorage.getItem('authToken') || 'none';
            // console.warn('authTokenHere:', userId)
            this.setState({ spinner: false })
            this.props.navigation.navigate('TabNavigator')
        } catch (error) {
            console.error(error);
        }
    }
    // _standardLogin(data) {
    //     this.setState({ spinner: true })
    //     return fetch(LOGIN, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             access_token: data
    //         })
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             // const authToken = responseJson
    //             console.warn('Backend Token:', responseJson)
    //             this._stoteAccessToken(responseJson)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    _facebookLogin() {
        LoginManager.logOut();
        LoginManager.logInWithReadPermissions([
            "email",
            "public_profile",
        ]).then(result => {
            if (result.isCancelled) {
                console.log("Login canceled");
            } else {
                AccessToken.getCurrentAccessToken().then(data => {
                    const accessToken = data.accessToken;
                    console.warn('accessToken:::', accessToken)
                    this._stoteAccessToken(accessToken);
                    const responseInfoCallback = (error, info) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(info);
                        }
                    };
                    const infoRequest = new GraphRequest(
                        "/me",
                        { accessToken },
                        responseInfoCallback
                    );
                    new GraphRequestManager().addRequest(infoRequest).start();
                });
            }
        });

    }
    render() {
        return (
            <LinearGradient colors={BACKGROUNDCOLOR} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[{ flex: 1 }, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <Spinner
                    visible={this.state.spinner}
                    textStyle={{ color: WHITE }}
                    customIndicator={<UIActivityIndicator color={GREEN} />}
                />
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
                            onPress={() => this._facebookLogin()}
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


//make this component available to the app
export default Welcome;
