//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux'


import { BLUE, GREEN } from '../../hepler/Constant'
import { styles } from './styles'
import User from '../../container/Chat/User'
import UserProfile from '../UserProfile'
import { setModalVisible } from '../../redux/actions'

// create a component
class NBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatSwtich: false,
            username: '',
            settingVisible: false
        }
    }

    componentDidMount() {
        this.props.setModalVisible(false)
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
                />
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
                        <View style={[{ height: hp('1%'), width: '100%', marginTop: 5 }, chatSwtich ? { backgroundColor: '#FFF' } : { backgroundColor: GREEN }]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.SwitchSubView}
                        onPress={() => this.setState({ chatSwtich: true })}
                    >
                        <Text style={[styles.SwitchText, chatSwtich ? { fontWeight: 'bold' } : null]}>Lending</Text>
                        <View style={[{ height: hp('1%'), width: '100%', marginTop: 5 }, chatSwtich ? { backgroundColor: BLUE } : { backgroundColor: '#FFF' }]}></View>
                    </TouchableOpacity>
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
