//import liraries
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Badge } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Blue, Green } from '../../hepler/Constant'
// create a component
const User = () => {
    return (
        <TouchableOpacity style={{ width: wp('85%'), height: hp('11%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10, }}>
            <View style={{ width: '20%' }}>
                <Image
                    source={require('../../assets/images/ic_profile.png')}
                    style={{ margin: 20, height: 45, width: 45 }}
                />
            </View>
            <View style={{ width: '80%', flexDirection: 'column', padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>Goods name</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Disctription</Text>
                <Text style={{ fontSize: 15, color: Green, fontWeight: 'bold' }}>Notice</Text>
            </View>
            <Badge style={{ alignSelf: 'center',fontSize: wp('3%') }}>1</Badge>
        </TouchableOpacity>
    );
};

// define your styles

//make this component available to the app
export default User;
