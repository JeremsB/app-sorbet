// Navigation/Navigation.js
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createSwitchNavigator } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Home from '../Components/Home'
import CreateBet from '../Components/CreateBet'
import AddUser from '../Components/AddUser'
import Profile from '../Components/Profile'
import Earnings from '../Components/Earnings'
import SettingsUser from '../Components/SettingsUser'
import PersonnalData from '../Components/PersonnalData'
import AccountSettings from '../Components/AccountSettings'
import Slide1 from '../Components/Slide1'
import Slide2 from '../Components/Slide2'
import { connect } from 'react-redux'

// let userData = this.props.userData; //Recupère le contenu du premier objet du tableau userData

const SlideTabNavigator = createBottomTabNavigator({
    Slide1: {
        screen: Slide1,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                const image = focused
                    ? require('../content/img/point-active.png')
                    : require('../content/img/point-no-active.png')
                return (
                    <Image
                        source={image}
                        style={styles.point}
                    />
                )
            }
        },
    },
    Slide2: {
        screen: Slide2,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                const image = focused
                    ? require('../content/img/point-active.png')
                    : require('../content/img/point-no-active.png')
                return (
                    <Image
                        source={image}
                        style={styles.point}
                    />
                )
            }
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                const image = focused
                    ? require('../content/img/point-active.png')
                    : require('../content/img/point-no-active.png')
                return (
                    <Image
                        source={image}
                        style={styles.point}
                    />
                )
            }
        }
    },
},
    {
        // POUR CACHER LES 3 POINTS
        // defaultNavigationOptions: {
        //     tabBarVisible: false,
        // },
        tabBarOptions: {
            style: { // Style de la nav complete
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderTopColor: 'transparent',
                position: 'absolute',
                marginLeft: '40%',
                marginRight: '40%',
            },
            inactiveBackgroundColor: 'transparent', // Couleur d'arrière-plan des onglets non sélectionnés 
            showLabel: false, // On masque les titres
            showIcon: true,
        }
    },
    {
        headerMode: 'none',
    },
)

const RegisterStackNavigator = createStackNavigator({
    Register: {
        screen: Register,
    }
},
    {
        headerMode: 'none',
    },
)

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: createBottomTabNavigator({
            Accueil: {
                screen: Home,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../content/img/boules.png')
                            : require('../content/img/boules-blanc.png')
                        return (
                            <Image
                                source={image}
                                style={styles.icon}
                            />
                        )
                    }
                }
            },

            Parier: {
                screen: CreateBet,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../content/img/ajouter.png')
                            : require('../content/img/ajouter-blanc.png')
                        return (
                            <Image
                                source={image}
                                style={styles.icon}
                            />
                        )
                    }
                }
            },
            Paris: {
                screen: AddUser,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../content/img/rechercher.png')
                            : require('../content/img/rechercher-blanc.png')
                        return (
                            <Image
                                source={image}
                                style={styles.icon}
                            />
                        )
                    }
                }
            },
            Profil: {
                screen: createStackNavigator({
                    UserHome: {
                        screen: Profile,
                    },

                    Earnings: {
                        screen: Earnings,
                        navigationOptions: {
                            title: 'Mes gains',
                        }
                    },

                    SettingsUser: {
                        screen: createStackNavigator({
                            SettingsUser: {
                                screen: SettingsUser,
                            },
                            PersonnalData: {
                                screen: PersonnalData,
                            },
                            AccountSettings: {
                                screen: AccountSettings,
                            }
                        },
                            {
                                headerMode: 'none',
                            },
                        )
                    },
                },
                    {
                        headerMode: 'none',
                    },
                ),
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../content/img/personne.png')
                            : require('../content/img/personne-blanc.png')
                        return (
                            <Image
                                source={image}
                                style={styles.icon}
                            />
                        )
                    }
                },

            },
        },
            {
                tabBarOptions: {
                    style: { // Style de la nav complete
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderTopColor: 'transparent',
                        position: 'absolute',
                        left: 30,
                        right: 30,
                        bottom: 30,
                    },
                    tabStyle: { // Style des items dans la nav
                        marginEnd: 10,
                        marginStart: 10,
                        paddingVertical: 30,
                        borderRadius: 15,
                    },
                    activeBackgroundRadius: 15,
                    activeBackgroundColor: 'rgba(255, 255, 255, 1)', // Couleur d'arrière-plan de l'onglet sélectionné
                    inactiveBackgroundColor: 'transparent', // Couleur d'arrière-plan des onglets non sélectionnés
                    showLabel: false, // On masque les titres
                    showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
                },
            }
        )
    }
},
    {
        headerMode: 'none',
    },
)
 
const RootSwitch = createSwitchNavigator(
    {
        SlideTabNavigator,
        HomeStackNavigator,
        RegisterStackNavigator
    },
    {
        initialRouteName: "SlideTabNavigator"
    }
);

const styles = StyleSheet.create({
    icon: { // Style de l'img iconHomeStackNavigator
        width: 60,
        height: 60,
    },
    point: {
        width: 10,
        height: 10,
    }
  })

// const mapStateToProps = state => {
//     return {
//         userData: state.userData
//     }
// }

// if (userData != null) {
//     export default connect(mapStateToProps)(HomeStackNavigator)
// } else {
//     export default connect(mapStateToProps)(SlideTabNavigator)
// }

export default createAppContainer(RootSwitch)
