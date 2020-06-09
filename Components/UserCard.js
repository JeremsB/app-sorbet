// Components/UserCard.js

import React from 'react'
import {StyleSheet, Text, Image, View, TouchableOpacity, Alert} from 'react-native'
import {Button} from "react-native-web";
import AddUser from "./AddUser";
import {connect} from "react-redux";


class UserCard extends React.Component {

    _follow(id_user, id_follow) {
        fetch('https://sorbet.bet/api/user/follow.php',{
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                id_user: id_user,
                id_follow: id_follow
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'follow') {
                    //console.log("follow");
                    this._getFollows(id_user);
                    this._getOtherUsers(id_user);
                    this._getFollowsCreate(id_user);
                    //Alert.alert("follow","Veuillez ajouter les amis")
                }else if (responseJson == 'deja_follow') {
                    //console.log("deja_follow");
                    //Alert.alert("deja_follow","Faut un id")
                }else if (responseJson == 'follow_back') {
                    //console.log("follow_back");
                    this._getFollows(id_user);
                    this._getOtherUsers(id_user);
                    this._getFollowsCreate(id_user);
                    //Alert.alert("follow_back","Faut un id")
                }else if (responseJson == 'no_follow_id')
                    //console.log("no_id");
                    Alert.alert("Pas d'id","Faut un id");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _getFollows(id_user) {
        fetch('https://sorbet.bet/api/user/get-follows.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this.setState({follows: responseJson});
                this._globalFollows(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _globalFollows(responseJson) {
        const action = { type: "USER_FOLLOWS", value: responseJson };
        this.props.dispatch(action);
    }

    _getFollowsCreate(id_user) {
        fetch('https://sorbet.bet/api/user/get-follows-create-bet.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this._globalFollowsCreate(responseJson)
                    console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _globalFollowsCreate(responseJson) {
        const action = { type: "USER_FOLLOWS_CREATE", value: responseJson };
        this.props.dispatch(action);
    }

    _getOtherUsers(id_user) {
        fetch('https://sorbet.bet/api/user/get-others-users.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables (T'es ami avec tout le monde");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this._globalOtherUsers(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _globalOtherUsers(responseJson) {
        const action = { type: "OTHER_USERS", value: responseJson };
        this.props.dispatch(action);
    }

    render() {
        const { user, userco } = this.props
        return (
            <View style={styles.cardUser}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 10,
                    }}
                    source={{uri: 'https://sorbet.bet/users/'+user.picture}}
                />
                <View style={styles.infosRightUser}>
                    <View style={styles.viewInfosUsers}>
                    <Text style={styles.titleInfosUser}>{user.login}</Text>
                        <Text style={styles.txtInfosUser}>18 Sorbets</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this._follow(userco, user.id_user)}>
                        <Image
                            style={{
                                width: 24,
                                height: 22,
                            }}
                            source={require('../content/img/pictos/utilisateur_ajout.png')}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    cardUser: {
        marginVertical: 5,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 15,
        padding: 10,
    },
    infosRightUser: {
        marginLeft: 10,
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleInfosUser: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 19,
    },
    txtInfosUser: {
        color: '#ffffff',
        fontSize: 12,
    },
})

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        userFollows: state.userFollows,
        otherUsers: state.otherUsers
    }
}

export default connect(mapStateToProps)(UserCard)
