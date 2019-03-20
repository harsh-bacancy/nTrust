//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'
// import ImagePicker from 'react-native-image-picker'
// import Swiper from 'react-native-swiper'

import ImagePicker from 'react-native-image-crop-picker'




import { styles } from './styles'
import { nTrustColor, Green, Grey } from '../../../hepler/Constant'
// import { TextInput } from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';

// create a component
class AdditemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discription: '',
            zipcode: '',
            good: true,
            verygood: false,
            excellent: false,
            ImageSource: ''
        }
    }

    handleChoosePhoto = () => {
        // ImagePicker.showImagePicker((response) => {
        //     console.log('Response = ', response);

        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //         const source = { uri: response.uri };

        //         // You can also display the image using data:
        //         // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        //         this.setState({
        //             ImageSource: source,
        //         });
        //     }
        // });
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log('--', image);
            this.setState({
                ImageSource: image,
            });
        });
        // ImagePicker.openCropper({
        //     path: '../../../assets/images/icon_calendar_color.png',
        //     width: 300,
        //     height: 400
        // }).then(image => {
        //     console.warn(image);
        // });
    }

    render() {
        const { good, verygood, excellent, ImageSource } = this.state
        console.warn('uri', ImageSource)
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <View style={{ width: wp('100%'), height: hp('10%'), backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{ flex: 1 }}>
                        <Image
                            source={require('../../../assets/images/arrow_dark.png')}
                            style={{ height: 30, width: 30, margin: 20 }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000' }}>Item Name</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <ScrollView>
                    <View style={{ width: wp('100%'), height: hp('25%'), backgroundColor: Grey, alignItems: 'center', justifyContent: 'center' }}>
                        {!ImageSource
                            ?
                            <TouchableOpacity
                                onPress={this.handleChoosePhoto}
                            >
                                <View style={{ height: wp('18%'), width: wp('18%'), backgroundColor: '#333', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Image
                                        source={require('../../../assets/images/ico_take_photo.png')}
                                        style={{ height: wp('8%'), width: wp('8%') }}
                                    />
                                </View>
                            </TouchableOpacity>
                            :

                            <View style={{ height: '100%', width: '100%', backgroundColor: '#333', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                <Image
                                    source={{ uri: Platform.OS === 'ios' ? `${ImageSource.sourceURL}` : `${ImageSource.path}` }}
                                    style={{ height: '100%', width: '100%' }}
                                />
                                <TouchableOpacity
                                    style={{ zIndex: 2, position: 'absolute', bottom: 0, left: 0, margin: 15 }}
                                    onPress={this.handleChoosePhoto}
                                >
                                    <Text>Add</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        {/* <TouchableOpacity
                            onPress={this.handleChoosePhoto}
                        >
                            <View style={{ height: wp('18%'), width: wp('18%'), backgroundColor: '#333', alignItems: 'center', justifyContent: 'center', }}>
                                <Image
                                    source={require('../../../assets/images/ico_take_photo.png')}
                                    style={{ height: wp('8%'), width: wp('8%') }}
                                />
                            </View>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{ padding: 5, width: wp('100%') }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: wp('4%'), padding: 5, fontWeight: 'bold', color: '#000' }}>Condition</Text>
                        </View>
                        <View style={{ width: '100%', height: hp('10%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={[{ width: '30%', borderRadius: 30, height: '80%', alignItems: 'center', justifyContent: 'center' }, good ? { backgroundColor: Green } : { backgroundColor: Grey }]}
                                onPress={() => this.setState({ good: true, verygood: false, excellent: false })}
                            >
                                <Text>Good</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[{ width: '30%', borderRadius: 30, height: '80%', alignItems: 'center', justifyContent: 'center' }, verygood ? { backgroundColor: Green } : { backgroundColor: Grey }]}
                                onPress={() => this.setState({ good: false, verygood: true, excellent: false })}
                            >
                                <Text> Very Good</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[{ width: '30%', borderRadius: 30, height: '80%', alignItems: 'center', justifyContent: 'center' }, excellent ? { backgroundColor: Green } : { backgroundColor: Grey }]}
                                onPress={() => this.setState({ good: false, verygood: false, excellent: true })}
                            >
                                <Text>Excellent</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('.5%'), backgroundColor: Grey, marginVertical: 5 }}></View>
                    <View style={{ padding: 5, width: wp('100%') }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: wp('4%'), padding: 5, fontWeight: 'bold', color: '#000' }}>Discription</Text>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <TextInput
                                style={{ backgroundColor: Grey, width: wp('90%'), height: hp('15%'), borderRadius: 5, textAlignVertical: 'top', padding: 10, margin: 5 }}
                                placeholder="(Optional)"
                                onChangeText={(discription) => this.setState({ discription: discription })}
                                value={this.state.discription}
                                multiline={true}
                            />
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('.5%'), backgroundColor: Grey, marginVertical: 5 }}></View>
                    <View style={{ padding: 5, width: wp('100%') }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: wp('4%'), padding: 5, fontWeight: 'bold', color: '#000' }}>Item Location</Text>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <TextInput
                                style={{ backgroundColor: Grey, width: wp('50%'), height: hp('5%'), borderRadius: 5, textAlign: 'center', padding: 10, margin: 5 }}
                                placeholder="12345"
                                onChangeText={(zipcode) => this.setState({ zipcode: zipcode })}
                                value={this.state.zipcode}
                                maxLength={5}
                            />
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('.5%'), backgroundColor: Grey, marginVertical: 5 }}></View>
                    <View style={{ padding: 5, width: wp('100%') }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: wp('4%'), padding: 5, fontWeight: 'bold', color: '#000' }}>Condition</Text>
                        </View>
                        <View style={{ width: '100%', height: hp('10%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <TouchableOpacity
                                style={{ width: '40%', backgroundColor: Green, borderRadius: 30, height: '70%', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text>$15</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 25 }}>+</Text>
                            <TouchableOpacity
                                style={{ width: '40%', backgroundColor: Green, borderRadius: 30, height: '70%', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text>$15</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.BottomButton}>
                    <LinearGradient
                        colors={nTrustColor}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                    >
                        <TouchableOpacity
                            onPress={() => this._onSubmit}
                        >
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold', }}>LIST ITEM</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View >
        );
    }
}



//make this component available to the app
export default AdditemDetails;
