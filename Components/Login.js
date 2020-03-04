// Components/Login.js
import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            userEmail:'',
            userPassword:'',
        }
    }

    _navRegister() {
        this.props.navigation.navigate("Register");
    }

    _login() {
        const {userEmail} = this.state;
        const {userPassword} = this.state;

        fetch('https://sorbet.bet/api/login.php',{
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
                    this._globalUser(responseJson);
                    this.props.navigation.navigate("Profil");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //Fonction qui stocke les infos de l'utilisateur dans un state global
    //Appelé juste avant la connexion
    _globalUser(responseJson) {
        const action = { type: "USER_LOGIN", value: responseJson };
        this.props.dispatch(action);
    }


    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']} 
                    style={{flex:1, paddingTop: 30, paddingBottom: 50, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewImg}>
                        <Image
                            style={{
                                alignItems: 'center',
                                width: 100,
                                height: 107,
                                marginBottom: 10,
                                marginTop: 40,
                            }}
                            source={require('../content/img/logo.png')}
                        />
                        <Image
                            style={{
                                alignItems: 'center',
                                width: 150,
                                height: 28,
                            }}
                            source={require('../content/img/logo-textuel-blanc.png')}
                        />
                    </View>
                    <View style={styles.viewForm}>
                        <View style={styles.viewInputEmail}>
                            <Image
                                style={{
                                    marginLeft: 5,
                                    marginRight: 5,
                                    width: 40,
                                    height: 40,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <TextInput
                                style={styles.textInputEmail}
                                placeholder='Adresse email'
                                placeholderTextColor='#ffffff'
                                onChangeText={userEmail => this.setState({userEmail})}
                            />
                        </View>
                        <View style={styles.viewInputPwd}>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/cadenas-blanc.png')}
                            />
                            <TextInput
                                style={styles.textInputPwd}
                                secureTextEntry = {true}
                                placeholder = 'Mot de passe'
                                placeholderTextColor='#ffffff'
                                onChangeText={userPassword => this.setState({userPassword})}
                                onSubmitEditing={() => this._login()}
                            />
                        </View>
                    </View>
                    <View style={styles.viewBtn}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => this._login()}>
                                <Text style={styles.textBtn}>Connecte toi !</Text>
                        </TouchableOpacity>
                        <View style ={styles.viewFgtPsw}>
                            <TouchableOpacity
                                onPress={() => this._navRegister()}>
                                <Text style={styles.titleText}>Pas encore membre ?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this._navRegister()}>
                                <Text style={styles.titleText}>Mot de passe oublié ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <View style={styles.viewBtn}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => this.props.navigation.navigate("Profil")}>
                                <Text style={styles.textBtn}>Connecte toi !</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this._navRegister()}>
                            <Text style={styles.titleText}>Pas encore membre ?</Text>
                        </TouchableOpacity>
                    </View> */}
                    
                    
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
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    viewInputEmail: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        borderRadius: 15,
        height: 60,
        marginBottom: 20,
        alignItems: 'center',
    },
    textInputEmail: {
        height: 60,
        width: '100%',
        color: '#ffffff',
    },
    viewInputPwd: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        height: 60,
        borderRadius: 15,
        marginBottom: 0,
        alignItems: 'center',
    },
    textInputPwd: {
        height: 60,
        width: '100%',
        color: '#ffffff',
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
    viewFgtPsw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    titleText: {
        color: 'white',
        marginTop: 3,
        fontSize: 12,
    }
})

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Login)

