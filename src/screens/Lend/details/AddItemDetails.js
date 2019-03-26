//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'
// import ImagePicker from 'react-native-image-picker'
import Swiper from 'react-native-swiper'

import ImagePicker from 'react-native-image-crop-picker'




import { styles } from './styles'
import { nTrustColor, Green, Grey } from '../../../hepler/Constant'


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
            ImageSource: '',
            valueArray: [],
        }
        this.index = 0;
    }

    addView(ImageSource) {
        let newlyAddedValue = { uriPath: ImageSource.path }
        // console.log('Value ', JSON.stringify(newlyAddedValue));

        this.setState(
            { index: this.state.index + 1, valueArray: [...this.state.valueArray, newlyAddedValue] },
            () => { this.index = this.index + 1 }
        );
        // console.warn('array', this.state.valueArray)
    }

    handleChoosePhoto = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            // console.log('--', image);
            this.setState({
                ImageSource: image,
                valueArray: [...this.state.valueArray, image]
            });
            // this.addView(this.state.ImageSource)
        });
    }

    render() {
        const { good, verygood, excellent, ImageSource } = this.state

        // console.warn('index-', this.index)
        {
            ImageSource
                ?
                console.log('Value in render', this.state.valueArray)
                :
                null
        }
        let photoView = this.state.valueArray.map((item, key) => {
            console.log('key-', key, 'source-', `${item.path}`)
            return (
                <View key={key} style={{ height: '100%', width: '100%', backgroundColor: '#333', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <Image
                        source={{ uri: Platform.OS === 'ios' ? `${item.sourceURL}` : `${item.path}` }}
                        style={{ height: '100%', width: '100%' }}
                    />
                </View>
            )
        }
        )
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
                        <Text style={{ fontSize: wp('6%'), fontWeight: 'bold', color: '#000' }}>Item Name</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <ScrollView>

                    {!ImageSource
                        ?
                        <View style={{ width: wp('100%'), height: wp('100%'), backgroundColor: Grey, alignItems: 'center', justifyContent: 'center' }}>
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
                        </View>
                        :
                        <View style={{ width: wp('100%'), height: wp('100%') }}>

                            <Swiper showsPagination={false} loop={false} style={{ width: wp('100%'), height: hp('25%'), backgroundColor: Grey, alignItems: 'center', justifyContent: 'center' }}>
                                {
                                    photoView
                                }
                            </Swiper>
                            <TouchableOpacity
                                style={{ zIndex: 2, position: 'absolute', bottom: 0, left: 0, margin: 15 }}
                                onPress={this.handleChoosePhoto}
                            >
                                <Text>Add</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    <View style={styles.NewView}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.SubViewHeader}>Condition</Text>
                        </View>
                        <View style={{ width: '100%', height: hp('10%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={[styles.ConditionView, good ? { backgroundColor: Green } : { backgroundColor: Grey }]}
                                onPress={() => this.setState({ good: true, verygood: false, excellent: false })}
                            >
                                <Text style={styles.ConditionFont}>Good</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.ConditionView, verygood ? { backgroundColor: Green } : { backgroundColor: Grey }]}
                                onPress={() => this.setState({ good: false, verygood: true, excellent: false })}
                            >
                                <Text style={styles.ConditionFont}> Very Good</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.ConditionView, excellent ? { backgroundColor: Green } : { backgroundColor: Grey }]}
                                onPress={() => this.setState({ good: false, verygood: false, excellent: true })}
                            >
                                <Text style={styles.ConditionFont}>Excellent</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.LineView} />
                    <View style={styles.NewView}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.SubViewHeader}>Description</Text>
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
                    <View style={styles.LineView} />
                    <View style={styles.NewView}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.SubViewHeader}>Item Location</Text>
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
                    <View style={styles.LineView} />
                    <View style={styles.NewView}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.SubViewHeader}>Prize</Text>
                        </View>
                        <View style={{ width: '100%', height: hp('10%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <TouchableOpacity
                                style={styles.PrizeView}
                            >
                                <Text style={styles.PrizeText}>$15</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: wp('6%') }}>+</Text>
                            <TouchableOpacity
                                style={styles.PrizeView}
                            >
                                <Text style={styles.PrizeText}>$15</Text>
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
