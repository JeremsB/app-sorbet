// Navigation/Navigation.js
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { StyleSheet, Image } from 'react-native';
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
                screen: Home,
                navigationOptions: {
                    tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                      return <Image
                        source={require('../content/img/boules.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            },
            
            Parier: {
                screen: CreateBet,
                navigationOptions: {
                    tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                      return <Image
                        source={require('../content/img/ajouter.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            },
            Paris: {
                screen: AddUser,
                navigationOptions: {
                    tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                      return <Image
                        source={require('../content/img/rechercher.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            },
            Profil: {
                screen: Profile,
                navigationOptions: {
                    tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                      return <Image
                        source={require('../content/img/personne.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            }
        },
            {
               tabBarOptions: {
                    activeBackgroundColor: '#ffffff', // Couleur d'arrière-plan de l'onglet sélectionné
                    inactiveBackgroundColor: 'transparent', // Couleur d'arrière-plan des onglets non sélectionnés
                    showLabel: false, // On masque les titres
                    showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
                }
            }
        )
    }
},
{
    headerMode: 'none',
})

const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    }
  })

export default createAppContainer(HomeStackNavigator)