//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image, Platform } from 'react-native';
import { connect } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { DARKBLUE, BLUE } from '../../hepler/Constant'
import { setModalVisible } from '../../redux/actions'

// create a component
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false,
            onPress: props.onPress,
            onSignout: props.onSignout
        }
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.setVisibility.text}
                onRequestClose={() => changeModalVisible}
            >
                <View style={[styles.container, Platform.OS === 'ios' ? { marginTop: 35 } : null]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('100%') }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: BLUE, marginTop: 15, fontWeight:'bold'}}>Settings</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={this.state.onPress}
                                style={{ flex: 1, top: 0, right: 0, position: 'absolute', margin: 25, }}
                            >
                                <Image
                                    source={require('../../assets/images/ic_close.png')}
                                    style={{ height: wp('7%'), width: wp('7%') }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: wp('85%'), marginTop: 70, }}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: DARKBLUE }}>
                                Earnings
                        </Text>
                        </View>
                        <View style={{ padding: 15 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DARKBLUE, marginVertical: 15 }}>
                                    Listed Items
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: wp('85%'), }}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: DARKBLUE }}>
                                General
                        </Text>
                        </View>
                        <View style={{ padding: 15 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DARKBLUE, marginVertical: 15 }}>
                                    How it works
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DARKBLUE, marginVertical: 15 }}>
                                    Contact us
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DARKBLUE, marginVertical: 15 }}>
                                    About us
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DARKBLUE, marginVertical: 15 }}>
                                    Terms of sevice
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DARKBLUE, marginVertical: 15 }}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%', bottom: 0, position: 'absolute', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <TouchableOpacity
                                onPress={this.props.onSignout}
                            >
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red', margin: 15 }}>
                                    Sign Out
                        </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/ico-facebook.png')}
                                    style={{ height: 30, width: 30, marginHorizontal: 10 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/ico-instagram.png')}
                                    style={{ height: 30, width: 30, marginHorizontal: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal >
        );
    }
}


const mapStateToProps = (state) => ({
    setVisibility: state.setVisibility
})
const mapDispatchToProps = (dispatch) => ({
    setModalVisible: text => dispatch(setModalVisible(text)),
})


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%',
    },
});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
