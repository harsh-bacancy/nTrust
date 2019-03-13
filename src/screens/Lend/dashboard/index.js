//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { DarkBlue, Blue } from '../../../hepler/Constant'
import { ScrollView } from 'react-native-gesture-handler';

// create a component
class DashboardLend extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: wp('100%'), height: hp('10%'), backgroundColor: '#EEE', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={{ fontSize: 15, padding: 20 }}>Cancle</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <Text style={{ fontSize: 30, color: DarkBlue, fontWeight: 'bold' }}>
                            Lend
                        </Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'grey', }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: Blue, fontWeight: 'bold' }}>Select Item you'd like to lend</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity

                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
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
});

//make this component available to the app
export default DashboardLend;
