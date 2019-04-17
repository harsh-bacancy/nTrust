//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, FlatList } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles'
import { BLUE, WHITE, GREEN } from '../../hepler/Constant'
import { DASHBOARD } from '../../api/index'
// create a component
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false,
            spinner: true,
            Experiences: [],
            PopularItem: [],
        }
    }
    componentDidMount() {
        // return fetch(DASHBOARD, { method: 'GET' })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         this.setState({ Experiences: responseJson.Data.allExperience });
        //         this.setState({ spinner: false });
        //         console.log('Message:', JSON.stringify(this.state.Experiences))

        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        const JsonData = [
            {
                "_id": "5b349463dd441400047401a5",
                "name": "Gaming Consoles",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652509405gaming_console%403x.png"
            },
            {
                "_id": "5b3495c9dd441400047401a6",
                "name": "Gaming Controllers",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652544584gaming_controller%403x.png"
            },
            {
                "_id": "5b3496badd441400047401ad",
                "name": "Pressure Washers",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652628914power_washer%403x.png"
            },
            {
                "_id": "5b349751dd441400047401b1",
                "name": "Kayaks",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652581358kayak%403x.png"
            },
            {
                "_id": "5b349758dd441400047401b2",
                "name": "Drones",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652536109drone%403x.png"
            },
            {
                "_id": "5b34976add441400047401b3",
                "name": "Paddle Boards",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652608388paddleboard%403x.png"
            },
            {
                "_id": "5b349781dd441400047401b4",
                "name": "Cameras",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652521255camera%403x.png"
            },
            {
                "_id": "5b349795dd441400047401b6",
                "name": "Bicycles",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652601474bike%403x.png"
            },
            {
                "_id": "5b3497d2dd441400047401b9",
                "name": "Golf Clubs",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652562765golfclub%403x.png"
            },
            {
                "_id": "5b3498acdd441400047401c1",
                "name": "Bluetooth Speakers",
                "icon": "https://ntrustimage.s3.amazonaws.com/1538652617831portable_speaker%403x.png"
            }
        ]
        this.setState({ Experiences: JsonData })
        this.setState({ spinner: false });
    }
    render() {
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <Spinner
                    visible={this.state.spinner}
                    textStyle={{ color: WHITE }}
                    customIndicator={<UIActivityIndicator color={GREEN} />}
                />
                <View style={{ width: wp('100%'), height: hp('10%'), backgroundColor: '#EEE', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ flex: 1, }}>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <Image
                            source={require('../../assets/images/nTrust_logo_header.png')}
                            style={{ height: 70, width: 70 }}
                        />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'grey', }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: BLUE, fontWeight: 'bold' }}>Availabel Now on nTrust</Text>
                </View>
                <FlatList
                    data={this.state.Experiences}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Tent', { item })}
                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={{ uri: `${item.icon}` }}
                                    style={{ height: 100, width: 100 }}
                                    resizeMode='center'
                                />
                                <Text style={styles.ItemName}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(_id, index) => _id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

//make this component available to the app
export default Dashboard