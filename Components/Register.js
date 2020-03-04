// Components/Register.js
import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, Alert, TouchableOpacity, Switch, KeyboardAvoidingView} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {LinearGradient} from "expo-linear-gradient";
import { ScrollView } from 'react-native-gesture-handler';
import moment from "moment";

TextInput.defaultProps.selectionColor = 'white'; // Couleur du curseur IOS reste à trouver pour Android


class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        login:'',
        lastname:'',
        firstname:'',
        birth:'',
        email:'',
        password:'',
        passwordConf:'',
        notif: false,
        cgu: false,
        newsletter: false,
        majeur: false
        }
    }

    _navLogin() {
        this.props.navigation.navigate("Login");
    }

    _register = () =>{
        const {login} = this.state;
        const {lastname} = this.state;
        const {firstname} = this.state;
        const {birth} = this.state;
        const {email} = this.state;
        const {password} = this.state;
        const {passwordConf} = this.state;
        const {notif} = this.state;
        const {cgu} = this.state;
        const {newsletter} = this.state;
        const {majeur} = this.state;

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
                birth: birth,
                email: email,
                password: password,
                passwordConf: passwordConf,
                notif: notif,
                cgu: cgu,
                newsletter: newsletter,
                majeur: majeur
            })
        })
        .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'email_missing')
                    Alert.alert("Champ manquant","Veuillez entrer un email")
                else if (responseJson == 'lastname_missing')
                    Alert.alert("Champ manquant","Veuillez entrer un nom")
                else if (responseJson == 'firstname_missing')
                    Alert.alert("Champ manquant","Veuillez entrer un prénom")
                else if (responseJson == 'login_missing')
                    Alert.alert("Champ manquant","Veuillez entrer un nom d'utilisateur")
                else if (responseJson == 'password_missing')
                    Alert.alert("Champ manquant","Veuillez entrer un mot de passe")
                else if (responseJson == 'email_already')
                    Alert.alert("Email déja utilisé","Connectez vous")
                else if (responseJson == 'login_already')
                    Alert.alert("Nom d'utilisateur déja utilisé","Veuillez saisir un autre nom d'utilisateur")
                else if (responseJson == 'diff_password')
                    Alert.alert("Mots de passes différents","Veuillez saisir deux mots de passes identiques")
                else if (responseJson == 'under_18')
                    Alert.alert("18+","Vous devez certifier être majeur pour continuer")
                else if (responseJson == 'cgu_missing')
                    Alert.alert("Conditions générales d'utilisation","Vous devez accepter nos CGU pour continuer")
                else if (responseJson == 'query_fail')
                    Alert.alert("Authentification","Echec de l'authentifiaction, merci de reéssayer ultérieurement")
                else if (responseJson == 'ok')
                    Alert.alert("Inscription réussie","Bienvenue sur Sorbet', vous pouvez à présent vous connecter!"),
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
                    style={{ paddingTop: 30, paddingBottom: 50, paddingLeft: 30, paddingRight: 30 }}
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
                    <KeyboardAvoidingView style={styles.container} behavior="height" enabled="false">
                        <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollVue}>
                            <View>
                                <Text style={styles.label}>Nom d'utilisateur</Text>
                                <TextInput
                                    style={styles.viewInput}
                                    // autoFocus={true}
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
                                <Text style={styles.label}>Date de naissance</Text>
                                <DatePicker
                                    style={styles.viewInputDate}
                                    date={this.state.birth}
                                    mode="date"
                                    showIcon={false}
                                    format="YYYY-MM-DD"
                                    placeholder={"YYYY-MM-DD"}
                                    minDate={moment().subtract(500, "years")}
                                    maxDate={moment().subtract(18, "years")}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateInput: {
                                            marginTop: 10,
                                            borderColor: 'rgba(0, 0, 0, 0)'
                                        },
                                        dateText: {
                                            fontSize: 16,
                                            color: '#ffffff',
                                        },
                                        PlaceholderText: {
                                            fontSize: 16,
                                            color: 'rgba(0, 0, 0, 0)',
                                        }
                                    }}
                                    onDateChange={(birth) => { this.setState({ birth: birth })}                                    }
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
                                    secureTextEntry={true}
                                    onChangeText= {passwordConf => this.setState({passwordConf})}
                                />
                                <View style={styles.viewSwitch}>
                                    <Text style={styles.textSwitch}>Activer les notifications</Text>
                                    <Switch
                                        value={this.state.notif}
                                        onValueChange={(value) => {
                                            this.setState({
                                                notif: value
                                            })
                                        }}/>
                                </View>
                                <View style={styles.viewSwitch}>
                                    <Text style={styles.textSwitch}>J'accepte les CGU</Text>
                                    <Switch
                                        value={this.state.cgu}
                                        onValueChange={(value) => {
                                            this.setState({
                                                cgu: value
                                            })
                                        }}/>
                                </View>
                                <View style={styles.viewSwitch}>
                                    <Text style={styles.textSwitch}>J'accepte de recevoir des mails</Text>
                                    <Switch
                                        value={this.state.newsletter}
                                        onValueChange={(value) => {
                                            this.setState({
                                                newsletter: value
                                            })
                                        }}/>
                                </View>
                                <View style={styles.viewSwitch}>
                                    <Text style={styles.textSwitch}>En cochant cette case je certifie être majeur</Text>
                                    <Switch
                                        value={this.state.majeur}
                                        onValueChange={(value) => {
                                            this.setState({
                                                majeur: value
                                            })
                                        }}/>
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
    container: {
        marginBottom: 50,
        height: '67%',
    },
    ScrollVue : {
        height: '100%',
    },
    label: {
        color: '#ffffff',
        marginBottom: 10,
        marginTop: 10,
    },
    viewImg: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 40,
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
    viewInputDate: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
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
        width: '80%',
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

