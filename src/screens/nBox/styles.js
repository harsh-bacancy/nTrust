import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { DARKBLUE } from '../../hepler/Constant'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    HeaderView: {
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    HeaderText: {
        fontSize: 25,
        color: DARKBLUE,
        fontWeight: 'bold'
    },
    SwitchView: {
        flexDirection: 'row',
        width: wp('100%'),
        // backgroundColor: 'red'
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
