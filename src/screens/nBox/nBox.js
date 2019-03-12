//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Searchbar, Badge } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Blue, Green } from '../../hepler/Constant'
import { styles } from './styles'
import User from '../../container/Chat/User'

// create a component
class NBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatSwtich: false,
            username: ''
        }
    }
    render() {
        const { chatSwtich, username } = this.state
        return (
            <View style={[styles.container,Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <View style={styles.HeaderView}>
                    <View style={{ flex: 1, }}></View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.HeaderText}>nBox</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', }}>
                        <TouchableOpacity>
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
                        <View style={[{ height:hp('1%'), width: '100%', marginTop: 5 }, chatSwtich ? { backgroundColor: '#FFF' } : { backgroundColor: Green }]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.SwitchSubView}
                        onPress={() => this.setState({ chatSwtich: true })}
                    >
                        <Text style={[styles.SwitchText, chatSwtich ? { fontWeight: 'bold' } : null]}>Lending</Text>
                        <View style={[{ height:hp('1%'), width: '100%', marginTop: 5 }, chatSwtich ? { backgroundColor: Blue } : { backgroundColor: '#FFF' }]}></View>
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
                        <View style={{margin:10}}>
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                        </View>
                    </ScrollView>
                    :
                    <View>
                        <User />
                        <User />
                    </View>
                }
            </View >
        );
    }
}

//make this component available to the app
export default NBox;
