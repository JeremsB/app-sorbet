// Navigation/Navigation.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Home from '../Components/Home'
import CreateBet from '../Components/CreateBet'
import AddUser from '../Components/AddUser'
import Profile from '../Components/Profile'

const HomeStackNavigator = createStackNavigator({
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
        screen: createBottomTabNavigator({
            Accueil: {
                screen: Home
            },
            Paris: {
                screen: AddUser
            },
            Parier: {
                screen: CreateBet
            },
            Profil: {
                screen: Profile
            }
        })
    }
},
{
    headerMode: 'none',
})

export default createAppContainer(HomeStackNavigator)