//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Platform, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import ImagePicker from 'react-native-image-crop-picker'




import { styles } from './styles'
import PopupModal from '../../../container/modal'
import { NTRUSTCOLOR, GREEN, GREY, WHITE, DARKBLUE, DISABLE } from '../../../hepler/Constant'



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
            Rent: '',
            Deposit: '',
            isPhoto: false,
            photoCount: 0,
            photoPickerModel: false,
            listitem: false
        }
        this.index = 0;
    }
    componentDidMount() {
        const { good, verygood, excellent } = this.state
        const item = this.props.navigation.getParam('item', 'data')

        if (good == true) {
            this.setState({ Rent: item.priceForGood, Deposit: item.depositForGood })
        } else if (verygood == true) {
            this.setState({ Rent: item.priceForVeryGood, Deposit: item.depositForVeryGood })
        } else {
            this.setState({ Rent: item.priceForExcellent, Deposit: item.depositForExcellent })
        }
    }

    _conditionChange = (good, verygood, excellent) => {
        const item = this.props.navigation.getParam('item', 'data')
        this.setState({
            good: good,
            verygood: verygood,
            excellent: excellent
        })
        if (good == true) {
            this.setState({ Rent: item.priceForGood, Deposit: item.depositForGood })
        } else if (verygood == true) {
            this.setState({ Rent: item.priceForVeryGood, Deposit: item.depositForVeryGood })
        } else {
            this.setState({ Rent: item.priceForExcellent, Deposit: item.depositForExcellent })
        }
    }

    _handleChoosePhoto = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            // console.log('--', image);
            this.setState({
                ImageSource: image,
                valueArray: [...this.state.valueArray, image],
                isPhoto: true,
                photoCount: this.state.photoCount + 1,
                photoPickerModel: false
            });
        });
    }

    _handleCameraChoosePhoto = () => {
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
        }).then(image => {
            // console.log('--', image);
            this.setState({
                ImageSource: image,
                valueArray: [...this.state.valueArray, image],
                isPhoto: true,
                photoCount: this.state.photoCount + 1,
                photoPickerModel: false
            });
        });
    }

    _removeItem = (index) => {
        const { valueArray, photoCount } = this.state
        const data = Object.assign([], valueArray)
        data.splice(index, 1)
        this.setState({ photoCount: photoCount - 1 })
        // console.warn('photo count is', (photoCount))
        this.setState({ valueArray: data })
    }

    onListItem() {
        this.setState({ listitem: false })
        this.props.navigation.navigate('TabNavigator')
    }

    render() {
        const { good, verygood, excellent, ImageSource, Rent, Deposit, valueArray, isPhoto, photoCount, photoPickerModel, zipcode, listitem } = this.state
        const item = this.props.navigation.getParam('item', 'data')
        let dataField = (zipcode.length == 5 && photoCount != 0);
        // console.warn('lenght in render', zipcode.length, '-', )
        // console.warn('dataField', dataField, 'photoCount', photoCount)
        // console.warn('pc', photoCount, 'phot', isPhoto)
        let photoView = valueArray.map((item, key) => {
            // console.warn('key-', key, 'source-', `${item.path}`)
            return (
                <View key={key} style={{ height: '100%', width: '100%', backgroundColor: '#333', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <Image
                        source={{ uri: Platform.OS === 'ios' ? `${item.sourceURL}` : `${item.path}` }}
                        style={{ height: '100%', width: '100%' }}
                    />
                    <TouchableOpacity
                        onPress={() => this._removeItem(key)}
                        style={{ top: 0, right: 0, position: 'absolute', margin: 10 }}
                    >
                        <View style={{ backgroundColor: '#FFFFFF99', width: wp('12%'), height: wp('12%'), borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../../../assets/images/ic_delete.png')}
                                style={{ height: wp('8%'), width: wp('8%') }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        )
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <View style={{ width: wp('100%'), height: hp('10%'), backgroundColor: WHITE, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{ flex: 1 }}>
                        <Image
                            source={require('../../../assets/images/arrow_dark.png')}
                            style={{ height: 30, width: 30, margin: 20 }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: wp('5%'), fontWeight: 'bold', color: '#000', textAlign: 'center' }}>{item.name}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <ScrollView>

                    {!isPhoto || photoCount == 0
                        ?
                        <View style={{ width: wp('100%'), height: wp('100%'), backgroundColor: GREY, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ photoPickerModel: true })}
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

                            <Swiper showsPagination={false} loop={false} style={{ width: wp('100%'), height: hp('25%'), backgroundColor: GREY, alignItems: 'center', justifyContent: 'center' }}>
                                {
                                    photoView
                                }
                            </Swiper>
                            <TouchableOpacity
                                style={{ zIndex: 2, position: 'absolute', bottom: 0, left: 0, margin: 15 }}
                                onPress={() => this.setState({ photoPickerModel: true })}
                            >
                                <View style={{ backgroundColor: '#FFFFFF99', width: wp('12%'), height: wp('12%'), borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={require('../../../assets/images/ic_plus.png')}
                                        style={{ height: wp('5%'), width: wp('5%') }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                    <View style={styles.NewView}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.SubViewHeader}>Condition</Text>
                        </View>
                        <View style={{ width: '100%', height: hp('10%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                style={[styles.ConditionView, good ? { backgroundColor: GREEN } : { backgroundColor: GREY }]}
                                onPress={() => this._conditionChange(true, false, false)}
                            >
                                <Text style={styles.ConditionFont}>Good</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.ConditionView, verygood ? { backgroundColor: GREEN } : { backgroundColor: GREY }]}
                                onPress={() => this._conditionChange(false, true, false)}
                            >
                                <Text style={styles.ConditionFont}> Very Good</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.ConditionView, excellent ? { backgroundColor: GREEN } : { backgroundColor: GREY }]}
                                onPress={() => this._conditionChange(false, false, true)}
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
                                style={{ backgroundColor: GREY, width: wp('90%'), height: hp('15%'), borderRadius: 5, textAlignVertical: 'top', padding: 10, margin: 5 }}
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
                                style={{ backgroundColor: GREY, width: wp('50%'), height: hp('5%'), borderRadius: 5, textAlign: 'center', padding: 10, margin: 5 }}
                                placeholder="12345"
                                onChangeText={(zipcode) => this.setState({ zipcode: zipcode })}
                                value={this.state.zipcode}
                                maxLength={5}
                                keyboardType='number-pad'
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
                                <Text style={styles.PrizeText}>{Rent}</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: wp('6%') }}>+</Text>
                            <TouchableOpacity
                                style={styles.PrizeView}
                            >
                                <Text style={styles.PrizeText}>{Deposit}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.BottomButton}>
                    <LinearGradient
                        colors={!dataField ? DISABLE : NTRUSTCOLOR}
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.99, y: 1.0 }}
                    >
                        <TouchableOpacity
                            onPress={() => this.setState({ listitem: true })}
                            disabled={!dataField}
                        >
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                <Text style={{ color: WHITE, fontSize: 25, fontWeight: 'bold', }}>LIST ITEM</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                {/* Model Start */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={photoPickerModel}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00000099' }}>
                        <View style={{ width: wp('90%'), backgroundColor: WHITE, justifyContent: 'center', borderRadius: 20, elevation: 6 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 10, color: DARKBLUE }}>Photos</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20, marginHorizontal: 10 }}>Please let us access your Camera and Gallery</Text>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', padding: 20 }}>
                                <TouchableOpacity
                                    onPress={this._handleChoosePhoto}
                                >
                                    <Text style={{ fontSize: wp('4%'), color: DARKBLUE }}>Select from Gallery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={this._handleCameraChoosePhoto}
                                >
                                    <Text style={{ fontSize: wp('4%'), color: DARKBLUE }}>Open Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({ photoPickerModel: false })}
                                >
                                    <Text style={{ fontSize: wp('4%'), color: DARKBLUE }}>Cancle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* Model End */}
                <PopupModal
                    setModalVisible={listitem}
                    onApply={() => this.onListItem()}
                    HeadingText='Thanks for Sharing!'
                    AgreeButtonText='CLOSE'
                    // CloseButtonText='Close'
                    ViewHere={<View style={{ width: '90%' }}><Text style={{ textAlign: 'center' }}>Your item is now available and ready to be nTrusted.We'll notify you as soon as a user request your item.{'\n\n'}You will have <Text style={{ fontWeight: 'bold' }}>30 minutes</Text> to approve their request.</Text></View>}
                />
            </View >
        );
    }
}



//make this component available to the app
export default AdditemDetails;
