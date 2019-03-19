//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';


import { styles } from './styles'

// create a component
class Categories extends Component {
    render() {
        return (
            <View style={[styles.container,]}>
                <View style={[{ borderBottomWidth: .1, elevation: 6, }, styles.CardShadow]}>
                    <Image
                        source={require('../../../assets/images/demo.jpeg')}
                        style={styles.HeaderImage}
                    />
                    <View style={styles.HeaderBlackLayer}></View>
                    <View style={styles.HeaderView}>
                        <Text style={styles.HeaderText}> Image 1</Text>
                        <Text style={styles.SubHeaderText}>0 item</Text>
                    </View>
                    <TouchableOpacity
                        style={[{ zIndex: 3, position: 'absolute', }, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            source={require('../../../assets/images/back_arrow.png')}
                            style={styles.BackButton}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AdditemDetails')}
                    >
                        <View style={styles.ItemView}>
                            <Image
                                source={require('../../../assets/images/camera.png')}
                                style={styles.ItemImage}
                            />
                            <Text style={styles.ItemName}>Tent</Text>
                            <Text style={styles.ItemCategory}>Camping</Text>
                            <Text style={styles.ItemPrice}>$14/Day</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Tent')}
                    >
                        <View style={styles.ItemView}>
                            <Image
                                source={require('../../../assets/images/camera.png')}
                                style={styles.ItemImage}
                            />
                            <Text style={styles.ItemName}>Tent</Text>
                            <Text style={styles.ItemCategory}>Camping</Text>
                            <Text style={styles.ItemPrice}>$14/Day</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AdditemDetails')}
                    >
                        <View style={styles.ItemView}>
                            <Image
                                source={require('../../../assets/images/camera.png')}
                                style={styles.ItemImage}
                            />
                            <Text style={styles.ItemName}>Tent</Text>
                            <Text style={styles.ItemCategory}>Camping</Text>
                            <Text style={styles.ItemPrice}>$14/Day</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

// define your styles

//make this component available to the app
export default Categories;
