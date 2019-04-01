import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DARKBLUE, WHITE, GREEN } from '../../hepler/Constant'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    Heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: DARKBLUE,
    },
    Cards: {
        alignItems: 'center',
        justifyContent: 'center',
        height: wp('50%'),
        width: wp('70%'),
        marginHorizontal: 10,
        backgroundColor: WHITE,
        borderRadius: 20
    },
    CardHeadingText: {
        fontSize: 25,
        color: WHITE,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    CardSubHeadingText: {
        fontSize: 18,
        color: WHITE,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    CardBlackLayer: {
        height: wp('50%'),
        width: wp('70%'),
        backgroundColor: '#00000099',
        position: 'absolute',
        zIndex: 1,
        borderRadius: 20
    },
    CardImage: {
        height: wp('50%'),
        width: wp('70%'),
        margin: 20,
        zIndex: 0,
        position: 'absolute',
        borderRadius: 20
    },
    ItemView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#EEE',
        margin: 5,
        width: wp('45%'),
        height: wp('40%'),
        borderRadius: 20
    },
    ItemName: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10
    },
    ItemCategory: {
        fontSize: 17
    },
    ItemPrice: {
        fontSize: 17,
        color: '#00DE95',
        fontWeight: 'bold'
    },
    CardShadow: {
        shadowColor: "#333333",
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 5
        },
    }

});