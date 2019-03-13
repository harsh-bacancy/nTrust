//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Searchbar } from 'react-native-paper'
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';

import { nTrustColor } from '../../hepler/Constant'
import PopupModal from '../../container/modal'
import { styles } from './styles'
// create a component
class TentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false,
            setModalVisibleLocation: false,
            setModalVisibleDate: false,
            setModalVisibleTime: false,
            spinner: false,
            location: '',
            date: '',
            time: ''
        }
    }
    async _onSubmit() {
        console.warn('start')
        // await this.setState({ spinner: true })
        // await setTimeout(() => {
        //     this.setState({ spinner: false })
        //     console.warn('in')
        // }
        //     , 250
        // );
        // this.setState({spinner: false})
        console.warn('stop')

    }
    render() {
        const { setModalVisibleLocation, location, setModalVisibleDate, setModalVisibleTime, spinner } = this.state
        console.warn('spinner',spinner)
        const Locaionpicker = () => {
            return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', width: '80%', marginVertical: 10 }}>
                        <Searchbar
                            placeholder='Enter a location'
                            onChangeText={(location) => { this.setState({ location: location }) }}
                            value={location}
                        />
                    </View>
                    <View style={{ alignItems: 'center', width: '80%', marginVertical: 10 }}>
                        <Text>or</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '80%', marginVertical: 10 }}>
                        <TouchableOpacity
                            style={{ width: '100%' }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: 1, borderTopColor: '#000', borderTopWidth: 1 }}>
                                <Image
                                    source={require('../../assets/images/arrow-darkloc.png')}
                                    style={{ height: 35, width: 35, margin: 10 }}
                                />
                                <Text>Use Current Location</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        const DatePicker = () => {
            return (
                <View style={{ width: '100%', alignItems: 'center' }} >
                    <View style={{ alignItems: 'center', width: '80%', marginVertical: 10 }}>
                        <TouchableOpacity
                            style={{ width: '100%' }}
                        >
                            <View style={{ alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: 1, borderTopColor: '#000', borderTopWidth: 1 }}>
                                <Text>Date Picker</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >
            )
        }
        const TimePicker = () => {
            return (
                <View style={{ width: '100%', alignItems: 'center' }} >
                    <View style={{ alignItems: 'center', width: '80%', marginVertical: 10 }}>
                        <TouchableOpacity
                            style={{ width: '100%' }}
                        >
                            <View style={{ alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: 1, borderTopColor: '#000', borderTopWidth: 1 }}>
                                <Text>Time Picker</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >
            )
        }
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]} >
                <Spinner
                    visible={spinner}
                    textStyle={{ color: '#FFF' }}
                    customIndicator={<UIActivityIndicator color='#00DE95' />}
                />
                <PopupModal
                    setModalVisible={setModalVisibleLocation}
                    onClose={() => {
                        this.setState({ setModalVisibleLocation: !setModalVisibleLocation })
                    }}
                    HeadingText='Select a location'
                    AgreeButtonText='Apply'
                    CloseButtonText='Cancel'
                    ViewHere={<Locaionpicker />}
                />
                <PopupModal
                    setModalVisible={setModalVisibleDate}
                    onClose={() => {
                        this.setState({ setModalVisibleDate: !setModalVisibleDate })
                    }}
                    HeadingText='Select a Date'
                    AgreeButtonText='Apply'
                    CloseButtonText='Cancel'
                    ViewHere={<DatePicker />}
                />
                <PopupModal
                    setModalVisible={setModalVisibleTime}
                    onClose={() => {
                        this.setState({ setModalVisibleTime: !setModalVisibleTime })
                    }}
                    HeadingText='Select a Date'
                    AgreeButtonText='Apply'
                    CloseButtonText='Cancel'
                    ViewHere={<TimePicker />}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={[styles.BackButton, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}
                >
                    <Image
                        source={require('../../assets/images/arrow_dark.png')}
                        style={{ height: 30, width: 30, }}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Image
                        source={require('../../assets/images/camera.png')}
                        style={{ height: 125, width: 125 }}
                    />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#164349', fontWeight: 'bold' }}>Tent</Text>
                    <Text style={{ fontSize: 17, color: '#00DE95', fontWeight: 'bold', marginTop: 15 }}>Current Price you''ll pay: $14/Day</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, color: '#164349', fontWeight: 'bold' }}>Deposit: $10</Text>
                        <Image
                            source={require('../../assets/images/icon_question_mark.png')}
                            style={{ height: 15, width: 15, margin: 8 }}
                        />
                    </View>
                </View>
                <View style={[styles.DetailSelecter, styles.BoxShadow]}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
                        onPress={() => {
                            this.setState({ setModalVisibleLocation: !setModalVisibleLocation })
                        }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darkloc.png')}
                            style={{ height: 35, width: 35, margin: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 10 }}>Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.DetailSelecter, styles.BoxShadow]}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
                        onPress={() => {
                            this.setState({ setModalVisibleDate: !setModalVisibleDate })
                        }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darkcalendar.png')}
                            style={{ height: 35, width: 35, margin: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 10 }}>Date</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.DetailSelecter, styles.BoxShadow]}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
                        onPress={() => {
                            this.setState({ setModalVisibleTime: !setModalVisibleTime })
                        }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darktime.png')}
                            style={{ height: 35, width: 35, margin: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 10 }}>Pick-Up Window</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 12, marginVertical: 20 }}>You will not charged until you select a lender</Text>
                <View style={styles.BottomButton}>
                    <LinearGradient
                        colors={nTrustColor}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                    >
                        <TouchableOpacity
                            onPress={() => this._onSubmit}
                        >
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold', }}>SEE MATCHES</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        );
    }
}


//make this component available to the app
export default TentDetails;
