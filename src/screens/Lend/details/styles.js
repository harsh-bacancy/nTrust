import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GREEN, GREY } from '../../../hepler/Constant'


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
    },
    NewView: {
        padding: 5,
        width: wp('100%')
    },
    LineView: {
        width: wp('100%'),
        height: hp('.5%'),
        backgroundColor: GREY,
        marginVertical: 5
    },
    SubViewHeader: {
        fontSize: wp('4%'),
        padding: 5,
        fontWeight: 'bold',
        color: '#000'
    },
    ConditionView: {
        width: '30%',
        borderRadius: 30,
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ConditionFont: {
        fontSize: wp('4%')
    },
    PrizeView: {
        width: '40%',
        backgroundColor: GREEN,
        borderRadius: 30,
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    PrizeText: {
        fontSize: wp('5%'),
    }
});