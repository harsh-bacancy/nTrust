import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GREEN, GREY, DARKBLUE } from '../../hepler/Constant'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    BottomButton: {
        bottom: 0,
        width: wp('100%'),
        height: hp('10%'),
        // position: 'absolute'
    },
    LineView: {
        width: wp('100%'),
        height: hp('.5%'),
        backgroundColor: GREY,
        marginVertical: 5
    },
    Text: {
        fontSize: wp('5%'),
        color: DARKBLUE,
        fontWeight: 'bold',
        paddingVertical:5
    },
});