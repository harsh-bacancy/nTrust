import { createAppContainer, createStackNavigator } from 'react-navigation'


import Dashboard from '../../screens/dashboard'
import TabNavigator from './TabNavigator'
import Tent from '../../screens/categories/Tent'
import TentDetail from '../../screens/details/TentDetail'
import Welcome from '../../screens/welcome'
import AdditemDetails from '../../screens/Lend/details/AddItemDetails'
import Categories from '../../screens/Lend/categories/Categories'


const FirstScreen = {
    AdditemDetails: 'AdditemDetails',
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
        },
        AdditemDetails: {
            screen: AdditemDetails,
            navigationOptions: {
                header: null,
            },
        },
        Categories: {
            screen: Categories,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: false ? FirstScreen.AdditemDetails : FirstScreen.welcome,
        headerMode: 'none',
        headerVisible: false
    }
);
export default createAppContainer(ProductListNavigator)


