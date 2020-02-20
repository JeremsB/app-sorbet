// Components/Register.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native'

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        login:'',
        lastname:'',
        firstname:'',
        email:'',
        password:'',
        //passwordConf:''
        }
    }

    _register = () =>{
        const {login} = this.state;
        const {lastname} = this.state;
        const {firstname} = this.state;
        const {email} = this.state;
        const {password} = this.state;
        //const {passwordConf} = this.state;

        fetch('https://sorbet.bet/api/register.php', {
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                login: login,
                lastname: lastname,
                firstname: firstname,
                email: email,
                password: password,
            })
        })
        .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.main_container}>

                <TextInput
                    style={styles.textinputMail}
                    placeholder='Login'
                    onChangeText= {login => this.setState({login})}
                />
                <TextInput
                    style={styles.textinputMail}
                    placeholder='Last name'
                    onChangeText= {lastname => this.setState({lastname})}
                />
                <TextInput
                    style={styles.textinputMail}
                    placeholder='First name'
                    onChangeText= {firstname => this.setState({firstname})}
                />
                {/* TODO Birth à ajouter */}
                <TextInput
                    style={styles.textinputMail}
                    placeholder='Email'
                    onChangeText= {email => this.setState({email})}
                />
                <TextInput
                    style={styles.textinputPwd}
                    placeholder='Password'
                    onChangeText= {password => this.setState({password})}
                />
                {/*<TextInput
                    style={styles.textinputPwd}
                    placeholder='Confirm Password'
                    onChangeText= {passwordConf => this.setState({passwordConf})}
                />*/}
                <Button title='Register'
                        color="pink"
                        type='outline'
                        onPress={() => this._register()}/>
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
        fontSize: 50,
        color: 'pink',
        textAlign: 'center',
        marginBottom: 20
    }
})

export default Register

