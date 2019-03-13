//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image, Platform } from 'react-native';
import { connect } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { DarkBlue } from '../../hepler/Constant'
import { setModalVisible } from '../../redux/actions'

// create a component
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false,
            onPress: props.onPress
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
                    <TouchableOpacity
                        onPress={this.state.onPress}
                        style={{ flex: 1, top: 0, right: 0, position: 'absolute', margin: 25, }}
                    >
                        <Image
                            source={require('../../assets/images/ic_close.png')}
                            style={{ height: wp('7%'), width: wp('7%') }}
                        />
                    </TouchableOpacity>
                    <View style={{ width: wp('85%'), marginTop: 70, }}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: DarkBlue }}>
                                Earnings
                        </Text>
                        </View>
                        <View style={{ padding: 15 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DarkBlue, marginVertical: 15 }}>
                                    Listed Items
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: wp('85%'), }}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: DarkBlue }}>
                                General
                        </Text>
                        </View>
                        <View style={{ padding: 15 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DarkBlue, marginVertical: 15 }}>
                                    How it works
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DarkBlue, marginVertical: 15 }}>
                                    Contact us
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DarkBlue, marginVertical: 15 }}>
                                    About us
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DarkBlue, marginVertical: 15 }}>
                                    Terms of sevice
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: DarkBlue, marginVertical: 15 }}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
