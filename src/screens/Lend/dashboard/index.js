//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';

import { DarkBlue, Blue } from '../../../hepler/Constant'
import { Dashboard } from '../../../api'
// import { ScrollView } from 'react-native-gesture-handler';

// create a component
class DashboardLend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Experiences: [],
            spinner: ''
        }
    }


    componentDidMount() {
        return fetch(Dashboard, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ Experiences: responseJson.Data.Experiences });
                this.setState({ spinner: false });
                // console.warn('Message:', this.state.dataSource)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.spinner}
                    textStyle={{ color: '#FFF' }}
                    customIndicator={<UIActivityIndicator color='#00DE95' />}
                />
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
                <FlatList
                    data={this.state.Experiences}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Categories', { item })}
                        >
                            <View style={styles.ItemView}>
                                <Image
                                    source={{ uri: `${item.icon}` }}
                                    style={{ height: 100, width: 100 }}
                                    resizeMode='center'
                                />
                                <Text style={styles.ItemName}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(_id, index) => _id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
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
