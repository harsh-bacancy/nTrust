//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import StarRating from 'react-native-star-rating';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



import PopupModal from '../../container/modal'
import { GREEN, GREY, WHITE, DISABLE, NTRUSTCOLOR, BLUE, DARKBLUE } from '../../hepler/Constant'
import { styles } from './styles'

// create a component
class MatchFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSelect: false,
        }
    }
    onSelect() {
        this.setState({ onSelect: true })
        this.props.navigation.navigate('TabNavigator')
    }
    render() {
        const { onSelect } = this.state
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={{ position: 'absolute', zIndex: 1, height: wp('7%'), width: wp('7%'), top: 0, left: 0, padding: 20, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Image
                        source={require('../../assets/images/back_arrow.png')}
                        style={{ height: wp('6%'), width: wp('6%'), }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ position: 'absolute', zIndex: 1, height: wp('7%'), width: wp('7%'), top: 0, right: 0, padding: 20, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Image
                        source={require('../../assets/images/icon_share.png')}
                        style={{ height: wp('6%'), width: wp('6%'), }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <View style={{ height: hp('25%'), width: wp('100%') }}>
                    <Swiper>
                        <View>
                            <Image
                                // source={{ uri: Platform.OS === 'ios' ? `${item.sourceURL}` : `${item.path}` }}
                                source={require('../../assets/images/wp1857438.jpg')}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </View>
                        <View>
                            <Image
                                // source={{ uri: Platform.OS === 'ios' ? `${item.sourceURL}` : `${item.path}` }}
                                source={require('../../assets/images/wp1857438.jpg')}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </View>
                        <View>
                            <Image
                                // source={{ uri: Platform.OS === 'ios' ? `${item.sourceURL}` : `${item.path}` }}
                                source={require('../../assets/images/wp1857438.jpg')}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </View>
                    </Swiper>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center', width: wp('100%'), flexDirection: 'column' }}>
                        <Text style={styles.Text}>COOL</Text>
                        <Text style={styles.Text}>We Found a Match!</Text>
                        <View style={{ width: wp('20%'), borderRadius: wp('20%'), height: wp('20%'), alignItems: 'center', backgroundColor: 'red' }}>
                            <Image
                                // source={{ uri: Platform.OS === 'ios' ? `${item.sourceURL}` : `${item.path}` }}
                                source={require('../../assets/images/ntrust-splash.png')}
                                style={{ height: '100%', width: '100%', borderRadius: 100 }}
                            />
                        </View>
                        <Text style={styles.Text}>Harsh Patel</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            starSize={wp('7%')}
                            starStyle={{ marginRight: wp('3%') }}
                            fullStarColor={BLUE}
                            rating={3.5}
                        />
                        <View style={styles.LineView} />
                        <Text style={styles.Text}>PS4 Controller</Text>
                        <View style={styles.LineView} />
                        <Text style={styles.Text}>Discription</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Text}>Condition:</Text>
                            <Text style={styles.Text}>Very Good</Text>
                        </View>
                        <View style={styles.LineView} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('100%'), paddingHorizontal: 10 }}>
                            <Text style={styles.Text}>Miami FL, 33132</Text>
                            <Text style={styles.Text}>0.0 Miles Away</Text>
                        </View>
                        <View style={styles.LineView} />
                        <MapView
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            style={{ width: wp('100%'), height: wp('50%') }}
                            provider={PROVIDER_GOOGLE}
                        />
                        <View style={styles.LineView} />
                        <Text style={styles.Text}>Location is Approximate to Protect Lender</Text>
                        <View style={styles.LineView} />
                        <TouchableOpacity
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Text style={{ fontStyle: 'italic', textDecorationLine: 'underline', color: BLUE, paddingVertical: 15 }}>Skip to next Lender</Text>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.BottomButton}>
                    <LinearGradient
                        colors={false ? DISABLE : NTRUSTCOLOR}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                    >
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ onSelect: !onSelect })
                            }
                        // disabled={!dataField}
                        >
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                <Text style={{ color: WHITE, fontSize: 25, fontWeight: 'bold', }}>SELECT</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <PopupModal
                    setModalVisible={onSelect}
                    onApply={() => this.onSelect()}
                    HeadingText='Your Request is Completed!'
                    AgreeButtonText='CLOSE'
                    ViewHere={<View style={{ width: '90%' }}><Text style={{ textAlign: 'center', }}>Thank you for submitting a request.We'll notify you as soon as the lender responded. Request Details and Further update will availbale in your nBox</Text></View>}
                />
            </View>
        );
    }
}


//make this component available to the a
export default MatchFound;


/**
 *  <MapView
                                    onPress={(e) => Actions.push('ItemLocation', {
                                        region, userRegion, userName
                                    })}
                                    ref={map => {
                                        this.map = map
                                    }}
                                    provider={PROVIDER_GOOGLE}
                                    style={styles.map}
                                    initialRegion={region}
                                    customMapStyle={mapStyle}
                                    toolbarEnabled={false}
                                    showsCompass={false}
                                    zoomEnabled={false}
                                    minZoomLevel={13}
                                    maxZoomLevel={20}
                                    scrollEnabled={false}
                                >
                                    <MapView.Circle
                                        key={(region.latitude + region.longitude).toString()}
                                        center={{
                                            latitude: Number(region.latitude),
                                            longitude: Number(region.longitude)
                                        }}
                                        radius={804.6}
                                        fillColor={circle.fillColor}
                                        strokeColor={'#d9d9d9'}
                                        strokeWidth={circle.border}
                                    />
                                </MapView>


                                  <StarRating
                                disabled={true}
                                maxStars={5}
                                starSize={StyleConfig.countPixelRatio(18)}
                                starStyle={{marginRight: StyleConfig.countPixelRatio(5)}}
                                fullStarColor={StyleConfig.pureBlue}
                                rating={data.rating}
                            />
 */