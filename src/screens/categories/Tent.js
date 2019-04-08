//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';

import { SUB_CATEGORIES } from '../../api/index'
import { styles } from './styles'
import { WHITE, GREEN } from '../../hepler/Constant'

// create a component
class Tent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SubExperiences: '',
            spinner: true,
        }
    }

    async componentWillMount() {
        const item = this.props.navigation.getParam('item', 'data')
        return await fetch(SUB_CATEGORIES + item._id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ SubExperiences: responseJson.Data.items });
                this.setState({ spinner: false });
                console.warn('Messagere:', this.state.SubExperiences)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    render() {
        const { SubExperiences } = this.state
        const item = this.props.navigation.getParam('item', 'data')
        return (
            <View style={[styles.container,]}>
                <Spinner
                    visible={this.state.spinner}
                    textStyle={{ color: WHITE }}
                    customIndicator={<UIActivityIndicator color={GREEN} />}
                />
                <View style={[{ borderBottomWidth: .1, elevation: 3, }, styles.CardShadow]}>
                    <Image
                        source={{ uri: `${item.icon}` }}
                        style={styles.HeaderImage}
                        resizeMode='center'
                    />
                    <View style={styles.HeaderBlackLayer}></View>
                    <View style={styles.HeaderView}>
                        <Text style={styles.HeaderText}>{item.name}</Text>
                    </View>
                    <TouchableOpacity
                        style={[{ zIndex: 3, position: 'absolute', }, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            source={require('../../assets/images/back_arrow.png')}
                            style={styles.BackButton}
                        />
                    </TouchableOpacity>
                </View>
                {!this._isEmpty(SubExperiences)
                    ?
                    <FlatList
                        data={SubExperiences}
                        renderItem={({ item }) =>
                            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 5 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('TentDetail', { item: item })}
                                >
                                    <View style={styles.ItemView}>
                                        <Image
                                            source={{ uri: `${item.icon}` }}
                                            style={{ height: 100, width: 100, margin: 3 }}
                                            resizeMode='center'
                                        />
                                        <Text style={styles.ItemName}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        keyExtractor={(_id) => _id}
                        numColumns={3}
                    />
                    :
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/images/empty_box.png')}
                            style={{ height: wp('30%'), width: wp('30%') }}
                            resizeMode='center'
                        />
                    </View>
                }
            </View >
        );
    }
}

// define your styles

//make this component available to the app
export default Tent;
