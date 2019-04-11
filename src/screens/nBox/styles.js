import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { DARKBLUE, GREY, WHITE } from '../../hepler/Constant'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: WHITE,
    },
    HeaderView: {
        flex:1,
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: GREY

    },
    HeaderText: {
        fontSize: 25,
        color: DARKBLUE,
        fontWeight: 'bold'
    },
    SwitchView: {
        flex:1,
        flexDirection: 'row',
        width: wp('100%'),
        backgroundColor: GREY,
    },
    SwitchSubView: {
        flex: 1,
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('8%'),
        flexDirection: 'column'
    },
    SwitchText: {
        fontSize: 20,
        color: '#000'
    },
});
