// Components/UserCard.js

import React from 'react'
import {StyleSheet, Text, Image, View, TouchableOpacity, Alert} from 'react-native'
import {Button} from "react-native-web";


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
                if (responseJson == 'follow')
                    console.log("follow");
                    //Alert.alert("follow","Veuillez ajouter les amis")
                else if (responseJson == 'deja_follow')
                    console.log("deja_follow");
                    //Alert.alert("deja_follow","Faut un id")
                else if (responseJson == 'follow_back')
                    console.log("follow_back");
                    //Alert.alert("follow_back","Faut un id")
                else if (responseJson == 'no_follow_id')
                    console.log("no_id");
                    //Alert.alert("Pas d'id","Faut un id");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { user, userco } = this.props
        return (
            <View style={styles.cardUser}>
                <Image
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 15,
                    }}
                    source={{uri: 'https://sorbet.bet/users/'+user.picture}}
                />
                <View style={styles.infosRightUser}>
                    <View style={styles.viewInfosUsers}>
                    <Text style={styles.titleInfosUser}>{user.login}</Text>
                        <Text style={styles.txtInfosUser}>18 Sorbets</Text>
                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                    </View>
                    {/*<Button
                        title="Press me"
                        onPress={this._follow(this.userco, user.id_user)}
                    />*/}
                    <TouchableOpacity
                        onPress={() => this._follow(userco, user.id_user)}>
                        <Text>Follow</Text>
                    </TouchableOpacity>
                    <Image
                        style={{
                            width: 24,
                            height: 22,
                        }}
                        source={require('../content/img/pictos/utilisateur_ajout.png')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    }, cardUser: {
        marginVertical: 10,
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

export default UserCard