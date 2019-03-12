import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    HeaderImage: {
        height: hp('30%'),
        width: wp('100%'),
        zIndex: 0
    },
    HeaderBlackLayer: {
        height: hp('30%'),
        width: wp('100%'),
        zIndex: 1,
        position: 'absolute',
        backgroundColor: '#00000099'
    },
    HeaderView: {
        height: hp('30%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        position: 'absolute',
    },
    HeaderText: {
        fontSize: 25,
        color: '#EEE',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    SubHeaderText: {
        fontSize: 18,
        color: '#EEE',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    BackButton: {
        height: 30,
        width: 30,
        margin: 15,
    },
    ItemView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    ItemImage: {
        height: 100,
        width: 100
    },
    ItemName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    ItemCategory: {
        fontSize: 17
    },
    ItemPrice: {
        fontSize: 17,
        color: '#00DE95',
        fontWeight: 'bold'
    }
});