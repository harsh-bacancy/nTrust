//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';
import { Searchbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



import PopupModal from '../../container/modal'

// create a component
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false,
            spinner: true,
            searchText: ''
        }
    }
    componentDidMount() {
        <Spinner
            visible={this.state.spinner}
            textStyle={{ color: '#FFF' }}
            customIndicator={<UIActivityIndicator color='#00DE95' />}
        />
        this.setState({ spinner: false })
    }
    render() {
        const { setModalVisible, searchText } = this.state

        return (
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search for item you'd to like to rent"
                    onChangeText={(searchText) => { this.setState({ searchText: searchText }) }}
                    value={searchText}
                    style={{ width: wp('90%'), marginVertical: 20 }}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    icon={require('../../assets/images/ic_search.png')}
                />
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
                        <View style={{ width: wp('90%') }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#164349' }}>Experiences</Text>
                        </View>
                    </View>
                    <ScrollView
                        horizontal={true}
                        style={{ flex: 1, }}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                            <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate('Tent')}
                            >
                                <View style={{ alignItems: 'center', justifyContent: 'center', height: wp('50%'), width: wp('70%'), elevation: 30, marginHorizontal: 20, }}>
                                    <View style={{ zIndex: 2, position: 'absolute', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 25, color: '#EEE', fontWeight: 'bold', textAlign: 'center' }}>Image 1</Text>
                                        <Text style={{ fontSize: 18, color: '#EEE', fontWeight: 'bold', textAlign: 'center' }}>0 item</Text>
                                    </View>
                                    <View style={{ height: wp('50%'), width: wp('70%'), backgroundColor: '#00000099', position: 'absolute', zIndex: 1 }}></View>
                                    <Image
                                        source={require('../../assets/images/demo.jpeg')}
                                        style={{ height: wp('50%'), width: wp('70%'), margin: 20, zIndex: 0, position: 'absolute' }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ alignItems: 'center', justifyContent: 'center', height: wp('50%'), width: wp('70%'), elevation: 300, marginHorizontal: 20, }}>
                                    <View style={{ zIndex: 2, position: 'absolute', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 25, color: '#EEE', fontWeight: 'bold', textAlign: 'center' }}>Image 1</Text>
                                        <Text style={{ fontSize: 18, color: '#EEE', fontWeight: 'bold', textAlign: 'center' }}>0 item</Text>
                                    </View>
                                    <View style={{ height: wp('50%'), width: wp('70%'), backgroundColor: '#00000099', position: 'absolute', zIndex: 1 }}></View>
                                    <Image
                                        source={require('../../assets/images/demo.jpeg')}
                                        style={{ height: wp('50%'), width: wp('70%'), margin: 20, zIndex: 0, position: 'absolute' }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ alignItems: 'center', justifyContent: 'center', height: wp('50%'), width: wp('70%'), elevation: 300, marginHorizontal: 20, }}>
                                    <View style={{ zIndex: 2, position: 'absolute', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 25, color: '#EEE', fontWeight: 'bold', textAlign: 'center' }}>Image 1</Text>
                                        <Text style={{ fontSize: 18, color: '#EEE', fontWeight: 'bold', textAlign: 'center' }}>0 item</Text>
                                    </View>
                                    <View style={{ height: wp('50%'), width: wp('70%'), backgroundColor: '#00000099', position: 'absolute', zIndex: 1 }}></View>
                                    <Image
                                        source={require('../../assets/images/demo.jpeg')}
                                        style={{ height: wp('50%'), width: wp('70%'), margin: 20, zIndex: 0, position: 'absolute' }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
                        <View style={{ width: wp('90%') }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#164349' }}>Items</Text>
                        </View>
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

                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ setModalVisible: !setModalVisible })
                            }}
                        >
                            <Text>Show modal</Text>
                        </TouchableOpacity>
                    </View>

                    <PopupModal
                        setModalVisible={setModalVisible}
                        onClose={() => {
                            this.setState({ setModalVisible: !setModalVisible })
                        }}
                        HeadingText='Heading Text'
                        AgreeButtonText='Agree'
                        CloseButtonText='Cancel'
                        ViewHere={<View><Text style={{ fontSize: 17, color: '#008EDE', marginHorizontal: 30, textAlign: 'center', paddingVertical: 30, }}>Custom View</Text></View>}
                    />
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
});

//make this component available to the app
export default Dashboard;
