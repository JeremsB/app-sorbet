// Components/Register.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Image, Alert, TouchableOpacity, Switch, KeyboardAvoidingView} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {LinearGradient} from "expo-linear-gradient";
import { ScrollView } from 'react-native-gesture-handler';
TextInput.defaultProps.selectionColor = 'white'; // Couleur du curseur IOS reste à trouver pour Android


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
        switchValue: false,
        }
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
        console.log('Switch is: ' + value)
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
                    style={{ paddingTop: 30, paddingBottom: 50, paddingLeft: 50, paddingRight: 50 }}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View>
                        <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: -45,
                            }}
                            source={require('../content/img/logo-white.png')}
                        />
                    </View>
                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>

                            <View>
                                <Text style={styles.label}>Nom d'utilisateur</Text>
                                <TextInput
                                    style={styles.viewInput}
                                    autoFocus={true}
                                    //placeholder='Login'
                                    onChangeText={login => this.setState({ login })}
                                />
                                <Text style={styles.label}>Nom</Text>
                                <TextInput
                                    style={styles.viewInput}
                                    //placeholder='Last name'
                                    onChangeText={lastname => this.setState({ lastname })}
                                />
                                <Text style={styles.label}>Prénom</Text>
                                <TextInput
                                    style={styles.viewInput}
                                    //placeholder='First name'
                                    onChangeText={firstname => this.setState({ firstname })}
                                />
                                {/* TODO Birth à ajouter */}
                                <Text style={styles.label}>Date de naissance</Text>
                                <DatePicker
                                    style={styles.viewInput}
                                    date={this.state.date}
                                    mode="date"
                                    //placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2000-05-01"
                                    maxDate="2030-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                    }}
                                    onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={styles.viewInput}
                                    //placeholder='Email'
                                    onChangeText={email => this.setState({ email })}
                                />
                                <Text style={styles.label}>Mot de passe</Text>
                                <TextInput
                                    style={styles.viewInput}
                                    secureTextEntry={true}
                                    onChangeText={password => this.setState({ password })}
                                />
                                <Text style={styles.label}>Confirmer le mot de passe</Text>
                                <TextInput
                                    style={styles.viewInput}
                                // onChangeText= {passwordConf => this.setState({passwordConf})}
                                />
                                <View style={styles.viewSwitch}>
                                    <Text style={styles.textSwitch}>Activer les notifications</Text>
                                    <Switch
                                        toggleSwitch={this.toggleSwitch}
                                        switchValue={this.state.switchValue} />
                                </View>
                                <View style={styles.viewSwitch}>
                                    <Text style={styles.textSwitch}>J'accepte les CGU</Text>
                                    <Switch
                                        toggleSwitch={this.toggleSwitch}
                                        switchValue={this.state.switchValue} />
                                </View>
                                <View style={styles.viewSwitch}>
                                    <Text style={styles.textSwitch}>J'accepte de recevoir des mails</Text>
                                    <Switch
                                        toggleSwitch={this.toggleSwitch}
                                        switchValue={this.state.switchValue} />
                                </View>
                            </View>
                            <View style={styles.viewBtn}>
                                <TouchableOpacity
                                    style={styles.divBtn}
                                    onPress={() => this._register()}>
                                    <Text style={styles.textBtn}>Inscris toi !</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this._navLogin()}>
                                    <Text style={styles.titleText}>Déjà inscrit ?</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'column',
        width: '100%',
    },
    label: {
        color: '#ffffff',
        marginBottom: 10,
        marginTop: 10,
    },
    viewImg: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewForm: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        borderRadius: 10,
        height: 50,
        marginBottom: 0,
        alignItems: 'center',
        color: '#ffffff',
        paddingLeft: 20,
    },
    textInputEmail: {
        height: 60,
        width: '100%',
    },
    textInputPwd: {
        height: 60,
        width: '100%',
    },
    viewSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    textSwitch: {
        color: '#ffffff',
        fontSize: 12,
    },
    viewBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
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
        marginTop: 10
    }
})

export default Register

