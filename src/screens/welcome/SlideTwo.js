//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


import { styles } from './styles'

// create a component
class SlideTwo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('./../../assets/images/introscreen_walletone.png')}
                        style={styles.InfoImage}
                    />
                </View>
                <View style={styles.InfoView}>
                    <Text style={styles.InfoText}>Lend your items and make some bank.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <View style={styles.InfoDetails}>
                            <Image
                            // source={require('./../../assets/images/rating_on.png')}
                            // style={{ height: 25, width: 25, margin: 6 }}
                            />
                            {/* <Text style={{ color: '#FFF' }}>Local</Text> */}
                        </View>
                        <View style={styles.InfoDetails}>
                            {/* <Image
                                source={require('./../../assets/images/rating_on.png')}
                                style={{ height: 25, width: 25, margin: 6 }}
                            />
                            <Text style={{ color: '#FFF' }}>Verified</Text> */}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



//make this component available to the app
export default SlideTwo;
