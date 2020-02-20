// Components/Register.js
import React from 'react'
import {StyleSheet, View, TextInput, Button, Text, Image, Alert, TouchableOpacity} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {LinearGradient} from "expo-linear-gradient";


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

    _navLogin() {
        this.props.navigation.navigate("Login");
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
                if (responseJson == 'email_already')
                    Alert.alert("Email déja utilisé","Connectez vous")
                else if (responseJson == 'query_fail')
                    Alert.alert("Authentification","Echec de l'authentifiaction, merci de reéssayer ultérieurement")
                else if (responseJson == 'ok')
                    this.props.navigation.navigate("Login")
                else
                    Alert.alert("Erreur", "Une erreur est survenue")
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 40, paddingLeft: 40, paddingRight: 40}}
                    start={[1, 0]}
                    end={[0, 1]}>
                <Text>Pseudo</Text>
                <TextInput
                    style={styles.viewInputEmail}
                    //placeholder='Login'
                    onChangeText= {login => this.setState({login})}
                />
                <Text>Nom</Text>
                <TextInput
                    style={styles.viewInputEmail}
                    //placeholder='Last name'
                    onChangeText= {lastname => this.setState({lastname})}
                />
                <Text>Prénom</Text>
                <TextInput
                    style={styles.viewInputEmail}
                    //placeholder='First name'
                    onChangeText= {firstname => this.setState({firstname})}
                />
                {/* TODO Birth à ajouter */}
                <Text>Date de naissance</Text>
                <DatePicker
                    style={styles.viewInputEmail}
                    date={this.state.date}
                    mode="date"
                    //placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2014-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <Text>Email</Text>
                <TextInput
                    style={styles.viewInputEmail}
                    //placeholder='Email'
                    onChangeText= {email => this.setState({email})}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.viewInputEmail}
                    //placeholder='Password'
                    onChangeText= {password => this.setState({password})}
                />
                {/*<TextInput
                    style={styles.textinputPwd}
                    placeholder='Confirm Password'
                    onChangeText= {passwordConf => this.setState({passwordConf})}
                />*/}
                <View style={styles.viewBtn}>
                    <TouchableOpacity
                        style={styles.divBtn}
                        onPress={() => this._register()}>
                        <Text style={styles.textBtn}>Connecte toi !</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._navLogin()}>
                        <Text style={styles.titleText}>Déja inscrit ?</Text>
                    </TouchableOpacity>
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

export default Register

