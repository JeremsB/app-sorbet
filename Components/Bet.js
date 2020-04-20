// Components/Bet.js
import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground,
    TouchableOpacity,
    Animated,
    Easing,
    Button,
    TextInput
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ActivityIndicator } from 'react-native-paper';
import {answerUserBet, getBetAnswers, getBetInfos} from '../API/BetAPI'
import UserCard from "./UserCard";
import {FlatList} from "react-native-gesture-handler";
import {color} from "react-native-reanimated";
import {connect} from "react-redux";

class Bet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            bet: undefined,
            answers: undefined,
            userAnswer: undefined,
            topValue: new Animated.Value(0),
            varAnim: 0,
            message: undefined,
            showTheThing: true,
        }
        this.RotateValueHolder = new Animated.Value(0);
    }

    _startScroll() {
        if (this.state.varAnim == 0) {
            Animated.spring(
                this.state.topValue,
                {
                    toValue: 350,
                    duration: 300,
                }
            )
            .start();
            this.state.varAnim = 1
            this.setState({showTheThing: false})
        } else if (this.state.varAnim == 1){
            Animated.spring(
                this.state.topValue,
                {
                    toValue: 0,
                    duration: 300,
                }
            )
            .start();
            this.state.varAnim = 0
            this.setState({showTheThing: true})
        }
    };

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce,
        }).start(() => this.StartImageRotateFunction());
    }

    _displayLoading() {
        if (this.state.isLoading) {

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
                                    width: 50,
                                    height: 48,
                                }]
                            }
                        />
                    </View>
                </LinearGradient>
            )
        }
    }

    _displayBet() {
        const { bet } = this.state;
        if (bet != undefined) {
            return (
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, paddingBottom: 50}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <ImageBackground
                        source={{uri: 'https://sorbet.bet/categories/'+bet.category+'.jpg'}}
                        style={styles.divCard}
                        imageStyle={{ borderRadius: 30 }}
                    >
                        <View style={styles.contentCard}>
                            <Image
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 15,
                                    zIndex: 50,
                                }}
                                source={{ uri: 'https://sorbet.bet/users/' + bet.picture }}
                            />
                            <Text style={styles.nameBet}>{bet.login}</Text>
                            <View style={styles.viewInfosLoc}>
                                <View style={styles.row}>
                                    <Image
                                        style={{
                                            width: 15,
                                            height: 15,
                                        }}
                                        source={require('../content/img/pictos/accueil_blanc.png')}
                                    />
                                    <Text style={styles.titleLocation}>{bet.localisation}</Text>
                                </View>
                                <View style={styles.viewNbBet}>
                                    <Image
                                        style={{
                                            width: 15,
                                            height: 15,
                                        }}
                                        source={require('../content/img/pictos/accueil_blanc.png')}
                                    />
                                    <Text style={styles.titleNbBet}>83 Sorbets</Text>
                                </View>
                                
                            </View>
                            <Text style={styles.questionBet}>{bet.label}</Text>
                        </View>
                        <Animated.View style={[styles.viewScroll, {top: this.state.topValue}]}>
                            <Text style={styles.description}>{bet.description}</Text>
                            <TouchableOpacity style={styles.viewBottomCard}
                                onPress={() => this._startScroll()}
                            >
                                <Text style={styles.titleCat}>{bet.category}</Text>
                                <View style={styles.viewBtn}></View>
                                <Text style={styles.titlePromo}>{bet.price}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </ImageBackground>
                    <View style={styles.red}>
                    {this.state.showTheThing &&
                        this._displayAnswers()
                    }
                    </View>
                    <View style={styles.testt}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => this._startScroll()}>
                            <Text style={styles.textBtn}>Dérouler</Text>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>
            )
        }
    }

    _displayAnswers(){
        const { answers } = this.state;
        const { bet } = this.state;
        console.log(bet);
        console.log(answers);
        if (answers != "no_bet_answers") {

            return (

                <FlatList
                    data={answers}
                    keyExtractor={(item) => item.id_answer}
                    renderItem={({item}) =>
                        <TouchableOpacity style={styles.viewAnswers}
                                          onPress={() => this.answerProBet(item.id)}
                        >
                            <Text>{item.answer}</Text>
                            <Text>{item.id}</Text>
                        </TouchableOpacity>}
                />
            )

        } else {
            if (bet.answered == 0) {
                return (
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Ta réponse'
                            placeholderTextColor='#ffffff'
                            onChangeText={userAnswer => this.setState({ userAnswer })}
                        />
                        <View style={styles.viewBtn2}>
                            <TouchableOpacity
                                style={styles.divBtn}
                                onPress={() => this.answerUserBet()}>
                                <Text style={styles.textBtn}>Répondre</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            } else if (bet.answered == 1) {
                return (

                    <Text>Vous avez déjà répondu à ce pari</Text>

                )
            }
        }
    }

    answerUserBet(){
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        answerUserBet(this.props.navigation.state.params.idBet,id_user,this.state.userAnswer).then(data => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_bet_infos') {
                    Alert.alert("Pas d'infos", "Veuillez ajouter des amis");
                } else if (responseJson == 'no_id') {
                    Alert.alert("Pas d'id", "Faut un id");
                } else {
                    alert(responseJson);
                }
            })
        //TODO ça marche faut juste faire un redirect qqupart genre vers home
        //Ou alors sur la page du paris avec genre "vous avez déjà répondu"
    }

    answerProBet(id){
        alert(id);
        //TODO la fonction qui ajoute la réponse en base
        //Créer ligne dans t_bet_user_answer
        //Créer ligne dans t_bet_participant avec answered à 1
    }

    componentDidMount() {
        this.StartImageRotateFunction();
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        getBetInfos(this.props.navigation.state.params.idBet,id_user).then(data => {
            this.setState({
                bet: data,
                isLoading: false,
            })
        })
        getBetAnswers(this.props.navigation.state.params.idBet).then(data => {
            this.setState({
                answers: data
            })
        })
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayBet()}
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
    divCard: {
        height: 275,
    },
    contentCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: 275,
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 10,
    },
    nameBet: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    viewInfosLoc: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewNbBet: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    titleLocation: {
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 5,
    },
    titleNbBet: {
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 5,
    },
    questionBet: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
    },
    description: {
        fontSize: 16,
        color: '#F38696',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    titleCat: {
        color: '#F38696',
        textTransform: 'uppercase',
        fontSize: 14,
        width: '40%',
    },
    titlePromo: {
        color: '#F38696',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'right',
        width: '40%',
    },
    viewScroll: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        zIndex: -1,
        height: 400,
        marginTop: -350,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 75,
        paddingBottom: 17,
    },
    viewBottomCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'blue',
        zIndex: 2,
    },
    viewBtn: {
        width: 50,
        height: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 10,
    },
    red: {
        marginTop: '15%',
        paddingLeft: '5%',
        paddingRight: '5%',
        zIndex: 0,
        height: 100
    },
    viewAnswers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 10,
    },
    textInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
        alignItems: 'center',
        color: '#ffffff',
        paddingLeft: 20,
    },
    viewBtn2: {
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
    testt: {
        //marginTop: '120%',
        paddingLeft: '30%',
        paddingRight: '30%',
        //backgroundColor: 'rgba(0, 0, 0, 0.15)',
        //borderRadius: 10,
        //marginTop:'60%'
        bottom: -260,
        //flex: 2,
        //position: 'fixed',
    }
})

//Connecte le composant à redux (ici on récupère seulement le state global "userData"
const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Bet)

