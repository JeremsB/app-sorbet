// Components/BetUser.js
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
    TextInput
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ActivityIndicator } from 'react-native-paper';
import {getUserAnswer, getUserBetInfos, officialAnswer} from '../API/BetAPI'
import {connect} from "react-redux";
import {FlatList} from "react-native-gesture-handler";
import {Emitter} from "react-native-particles";

class BetUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            bet: undefined,
            topValue: new Animated.Value(0),
            officialAnswer: undefined,
            userAnswer: "",
        }
        this.RotateValueHolder = new Animated.Value(0);
    }

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
                    style={{ flex: 1, justifyContent:'center', alignItems: 'center', paddingBottom: 50 }}
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

    _officialAnswerBet(id_bet) {
        officialAnswer(id_bet, this.state.officialAnswer).then(data => {
            this.setState({
                message: data,
            })
        })
        alert(this.state.message);
    }

    _displayBet() {
        const { bet } = this.state
        if (bet != undefined) {
            return (
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, paddingBottom: 50 }}
                    start={[1, 0]}
                    end={[0, 1]}>

                    <View style={styles.viewBlanche}>
                        <View style={styles.viewImgBg}>
                            <ImageBackground
                                source={{uri: 'https://sorbet.bet/categories/'+bet.category+'.jpg'}}
                                style={styles.viewImgBg}
                                imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}
                            >
                                <View style={styles.viewContent}>

                                    <Image
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 15,
                                            zIndex: 50,
                                        }}
                                        source={{ uri: 'https://sorbet.bet/users/' + bet.picture }}
                                    />
                                    <Text style={styles.creatorLabel}>{bet.login}</Text>
                                    <View>
                                        <View style={styles.viewTimeBet}>
                                            <Image
                                                style={{
                                                    width: 16,
                                                    height: 16,
                                                }}
                                                source={require('../content/img/pictos/temps_blanc.png')}
                                            />
                                            <Text style={styles.txtTimeBet}>10 Jours</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.txtTimeBet}>{bet.label}</Text>
                                    <Text style={styles.questionBet}>{bet.description}</Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <TouchableOpacity style={styles.viewBottomCard}>
                            <View style={styles.viewCat}>
                                <Text style={styles.txtCat}>{bet.category}</Text>
                            </View>
                            <View style={styles.viewPrice}>
                                <Text style={styles.txtPrice}>{bet.price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {this._displayAnswers()}
                </LinearGradient>
            )
        }
    }

    _displayAnswers(){
        const { bet } = this.state;
        const { userAnswer } = this.state;
        let test = this.state.userAnswer.user_answer;
        if (bet.open == 1) { //Pari Ouvert
            if (bet.waiting == 0) {
                return (

                    <View style={styles.viewAnswerInput}>
                        <TextInput
                            style={styles.answerInput}
                            placeholder='Réponse officielle'
                            placeholderTextColor='#ffffff'
                            onChangeText={officialAnswer => this.setState({officialAnswer})}
                        />
                        <View style={styles.viewBtn}>
                            <TouchableOpacity
                                style={styles.divBtn}
                                onPress={() => this._officialAnswerBet(bet.id_bet)}>
                                <Text style={styles.textBtn}>Finaliser le Sorbet'</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            } else if (bet.waiting == 1) {
                return (

                    <Text style={styles.textFinish}>Au moins un utilisateur doit avoir répondu au pari pour que la réponse
                        officielle soit donnée</Text>

                )
            }
        } else if (bet.open == 0){ //Pari Fermé

            if (bet.win == 0) { //Si l'utilisateur n'a pas gagné

                return (

                    <View>
                        <View>
                            <Text style={styles.textFinish}>Tu as perdu...</Text>
                        </View>
                        <Emitter
                            numberOfParticles={10}
                            emissionRate={1}
                            interval={10}
                            particleLife={2000}
                            direction={-90}
                            spread={360}
                            gravity={3}
                            fromPosition={{ x: 240, y: 0 }}
                        >
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 50,
                                    height: 53.5,
                                    marginBottom: 10,
                                    marginTop: 40,
                                }}
                                source={require('../content/img/pictos/dislike.png')}
                            />
                        </Emitter>
                        <Emitter
                            numberOfParticles={10}
                            emissionRate={1}
                            interval={10}
                            particleLife={2000}
                            direction={-90}
                            spread={360}
                            gravity={3}
                            fromPosition={{ x: 160, y: 0 }}
                        >
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 50,
                                    height: 53.5,
                                    marginBottom: 10,
                                    marginTop: 40,
                                }}
                                source={require('../content/img/pictos/dislike.png')}
                            />
                        </Emitter>
                        <Emitter
                            numberOfParticles={10}
                            emissionRate={1}
                            interval={10}
                            particleLife={2000}
                            direction={-90}
                            spread={360}
                            gravity={3}
                            fromPosition={{ x: 80, y: 0 }}
                        >
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 50,
                                    height: 53.5,
                                    marginBottom: 10,
                                    marginTop: 40,
                                }}
                                source={require('../content/img/pictos/dislike.png')}
                            />
                        </Emitter>
                        <View style={styles.viewAnswerInput}>
                            <Text style={styles.labelAnswer}>Ta réponse :</Text>
                            <Text style={styles.answerText}>{userAnswer.user_answer}</Text>
                            <Text style={styles.labelAnswer}>La réponse officielle :</Text>
                            <Text style={styles.officialAnswerText}>{bet.answer}</Text>
                        </View>
                    </View>
                )
            } else if (bet.win == 1) { //Si l'utilisateur a gagné
                return (
                    <View>
                        <View>
                            <Text style={styles.textFinish}>Tu as gagné !</Text>
                        </View>
                        <Emitter
                            numberOfParticles={10}
                            emissionRate={1}
                            interval={10}
                            particleLife={2000}
                            direction={-90}
                            spread={360}
                            gravity={3}
                            fromPosition={{ x: 240, y: 0 }}
                        >
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 50,
                                    height: 53.5,
                                    marginBottom: 10,
                                    marginTop: 40,
                                }}
                                source={require('../content/img/sorbet_blanc.png')}
                            />
                        </Emitter>
                        <Emitter
                            numberOfParticles={10}
                            emissionRate={1}
                            interval={10}
                            particleLife={2000}
                            direction={-90}
                            spread={360}
                            gravity={3}
                            fromPosition={{ x: 160, y: 0 }}
                        >
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 50,
                                    height: 53.5,
                                    marginBottom: 10,
                                    marginTop: 40,
                                }}
                                source={require('../content/img/sorbet_blanc.png')}
                            />
                        </Emitter>
                        <Emitter
                            numberOfParticles={10}
                            emissionRate={1}
                            interval={10}
                            particleLife={2000}
                            direction={-90}
                            spread={360}
                            gravity={3}
                            fromPosition={{ x: 80, y: 0 }}
                        >
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 50,
                                    height: 53.5,
                                    marginBottom: 10,
                                    marginTop: 40,
                                }}
                                source={require('../content/img/sorbet_blanc.png')}
                            />
                        </Emitter>
                        <View style={styles.viewAnswerInput}>
                            <Text style={styles.labelAnswer}>Ta réponse :</Text>
                            <Text style={styles.answerText}>{test}</Text>
                            <Text style={styles.labelAnswer}>La réponse officielle :</Text>
                            <Text style={styles.officialAnswerText}>{bet.answer}</Text>
                        </View>
                    </View>
                )
            }
        }
    }

    componentDidMount() {
        this.StartImageRotateFunction();
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        getUserBetInfos(this.props.navigation.state.params.idBet, id_user).then(data => {
            this.setState({
                bet: data,
                isLoading: false,
            })
        })
        getUserAnswer(id_user,this.props.navigation.state.params.idBet).then(data => {
            this.setState({
                userAnswer: data
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
    creatorLabel: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingVertical: 6,
    },
    questionBet: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: '3%',
        fontSize: 16,
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    viewTimeBet: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtTimeBet: {
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 5,
        marginTop: '1%'
    },
    viewImgBg: {
        height: '94.5%',
        position: 'relative',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        zIndex: 2
    },
    viewContent: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '94.5%',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '5%',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        //elevation: 10,
        position: 'relative',
        zIndex: 4
    },
    viewBlanche: {
        flexDirection: 'column',
        //justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        height: "48%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        //paddingHorizontal: 30,
        //paddingTop: 75,
        //paddingBottom: 17,
        position: 'relative',
        zIndex: 1
    },
    viewBottomCard: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        bottom: "5%",
        position: "absolute",
    },
    viewCat: {
        color: '#F38696',
        textTransform: 'uppercase',
        fontSize: 14,
        width: '44%',
        textAlign: 'left',
        marginLeft: '6%',
        left: 0,
    },
    viewPrice: {
        color: '#F38696',
        textTransform: 'uppercase',
        fontSize: 14,
        width: '44%',
        textAlign: 'right',
        marginRight: '6%',
        right: 0,
    },
    txtCat: {
        color: '#F38696',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'left',
    },
    txtPrice: {
        color: '#F38696',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'right',
    },
    textFinish: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 18,
        marginTop: '5%',
        marginLeft: '2%',
        marginRight: '2%',
        textAlign: 'center',
    },

    viewAnswerInput: {
        //marginTop: '5%',
        padding: '5%',
        borderRadius: 20,
        margin: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        //height: 100
    },
    answerInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        borderRadius: 10,
        height: 60,
        marginBottom: '5%',
        alignItems: 'center',
        color: '#ffffff',
        paddingLeft: 20,
    },
    viewBtn: {
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
    answerText: { //Texte de la réponse de l'utilisateur
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        fontWeight: 'bold',
        borderRadius: 10,
        height: 50,
        marginBottom: '5%',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    officialAnswerText: { //Texte de la réponse officielle
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        height: 50,
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    labelAnswer: {
        fontStyle: 'italic',
        fontSize: 13,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: '2%',
        marginLeft: '1%'
    }
})

//Connecte le composant à redux (ici on récupère seulement le state global "userData"
const mapStateToProps = state => {
return {
    userData: state.userData
}
}

export default connect(mapStateToProps)(BetUser)
