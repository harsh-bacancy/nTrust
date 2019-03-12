import { createAppContainer, createStackNavigator } from 'react-navigation'


import Dashboard from '../../screens/dashboard'
import DetailsNavigator from './DetailsNavigator'
import TabNavigator from './TabNavigator'
import Tent from '../../screens/categories/Tent'
import TentDetail from '../../screens/details/TentDetail'
import Welcome from '../../screens/welcome'

const FirstScreen = {
    dashboard: 'Dashboard',
    welcome: 'Welcome'
}
const ProductListNavigator = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null,
            },
        },
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                header: null,
            },
        },
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            },
        },
        Tent: {
            screen: Tent,
            navigationOptions: {
                header: null,
            },
        },
        TentDetail: {
            screen: TentDetail,
            navigationOptions: {
                header: null,
            },
        }
    },
    {
        initialRouteName: false ? FirstScreen.dashboard : FirstScreen.welcome,
        headerMode: 'none',
        headerVisible: false
    }
);
export default createAppContainer(ProductListNavigator)


