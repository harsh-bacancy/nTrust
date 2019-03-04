import { createAppContainer, createStackNavigator } from 'react-navigation'

import Welcome from '../../screens/welcome'
import Dashboard from '../../screens/dashboard'
import DetailsNavigator from './DetilsNavigator'

const WelcomeNavigator = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null,
            },
        },
        DetailsNavigator: {
            screen: DetailsNavigator,
            navigationOptions: {
                header: null,
            },
        }
    },
    {
        initialRouteName: 'Welcome'
    }
);
export default createAppContainer(WelcomeNavigator)


