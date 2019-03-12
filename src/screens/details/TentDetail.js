//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'

import { nTrustColor } from '../../hepler/Constant'
import PopupModal from '../../container/modal'
import { styles } from './styles'
// create a component
class TentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false
        }
    }
    render() {
        const { setModalVisible } = this.state
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <PopupModal
                    setModalVisible={setModalVisible}
                    onClose={() => {
                        this.setState({ setModalVisible: !setModalVisible })
                    }}
                    HeadingText='Heading Text'
                    AgreeButtonText='Agree'
                    CloseButtonText='Cancel'
                    ViewHere={<View><Text style={{ fontSize: 17, color: '#008EDE', marginHorizontal: 30, textAlign: 'center', paddingVertical: 30, }}>Custom View{'\n'}☺</Text></View>}
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
                <View style={[styles.DetailSelecter,styles.BoxShadow]}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center',  }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darkloc.png')}
                            style={{ height: 35, width: 35, margin: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 10 }}>Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.DetailSelecter,styles.BoxShadow]}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
                    >
                        <Image
                            source={require('../../assets/images/arrow-darkcalendar.png')}
                            style={{ height: 35, width: 35, margin: 10 }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 10 }}>Date</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.DetailSelecter,styles.BoxShadow]}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', }}
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
                            onPress={() => {
                                this.setState({ setModalVisible: !setModalVisible })
                            }}
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
