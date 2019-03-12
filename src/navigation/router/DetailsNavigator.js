import { createAppContainer, createStackNavigator } from 'react-navigation'

import Tent from '../../screens/categories/Tent'
import TentDetail from '../../screens/details/TentDetail'

const DetailsNavigator = createStackNavigator(
    {
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
    },
    {
        initialRouteName: 'Tent',
        headerMode:'none',
        headerVisible:false
    }
);
export default createAppContainer(DetailsNavigator)


