// Components/Login.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native'

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
                <Image
                    style={{marginTop: 10,
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'contain'}}
                    source={require('../content/img/title.png')}
                />
                <Image
                    style={{flex: 1,
                        paddingBottom: 50,
                        width: null,
                        height: null,
                        resizeMode: 'contain'}}
                    source={require('../content/img/logo.png')}
                />
                <TextInput
                    style={styles.textinputMail}
                    placeholder='Email'
                    onChangeText={(text) => this._mailTextInputChanged(text)}
                />
                <TextInput
                    style={styles.textinputPwd}
                    placeholder='Password'
                    onChangeText={(text) => this._passwordTextInputChanged(text)}
                    onSubmitEditing={() => this._login()}
                />
                <Button title='Login'
                        color="pink"
                        type='outline'
                        onPress={() => this._login()}/>
                <Text style={styles.titleText}>Not a member? Sign up!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        paddingBottom: 50
    },
    textinputMail: {
        height: 50,
        width: 250,
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        marginBottom: 0,
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'pink'
    },
    textinputPwd: {
        height: 50,
        width: 250,
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 5,
        marginBottom: 20,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'pink'
    },
    titleText: {
        color: 'pink',
        marginTop: 3
    }
})

export default Login

