//import liraries
import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import { nTrustColor } from '../../hepler/Constant'

// create a component
const PopupModal = ({ setModalVisible, onClose, ViewHere, HeadingText, AgreeButtonText, CloseButtonText }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={setModalVisible}
            onRequestClose={onClose}
        >
            <View style={styles.ModalStyle}>
                <View style={{ backgroundColor: '#EEE', alignItems: 'center', justifyContent: 'center', borderRadius: 20, width: wp('90%'), elevation: 20, }}>
                    <Text style={{ fontSize: 20, paddingVertical: 20, color: '#008EDE', fontWeight: '700' }}>{HeadingText}</Text>            
                    {ViewHere}
                    <LinearGradient
                        colors={nTrustColor}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                    >
                        <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate('Dashboard')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('7%'), width: wp('70%'), paddingVertical: 25 }}>
                                <Text style={{ fontSize: 20, paddingHorizontal: 10, color: '#FFF' }}>{AgreeButtonText}</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity
                        onPress={onClose}>
                        <Text style={{ fontSize: 20, textDecorationLine: 'underline', paddingVertical: 25 }}>{CloseButtonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    ModalStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16434999',

    }
});

//make this component available to the app
export default PopupModal;


// <Modal
// animationType="slide"
// transparent={true}
// visible={setModalVisible}
// onRequestClose={() => {
//     this.setModalVisible(!setModalVisible)
// }}>
// <TouchableOpacity
//     style={{ flex: 1, backgroundColor: '#FFFFFF99' }}
//     onPress={() => this.setModalVisible(!setModalVisible)}>
// </TouchableOpacity>
// <View style={{ flex: .4, backgroundColor: '#EEE', alignItems: 'center', justifyContent: 'flex-end', borderTopEndRadius: 30, borderTopStartRadius: 30, marginHorizontal: 5, }}>
//     <Text style={{ fontSize: 20, padding: 10 }}>Ex. Example@example.com</Text>
//     <View style={{ height: 40 }}>

//     </View>
//     {/* <TouchableOpacity
//         onPress={() => {
//             this.setModalVisible(!setModalVisible);
//         }}>
//         <Image
//             style={ImageView}
//             source={require('../assets/image/ic_cancel.png')}
//         />
//     </TouchableOpacity> */}
//     <View style={{ height: 20 }}>

//     </View>
// </View>
// </Modal>