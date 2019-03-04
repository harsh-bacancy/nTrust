//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// create a component
class Tent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View >
                    <TouchableOpacity
                        style={{ zIndex: 1,position: 'absolute', }}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <View>
                            <Image
                                source={require('../../assets/images/back_arrow.png')}
                                style={{  height: 30, width: 30, margin: 15 }}
                            />
                        </View>
                    </TouchableOpacity>
                    <Image
                        source={require('../../assets/images/demo.jpeg')}
                        style={{ height: hp('30%'), width: wp('100%'), zIndex: 0 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Image
                                source={require('../../assets/images/camera.png')}
                                style={{ height: 100, width: 100 }}
                            />
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Tent</Text>
                            <Text style={{ fontSize: 17 }}>Camping</Text>
                            <Text style={{ fontSize: 17, color: '#00DE95', fontWeight: 'bold' }}>$14/Day</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Image
                                source={require('../../assets/images/camera.png')}
                                style={{ height: 100, width: 100 }}
                            />
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Tent</Text>
                            <Text style={{ fontSize: 17 }}>Camping</Text>
                            <Text style={{ fontSize: 17, color: '#00DE95', fontWeight: 'bold' }}>$14/Day</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Image
                                source={require('../../assets/images/camera.png')}
                                style={{ height: 100, width: 100 }}
                            />
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Tent</Text>
                            <Text style={{ fontSize: 17 }}>Camping</Text>
                            <Text style={{ fontSize: 17, color: '#00DE95', fontWeight: 'bold' }}>$14/Day</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Tent;
