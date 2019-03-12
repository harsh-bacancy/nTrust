import React from 'react'
import { Image } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Entypo'


import Dashboard from '../../screens/dashboard'
import Welcome from '../../screens/welcome'
import NBox from '../../screens/nBox/nBox'

const TabNavigator = createBottomTabNavigator(
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: () => ({
                title: 'Home',                
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="home"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Welcome: {
            screen: Welcome,
            navigationOptions: () => ({
                title: 'Lend',
                tabBarVisible: false,
                tabBarIcon: (
                    <Image source={require('../../assets/images/ic_lend.png')}
                        style={{ height: 25, width: 25 }}
                    />

                )
            })
        },
        NBox: {
            screen: NBox,
            navigationOptions: () => ({
                title: 'nBox',
                
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="download"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },

    },
    {
        initialRouteName: 'Dashboard'
    },
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#F8F8F8',
            inactiveTintColor: '#000',
            style: {
                backgroundColor: '#171F33'
            },
        }
    }
);
export default createAppContainer(TabNavigator)


