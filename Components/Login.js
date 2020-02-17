// Components/Login.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

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
                    colors={['#ff978d', '#E577A2']}
                    style={{flex:1, paddingTop: 50, paddingBottom: 40, paddingLeft: 40, paddingRight: 40}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    {/* <Image

                    /> */}
                    <TextInput
                        style={styles.textinputEmail}
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
                        color="white"
                        type='outline'
                        onPress={() => this._login()} />
                    <Text style={styles.titleText}>Not a member? Sign up!</Text>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: "column",
        height: 500
    },
    textinputEmail: {
        flex: 2,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        paddingLeft: 5,
        marginBottom: 0,
        color: 'pink'
    },
    textinputPwd: {
        flex: 2,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 15,
        paddingLeft: 5,
        marginBottom: 0,
        color: 'pink' 
    },
    titleText: {
        color: 'pink',
        marginTop: 3
    }
})

export default Login

