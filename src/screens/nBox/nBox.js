//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Platform, AsyncStorage } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux'
import { LoginManager } from "react-native-fbsdk";



import { BLUE, GREEN, GREY } from '../../hepler/Constant'
import { styles } from './styles'
import User from '../../container/Chat/User'
import UserProfile from '../UserProfile'
import { setModalVisible } from '../../redux/actions'
import { LOGOUT } from '../../api/index'


// create a component
class NBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatSwtich: false,
            username: '',
            settingVisible: false,

        }
    }
    componentDidMount() {
        this.props.setModalVisible(false)
    }
    _StandardLogout = async () => {
        authorizationToken = await AsyncStorage.getItem('authToken') || 'none';
        authToken = JSON.parse(authorizationToken)
        console.warn('auth:', typeof authToken, '--', authToken.token)
        await LoginManager.logOut()
        await fetch(LOGOUT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authToken.token
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                // const authToken = responseJson
                console.warn('response of signout:', responseJson)
                //this._stoteAccessToken(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
        await this.props.navigation.navigate('Welcome')
    }
    _navigateToWeb = (item) => {
        // console.warn(item)
        this.props.setModalVisible(false)
        this.props.navigation.navigate('WebViewComponent', { item })
    }
    render() {
        const { chatSwtich, username, settingVisible } = this.state
        // console.warn('visible', this.props.setVisibility.text)
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <UserProfile
                    setModalVisible={settingVisible}
                    // onClose={() => this.setState({ settingVisible: false })}
                    onPress={() => this.props.setModalVisible(false)}
                    onSignout={() => this._StandardLogout()}
                    onhit={() => this._navigateToWeb('https://ntrustapp.com/how/')}
                    onau={() => this._navigateToWeb('https://ntrustapp.com/our-story/')}
                    oncu={() => this._navigateToWeb('https://ntrustapp.com/contact/')}
                    onpp={() => this._navigateToWeb('https://ntrustapp.com/terms-of-service')}
                    ontos={() => this._navigateToWeb('https://ntrustapp.com/privacy-policy/')}

                />
                <View style={{ height: hp('15%') }}>
                    <View style={styles.HeaderView}>
                        <View style={{ flex: 1, }}></View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={styles.HeaderText}>nBox</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', }}>
                            <TouchableOpacity
                                onPress={() => this.props.setModalVisible(true)}
                            >
                                <Image
                                    source={require('../../assets/images/ic_profile.png')}
                                    style={{ height: 35, width: 35, marginHorizontal: 20 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.SwitchView}>
                        <TouchableOpacity
                            style={styles.SwitchSubView}
                            onPress={() => this.setState({ chatSwtich: false })}
                        >
                            <Text style={[styles.SwitchText, !chatSwtich ? { fontWeight: 'bold' } : null]}>Borrowing</Text>
                            <View style={[{ height: '15%', width: '100%', marginTop: 5 }, chatSwtich ? { backgroundColor: GREY } : { backgroundColor: BLUE }]}></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.SwitchSubView}
                            onPress={() => this.setState({ chatSwtich: true })}
                        >
                            <Text style={[styles.SwitchText, chatSwtich ? { fontWeight: 'bold' } : null]}>Lending</Text>
                            <View style={[{ height: '15%', width: '100%', marginTop: 5 }, chatSwtich ? { backgroundColor: GREEN } : { backgroundColor: GREY }]}></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={(username) => { this.setState({ username: username }) }}
                    value={username}
                    style={{ width: wp('90%'), marginVertical: 20 }}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    icon={require('../../assets/images/ic_search.png')}
                />
                {chatSwtich
                    ?
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginHorizontal: 10 }}>
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                        </View>
                    </ScrollView>
                    :
                    <View style={{ marginHorizontal: 10 }}>
                        <User />
                        <User />
                    </View>
                }
            </View >
        );
    }
}

const mapStateToProps = (state) => ({
    setVisibility: state.setVisibility
})
const mapDispatchToProps = (dispatch) => ({
    setModalVisible: text => dispatch(setModalVisible(text)),
})


//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(NBox);
