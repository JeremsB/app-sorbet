// Components/CreateBet.js
import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'

class CreateBet extends React.Component {

    constructor(props) {
        super(props)
    }

    _createBet() {
        const {userEmail} = this.state;
        const {userPassword} = this.state;

        fetch('https://sorbet.bet/api/create-bet.php',{
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                email: userEmail,
                password: userPassword,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'champs')
                    Alert.alert("Erreur formulaire","Veuillez remplir tous les champs")
                else if (responseJson == 'email_inconnu')
                    Alert.alert("Authentification incorrecte","Email / Mot de passe incorrect")
                else
                    this.props.navigation.navigate("Home", {
                        user: responseJson
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 40, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewBtn}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => this._createBet()}>
                            <Text style={styles.textBtn}>Créer pari</Text>
                        </TouchableOpacity>
                        <Text>{userData.login}</Text>
                        <Text>{userData.lastname}</Text>
                        <Text>{userData.firstname}</Text>
                        <Text>{userData.birth}</Text>
                    </View>


                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    viewImg: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewForm: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewInputEmail: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 15,
        height: 60,
        marginBottom: 0,
        alignItems: 'center',
    },
    textInputEmail: {
        height: 60,
        width: '100%',
    },
    viewInputPwd: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 60,
        borderRadius: 15,
        marginBottom: 0,
        alignItems: 'center',
    },
    textInputPwd: {
        height: 60,
        width: '100%',
    },
    viewBtn: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divBtn: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'center',
        width: '100%',
    },
    textBtn: {
        color: '#ff978d',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    titleText: {
        color: 'white',
        marginTop: 3
    }
})

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(CreateBet)
