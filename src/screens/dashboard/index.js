//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, FlatList } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIActivityIndicator } from 'react-native-indicators';
import { Searchbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles'
import { BLUE, WHITE, GREEN } from '../../hepler/Constant'
import { DASHBOARD } from '../../api/index'
// create a component
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalVisible: false,
            spinner: true,
            Experiences: [],
            PopularItem: [],
        }
    }
    componentDidMount() {
        return fetch(DASHBOARD, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ Experiences: responseJson.Data.allExperience });
                this.setState({ spinner: false });
                console.warn('Message:', this.state.Experiences)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={[styles.container, Platform.OS === 'ios' ? { paddingTop: 35 } : null]}>
                <Spinner
                    visible={this.state.spinner}
                    textStyle={{ color: WHITE }}
                    customIndicator={<UIActivityIndicator color={GREEN} />}
                />
                <View style={{ width: wp('100%'), height: hp('10%'), backgroundColor: '#EEE', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ flex: 1, }}>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <Image
                            source={require('../../assets/images/nTrust_logo_header.png')}
                            style={{ height: 70, width: 70 }}
                        />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'grey', }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: BLUE, fontWeight: 'bold' }}>Availabel Now on nTrust</Text>
                </View>
                <FlatList
                    data={this.state.Experiences}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Tent', { item })}
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

//make this component available to the app
export default Dashboard