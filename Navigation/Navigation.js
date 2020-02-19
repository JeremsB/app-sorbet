// Navigation/Navigation.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Register from '../Components/Register'

const SearchStackNavigator = createStackNavigator({
    Login: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    Register: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    }
},
{
    headerMode: 'none',
})
export default createAppContainer(SearchStackNavigator)