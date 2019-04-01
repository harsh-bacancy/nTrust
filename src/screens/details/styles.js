import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE } from '../../hepler/Constant'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: WHITE,
    },
    BackButton: {
        position: 'absolute',
        marginTop: 15,
        marginLeft: 15,
        alignSelf: 'flex-start'
    },
    DetailSelecter: {
        elevation: 3,
        width: wp('90%'),
        margin: 10,
        height: hp('8%'),
        justifyContent: 'center',
        backgroundColor: WHITE
    },
    BottomButton: {
        bottom: 0,
        position: 'absolute',
        width: wp('100%'),
        height: hp('10%')
    },
    BoxShadow: {
        shadowColor: "#333333",
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    }
});