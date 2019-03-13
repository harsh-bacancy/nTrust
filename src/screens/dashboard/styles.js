import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    Heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#164349'
    },
    Cards: {
        alignItems: 'center',
        justifyContent: 'center',
        height: wp('50%'),
        width: wp('70%'),
        marginHorizontal: 10,
    },
    CardHeadingText: {
        fontSize: 25,
        color: '#EEE',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    CardSubHeadingText: {
        fontSize: 18,
        color: '#EEE',
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
        flexDirection: 'column'
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
    },
    CardShadow:{
        shadowColor: "#333333",
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
          height: 5,
          width: 5
        },
    }


});