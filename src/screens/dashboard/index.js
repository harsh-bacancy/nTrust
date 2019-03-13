//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';
import { Searchbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles'

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
        this.timer = setInterval(
            () => this.setState(prevState => ({ test: !prevState.test })),
            5000,
        );
        this.setState({ spinner: false })
    }
    render() {
        const { searchText } = this.state

        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <Spinner
                    visible={this.state.spinner}
                    textStyle={{ color: '#FFF' }}
                    customIndicator={<UIActivityIndicator color='#00DE95' />}
                />
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
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
                        <View style={{ width: wp('90%') }}>
                            <Text style={styles.Heading}>Experiences</Text>
                        </View>
                    </View>
                    <ScrollView
                        horizontal={true}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Tent')}
                            >
                                <View style={[styles.Cards, styles.CardShadow]}>
                                    <View style={{ zIndex: 2, position: 'absolute', alignItems: 'center' }}>
                                        <Text style={styles.CardHeadingText}>Image 1</Text>
                                        <Text style={styles.CardSubHeadingText}>0 item</Text>
                                    </View>
                                    <View style={styles.CardBlackLayer}></View>
                                    <Image
                                        source={require('../../assets/images/demo.jpeg')}
                                        style={styles.CardImage}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Tent')}
                            >
                                <View style={[styles.Cards, styles.CardShadow]}>
                                    <View style={{ zIndex: 2, position: 'absolute', alignItems: 'center' }}>
                                        <Text style={styles.CardHeadingText}>Image 1</Text>
                                        <Text style={styles.CardSubHeadingText}>0 item</Text>
                                    </View>
                                    <View style={styles.CardBlackLayer}></View>
                                    <Image
                                        source={require('../../assets/images/demo.jpeg')}
                                        style={styles.CardImage}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Tent')}
                            >
                                <View style={[styles.Cards, styles.CardShadow]}>
                                    <View style={{ zIndex: 2, position: 'absolute', alignItems: 'center' }}>
                                        <Text style={styles.CardHeadingText}>Image 1</Text>
                                        <Text style={styles.CardSubHeadingText}>0 item</Text>
                                    </View>
                                    <View style={styles.CardBlackLayer}></View>
                                    <Image
                                        source={require('../../assets/images/demo.jpeg')}
                                        style={styles.CardImage}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', marginVertical: 5 }}>
                        <View style={{ width: wp('90%') }}>
                            <Text style={styles.Heading}>Items</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TentDetail')}
                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                                <Text style={styles.ItemCategory}>Camping</Text>
                                <Text style={styles.ItemPrice}>$14/Day</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                                <Text style={styles.ItemCategory}>Camping</Text>
                                <Text style={styles.ItemPrice}>$14/Day</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.ItemView}>
                                <Image
                                    source={require('../../assets/images/camera.png')}
                                    style={{ height: 100, width: 100 }}
                                />
                                <Text style={styles.ItemName}>Tent</Text>
                                <Text style={styles.ItemCategory}>Camping</Text>
                                <Text style={styles.ItemPrice}>$14/Day</Text>
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
                                <Text style={styles.ItemName}>Tent</Text>
                                <Text style={styles.ItemCategory}>Camping</Text>
                                <Text style={styles.ItemPrice}>$14/Day</Text>
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
                                <Text style={styles.ItemName}>Tent</Text>
                                <Text style={styles.ItemCategory}>Camping</Text>
                                <Text style={styles.ItemPrice}>$14/Day</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles


//make this component available to the app
export default Dashboard