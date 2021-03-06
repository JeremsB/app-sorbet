// Components/Login.js
import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Alert, ImageBackground, Animated, Easing } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import {getBetsParti, getUserBets} from "../API/BetAPI";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            timePassed: false,
            userEmail:'',
            userPassword:'',
            user:'',
        }
        this.RotateValueHolder = new Animated.Value(0);
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
                'Content-type': 'application/json',
            },
            body:JSON.stringify({
                email: userEmail,
                password: userPassword,
            })
        })
        .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'champs') {
                    Alert.alert("Erreur formulaire", "Veuillez remplir tous les champs")
                } else if (responseJson == 'email_inconnu') {
                    Alert.alert("Authentification incorrecte", "Email / Mot de passe incorrect")
                } else if (responseJson == 'Permission non accordée') {
                    Alert.alert("Permission non accordée", "Service inacessible")
                } else {
                    this._globalUser(responseJson);
                    this.setState({user: responseJson});
                    this._getFollows(this.state.user.id_user);
                    this._getFollowsCreate(this.state.user.id_user);
                    this._getBets(this.state.user.id_user);
                    this._getUserBets(this.state.user.id_user);
                    this._getBetsParticipes(this.state.user.id_user);
                    this._getOtherUsers(this.state.user.id_user);
                    //console.log(this.state.user.id_user)
                    this.props.navigation.navigate("Profil");
                }
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

    _getFollows(id_user) {
        fetch('https://sorbet.bet/api/user/get-follows.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this.setState({follows: responseJson});
                this._globalFollows(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _globalFollows(responseJson) {
        const action = { type: "USER_FOLLOWS", value: responseJson };
        this.props.dispatch(action);
    }

    _getBets(id_user) {
        fetch('https://sorbet.bet/api/get-bets.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                    this._globalBets(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _globalBets(responseJson) {
        const action = { type: "OTHER_BETS", value: responseJson };
        this.props.dispatch(action);
    }

    _getUserBets(id_user) {
        getUserBets(id_user).then(data => {
            this._globalUserBets(data)
        })
    }

    _globalUserBets(responseJson) {
        const action = { type: "USER_BETS", value: responseJson };
        this.props.dispatch(action);
    }

    _getBetsParticipes(id_user) {
        getBetsParti(id_user).then(data => {
            this._globalBetsParticipes(data)
        })
    }

    _globalBetsParticipes(responseJson) {
        const action = { type: "PARTICIPE_BETS", value: responseJson };
        this.props.dispatch(action);
    }

    _getOtherUsers(id_user) {
        fetch('https://sorbet.bet/api/user/get-others-users.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables (T'es ami avec tout le monde");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this._globalOtherUsers(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _globalOtherUsers(responseJson) {
        const action = { type: "OTHER_USERS", value: responseJson };
        this.props.dispatch(action);
    }

    _getFollowsCreate(id_user) {
        fetch('https://sorbet.bet/api/user/get-follows-create-bet.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this._globalFollowsCreate(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _globalFollowsCreate(responseJson) {
        const action = { type: "USER_FOLLOWS_CREATE", value: responseJson };
        this.props.dispatch(action);
    }

    componentDidMount() {
        this.StartImageRotateFunction();

        setTimeout(() => {
            this.setState({ timePassed: true })
        }, 3000);
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 1900,
            easing: Easing.bounce,
            //useNativeDriver: true
        }).start(() => this.StartImageRotateFunction());
    }

    _displayLoading() {
            const RotateData = this.RotateValueHolder.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
            });

            return (
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewMiddleLoading}>
                        <Animated.Image
                            source={require('../content/img/pictos/accueil.png')}
                            style={[
                                styles.imgLoad,
                                {
                                    transform: [{ rotate: RotateData }],
                                    width: 52,
                                    height: 50.5,
                                    //width: 50,
                                    //height: 48,
                                }]
                            }
                        />
                    </View>
                </LinearGradient>
            )
        }

    _page() {
        return (
            <Swiper
                loop= {false}
                dotColor= 'rgba(0, 0, 0, 0.2)'
                activeDotColor= '#ffffff'
            >
                <View style={styles.main_container}>
                    <ImageBackground
                        source={require('../content/img/bg-slide-1.png')}
                        style={styles.bgFull}
                    >
                        <View style={styles.viewContainer}>
                            <View style={styles.viewTop}>
                                <Image
                                    style={{
                                        alignItems: 'center',
                                        width: 100,
                                        height: 107,
                                        marginBottom: 10,
                                    }}
                                    source={require('../content/img/sorbet_blanc.png')}
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
                            <View style={styles.viewMiddle}>
                                <Text style={styles.textMiddle}>Parie seul ou avec tes amis et tente de remporter une multitude de gains proposés par nos partenaires</Text>
                            </View>
                            <View style={styles.viewBottom}>
                                <Text style={styles.textBottom1}>N'attends plus,</Text>
                                <Text style={styles.textBottom2}>Swipe et connecte-toi</Text>
                            </View>
                        </View>

                    </ImageBackground>
                </View>
                <View style={styles.main_container}>
                    <ImageBackground
                        source={require('../content/img/bg-slide-2.png')}
                        style={styles.bgFull}
                    >
                        <View style={styles.viewContainer}>
                            <View style={styles.viewTop}>
                                <Image
                                    style={{
                                        alignItems: 'center',
                                        width: 100,
                                        height: 107,
                                        marginBottom: 10,
                                    }}
                                    source={require('../content/img/sorbet_blanc.png')}
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
                            <View style={styles.viewMiddle}>

                            </View>
                            <View style={styles.viewBottom}>
                                <Text style={styles.textBottom1}>Goûtez au plaisir</Text>
                                <Text style={styles.textBottom2}>Des paris entre amis</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.main_container}>
                    <LinearGradient
                        colors={['#E577A2', '#ff978d']}
                        style={{ flex: 1, paddingTop: 30, paddingBottom: 50, paddingLeft: 30, paddingRight: 30 }}
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
                                source={require('../content/img/sorbet_blanc.png')}
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
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            marginLeft: 5,
                                            marginRight: 5,
                                            width: 25,
                                            height: 21,
                                        }}
                                        source={require('../content/img/pictos/utilisateur_blanc.png')}
                                    />
                                </View>
                                <TextInput
                                    //caretHidden
                                    style={styles.textInputEmail}
                                    placeholder='Adresse email'
                                    placeholderTextColor='#ffffff'
                                    onChangeText={userEmail => this.setState({ userEmail })}
                                />
                            </View>
                            <View style={styles.viewInputPwd}>
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 30,
                                        }}
                                        source={require('../content/img/pictos/cadenas_blanc.png')}
                                    />
                                </View>
                                <TextInput
                                    style={styles.textInputPwd}
                                    secureTextEntry={true}
                                    placeholder='Mot de passe'
                                    placeholderTextColor='#ffffff'
                                    onChangeText={userPassword => this.setState({ userPassword })}
                                    onSubmitEditing={() => this._login()}
                                />
                            </View>
                        </View>
                        <View style={styles.viewBtn}>
                            <TouchableOpacity
                                style={styles.divBtn}
                                onPress={() => this._login()}>
                                <Text style={styles.textBtn}>Connecte-toi !</Text>
                            </TouchableOpacity>
                            <View style={styles.viewFgtPsw}>
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
                    </LinearGradient>
                </View>
            </Swiper>
        )
    }

    setTimePassed() {
        this.setState({ timePassed: true });
    }

    render() {
        if (!this.state.timePassed) {
            return this._displayLoading();
        } else {
            return this._page();
        }
        // return (
        //     <View style={styles.main_container}>
        //         {this._displayLoading()}
        //         {this._page()}
        //     </View>
        // )
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
    loading: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewMiddleLoading: {
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLoad: {
        width: 100,
        height: 100,
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
    viewIcon: {
        width: '15%',
        justifyContent: 'center',
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
    },
    bgFull: {
        width: '100%',
        height: '100%',
    },
    viewContainer: {
        flex: 1,
        marginTop: 70,
        marginBottom: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    viewTop: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewMiddle: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMiddle: {
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    viewBottom: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBottom1: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 15,
    },
    textBottom2: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 22,
    },
})

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Login)

