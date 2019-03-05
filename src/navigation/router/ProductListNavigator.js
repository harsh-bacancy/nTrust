import { createAppContainer, createStackNavigator } from 'react-navigation'


import Dashboard from '../../screens/dashboard'
import DetailsNavigator from './DetailsNavigator'
import TentDetail from '../../screens/details/TentDetail'

const ProductListNavigator = createStackNavigator(
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                header: null,
            },
        },
        DetailsNavigator: {
            screen: DetailsNavigator,
            navigationOptions: {
                header: null,
            },
        },
        TentDetail:{
            screen: TentDetail,
            navigationOptions: {
                header: null,
            },
        }   
    },
    {
        initialRouteName: 'Dashboard'
    }
);
export default createAppContainer(ProductListNavigator)


