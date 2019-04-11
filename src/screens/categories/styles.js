import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, GREEN, BLACK, DARKBLUE, GREY } from '../../hepler/Constant'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    HeaderImage: {
        height: hp('20%'),
        width: hp('25%'),
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
    SubHeaderText: {
        fontSize: 18,
        color: WHITE,
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
        flexDirection: 'column',
        height: hp('12%'),
        width: wp('47%'),
        backgroundColor: GREY,
        borderRadius: 20,
        margin: 2
    },
    ItemImage: {
        height: 100,
        width: 100
    },
    ItemName: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ItemCategory: {
        fontSize: 17
    },
    ItemPrice: {
        fontSize: 17,
        color: GREEN,
        fontWeight: 'bold'
    },
    CardShadow: {
        shadowColor: "#333333",
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
            height: 3,
            width: 0
        }
    }
});