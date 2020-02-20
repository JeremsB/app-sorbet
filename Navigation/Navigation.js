// Navigation/Navigation.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Home from '../Components/Home'

const SearchStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    }
},
{
    headerMode: 'none',
})
export default createAppContainer(SearchStackNavigator)