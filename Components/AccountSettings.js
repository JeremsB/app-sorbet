// Components/AccountSettings.js
import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image, Text, TextInput, Alert} from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { updateUser } from "../API/UserAPI";

class AccountSettings extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            login:null,
            lastname:null,
            firstname:null,
            description:null,
        }
    }

    _navReturn() {
        this.props.navigation.navigate("SettingsUser");
    }

    _updateUser() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;

        let {login} = this.state;
        if (login == null) {login = userData.login;}
        let {firstname} = this.state;
        if (firstname == null) {firstname = userData.firstname;}
        let {lastname} = this.state;
        if (lastname == null) {lastname = userData.lastname;}
        let {description} = this.state;
        if (description == null) {description = userData.description;}

        fetch('https://sorbet.bet/api/user/update-user.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
                login: login,
                firstname: firstname,
                lastname: lastname,
                description: description,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'login_missing') {
                    Alert.alert("Pas de pseudo", "Faut un pseudo");
                } else if (responseJson === 'firstname_missing') {
                    Alert.alert("Pas de prénom", "Faut un prénom");
                } else if (responseJson === 'lastname_missing') {
                    Alert.alert("Pas de nom", "Faut un nom");
                } else if (responseJson === 'description_missing') {
                    Alert.alert("Pas de description", "Faut une description");
                } else if (responseJson === 'login_already') {
                    Alert.alert("Pseudo déjà utilisé", "Veuillez entrer un autre pseudo");
                } else if (responseJson === 'error') {
                    Alert.alert("error", "cheh");
                } else {
                    Alert.alert("Succès", "Mise à jour réussie !");
                    const action = { type: "USER_LOGIN", value: responseJson };
                    this.props.dispatch(action);
                    this._navReturn()
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        let userData = this.props.userData[0];
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30 }}
                    start={[1, 0]}
                    end={[0, 1]}
                >
                    <View style={styles.viewTopSettings}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => this._navReturn()}
                        >
                            <Image
                                style={{
                                    width: 15,
                                    height: 25,
                                    zIndex: 10,
                                }}
                                source={require('../content/img/pictos/retour_blanc.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.viewTitle}>
                            <Text style={styles.titleSettings}>Mon compte</Text>
                        </View>
                    </View>

                    <ScrollView>
                        <Text style={styles.label}>Pseudo</Text>
                        <TextInput
                            style={styles.viewInput}
                            defaultValue={userData.login}
                            onChangeText={login => this.setState({ login })}
                        />
                        <Text style={styles.label}>Prénom</Text>
                        <TextInput
                            style={styles.viewInput}
                            defaultValue={userData.firstname}
                            onChangeText={firstname => this.setState({ firstname })}
                        />
                        <Text style={styles.label}>Nom</Text>
                        <TextInput
                            style={styles.viewInput}
                            defaultValue={userData.lastname}
                            onChangeText={lastname => this.setState({ lastname })}
                        />
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            numberOfLines={3}
                            defaultValue={userData.description}
                            onChangeText={description => this.setState({ description })}
                        />
                        <TouchableOpacity
                            style={styles.divBtnSubmit}
                            onPress={() => this._updateUser()}>
                            <Text style={styles.textBtn}>Mettre à jour</Text>
                        </TouchableOpacity>
                    </ScrollView>
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
    viewTopSettings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    viewTitle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
    },
    titleSettings: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
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
        textDecorationColor: 'transparent',
    },
    textArea: {
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        height: 100,
        justifyContent: "flex-start",
        color: '#ffffff',
        textDecorationColor: 'transparent',
    },
    viewInputDate: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
    },
    divBtnSubmit: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'center',
        width: '100%',
        marginTop: '5%',
    },
    textBtn: {
        color: '#ff978d',
        textTransform: 'uppercase',
        fontSize: 20,
    },
})

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(AccountSettings)