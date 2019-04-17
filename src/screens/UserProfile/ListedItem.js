//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { WHITE, GREY, DARKBLUE } from '../../hepler/Constant';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// create a component
class ListedItem extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                        <Text style={styles.HeaderText}>Listed Item</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: wp('100%') }}>
                    <Image
                        source={require('../../assets/images/empty_box.png')}
                        style={styles.HeaderImage}
                        resizeMode='center'
                    />
                    <Text style={styles.HeaderText}>No Record Found</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
    },
    HeaderView: {
        height: hp('10%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2
    },
    HeaderText: {
        fontSize: 25,
        color: DARKBLUE,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    BackButton: {
        height: 30,
        width: 30,
        margin: 15,
    },
    HeaderImage: {
        height: hp('20%'),
        width: hp('25%'),
    },
});

//make this component available to the app
export default ListedItem;
