import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE } from '../../hepler/Constant'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InfoImage: {
        height: wp('35%'),
        width: wp('35%')
    },
    InfoView: {
        flex: 1,
        justifyContent: 'center',
        width: wp('70%'),
        alignItems: 'center'
    },
    InfoText: {
        textAlign: 'center',
        color: WHITE,
        fontSize: wp('4%')
    },
    InfoDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7
    }
});