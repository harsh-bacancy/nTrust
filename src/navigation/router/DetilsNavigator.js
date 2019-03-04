import { createAppContainer, createStackNavigator } from 'react-navigation'

import Tent from '../../screens/details/Tent'
import Dashboard from '../../screens/dashboard'

const DetailsNavigator = createStackNavigator(
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                header: null,
            },
        },
        Tent: {
            screen: Tent,
            navigationOptions: {
                header: null,
            },
        }
    },
    {
        initialRouteName: 'Dashboard'
    }
);
export default createAppContainer(DetailsNavigator)


