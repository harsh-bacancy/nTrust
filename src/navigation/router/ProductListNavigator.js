import { createAppContainer, createStackNavigator } from 'react-navigation'


import Dashboard from '../../screens/dashboard'
import TabNavigator from './TabNavigator'
import Tent from '../../screens/categories/Tent'
import TentDetails from '../../screens/details/TentDetail'
import Welcome from '../../screens/welcome'
import AdditemDetails from '../../screens/Lend/details/AddItemDetails'
import Categories from '../../screens/Lend/categories/Categories'
import NBox from '../../screens/nBox/nBox'
import WebViewComponent from '../../components/WebViewComponent'
import MatchFound from '../../screens/Match/MatchFound'
import ListedItem from '../../screens/UserProfile/ListedItem'

const FirstScreen = {
    ListedItem: 'ListedItem',
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
        TentDetails: {
            screen: TentDetails,
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
        NBox: {
            screen: NBox,
            navigationOptions: {
                header: null,
            },
        },
        WebViewComponent: {
            screen: WebViewComponent,
            navigationOptions: {
                header: null,
            },
        },
        MatchFound: {
            screen: MatchFound,
            navigationOptions: {
                header: null,
            },
        },
        ListedItem: {
            screen: ListedItem,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: false ? FirstScreen.ListedItem : FirstScreen.welcome,
        headerMode: 'none',
        headerVisible: false
    }
);
export default createAppContainer(ProductListNavigator)


