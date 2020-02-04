import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Desafios from './pages/Desafios';

const MainNavigation = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerShown: false
            }
        },

        Desafios: {
            screen: Desafios
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(MainNavigation);


