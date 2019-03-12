import { createAppContainer, createStackNavigator } from 'react-navigation'

import Welcome from '../../screens/welcome'
import ProductListNavigator from './ProductListNavigator'

const WelcomeNavigator = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null,
            },
        },
        ProductListNavigator:{
            screen: ProductListNavigator,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: 'Welcome'
    }
);
export default createAppContainer(WelcomeNavigator)


