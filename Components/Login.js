// Components/Login.js
import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.mail = ""
        this.password = ""
    }

    _mailTextInputChanged(text) {
        this.mail = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState
    }

    _passwordTextInputChanged(text) {
        this.password = text
    }

    _login() {
        console.log("Hello test")
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']} 
                    style={{flex:1, paddingTop: 70, paddingBottom: 40, paddingLeft: 40, paddingRight: 40}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewImg}>
                        <Image
                            style={{
                                alignItems: 'center',
                                width: 150,
                                height: 160,
                                marginBottom: 10,
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
                                source={require('../content/img/personne.png')}
                            />
                            <TextInput
                                style={styles.textInputEmail}
                                placeholder='Adresse email'
                                placeholderTextColor='grey'
                                onChangeText={(text) => this._mailTextInputChanged(text)}
                            />
                        </View>
                        <View style={styles.viewInputPwd}>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/cadenas.png')}
                            />
                            <TextInput
                                style={styles.textInputPwd}
                                secureTextEntry='true'
                                placeholder='Mot de passe'
                                placeholderTextColor='grey'
                                onChangeText={(text) => this._passwordTextInputChanged(text)}
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
                        <Text style={styles.titleText}>Pas encore membre ?</Text>
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
    },
    titleText: {
        color: 'white',
        marginTop: 3
    }
})

export default Login

