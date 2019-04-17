//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';

import { SUB_CATEGORIES } from '../../api/index'
import { styles } from './styles'
import { WHITE, GREEN, BLACK, GREY } from '../../hepler/Constant'
import { Drones, Gaming_Consoles, Gaming_Controllers, Pressure_Washers, Kayaks, Paddle_Boards, Cameras, Bicycles, Golf_Clubs, Bluetooth_Speakers } from './TempData'

// create a component
class Tent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SubExperiences: '',
            spinner: true,
        }
    }

    async componentWillMount() {
        const item = this.props.navigation.getParam('item', 'data')
        // return await fetch(SUB_CATEGORIES + item._id, {
        //     method: 'GET',
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         this.setState({ SubExperiences: responseJson.Data.items });
        //         this.setState({ spinner: false });
        //         console.warn('Messagere:', this.state.SubExperiences)
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        // console.warn('item id', item._id)
        if (item._id == '5b349758dd441400047401b2') {
            this.setState({ SubExperiences: Drones });
        } else if (item._id == '5b349463dd441400047401a5') {
            this.setState({ SubExperiences: Gaming_Consoles });
        } else if (item._id == '5b3495c9dd441400047401a6') {
            this.setState({ SubExperiences: Gaming_Controllers });
        } else if (item._id == '5b3496badd441400047401ad') {
            this.setState({ SubExperiences: Pressure_Washers });
        } else if (item._id == '5b349751dd441400047401b1') {
            this.setState({ SubExperiences: Kayaks });
        } else if (item._id == '5b34976add441400047401b3') {
            this.setState({ SubExperiences: Paddle_Boards });
        } else if (item._id == '5b349781dd441400047401b4') {
            this.setState({ SubExperiences: Cameras });
        } else if (item._id == '5b349795dd441400047401b6') {
            this.setState({ SubExperiences: Bicycles });
        } else if (item._id == '5b3497d2dd441400047401b9') {
            this.setState({ SubExperiences: Golf_Clubs });
        } else if (item._id == '5b3498acdd441400047401c1') {
            this.setState({ SubExperiences: Bluetooth_Speakers });
        }
        this.setState({ spinner: false });
    }

    _isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    render() {
        const { SubExperiences } = this.state
        const item = this.props.navigation.getParam('item', 'data')
        return (
            <View style={[styles.container,]}>
                <Spinner
                    visible={this.state.spinner}
                    textStyle={{ color: WHITE }}
                    customIndicator={<UIActivityIndicator color={GREEN} />}
                />
                <View style={[{ borderBottomWidth: 1, borderBottomColor: GREY }]}>
                    <View style={{ alignItems: 'center', borderBottomColor: GREY, borderBottomWidth: 1, height: hp('10%'), flexDirection: 'row', width: '100%' }}>
                        <TouchableOpacity
                            style={[{ flex: 1 }, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image
                                source={require('../../assets/images/arrow_dark.png')}
                                style={styles.BackButton}
                            />
                        </TouchableOpacity>
                        <View style={styles.HeaderView}>
                            <Text style={styles.HeaderText}>{item.name}</Text>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: hp('25%') }}>
                        <Image
                            source={{ uri: `${item.icon}` }}
                            style={styles.HeaderImage}
                            resizeMode='center'
                        />
                    </View>
                </View>
                {!this._isEmpty(SubExperiences)
                    ?
                    <FlatList
                        data={SubExperiences}
                        renderItem={({ item }) =>
                            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 5 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('TentDetails', { item: item })}
                                >
                                    <View style={styles.ItemView}>
                                        <Text style={styles.ItemName}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        keyExtractor={(_id) => _id}
                        numColumns={2}
                    />
                    :
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/images/empty_box.png')}
                            style={{ height: wp('30%'), width: wp('30%') }}
                            resizeMode='center'
                        />
                    </View>
                }
            </View >
        );
    }
}

// define your styles

//make this component available to the app
export default Tent;
