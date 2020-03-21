// Components/BetUser.js
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, Animated, Easing } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ActivityIndicator } from 'react-native-paper';
import { getBetInfos } from '../API/BetAPI'

class BetUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            bet: undefined,
            topValue: new Animated.Value(0),
            varAnim: 0,
        }
        this.RotateValueHolder = new Animated.Value(0);
    }

    _start = () => {
        if (this.state.varAnim == 0) {
            Animated.spring(
                this.state.topValue,
                {
                    toValue: 300,
                    duration: 300,
                }
            )
                .start();
            this.state.varAnim = 1
        } else if (this.state.varAnim == 1) {
            Animated.spring(
                this.state.topValue,
                {
                    toValue: 0,
                    duration: 300,
                }
            )
                .start();
            this.state.varAnim = 0
        }
    };

    componentDidMount() {
        this.StartImageRotateFunction();
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
                                style={
                                    styles.imgLoad,
                                    {
                                        transform: [{ rotate: RotateData }],
                                        width: 50,
                                        height: 48,
                                    }
                                }
                            />
                        </View>
                </LinearGradient>
            )
        }
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
                    <ImageBackground
                        source={require('../content/img/burger.jpg')}
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
                                            width: 11,
                                            height: 15,
                                        }}
                                        source={require('../content/img/pictos/localisation_blanc.png')}
                                    />
                                    <Text style={styles.titleLocation}>Bruz</Text>
                                    {/* <Text style={styles.titleLocation}>{bet.localisation}</Text> */}
                                </View>
                                <View style={styles.viewNbBet}>
                                    <Image
                                        style={{
                                            width: 16,
                                            height: 15,
                                        }}
                                        source={require('../content/img/pictos/accueil_blanc.png')}
                                    />
                                    <Text style={styles.titleNbBet}>83 Sorbets</Text>
                                </View>

                            </View>
                            <Text style={styles.questionBet}>{bet.label}</Text>
                        </View>
                        <Animated.View style={[styles.viewScroll, { top: this.state.topValue }]}>
                            <Text style={styles.description}>{bet.description}</Text>
                            <TouchableOpacity style={styles.viewBottomCard}
                                onPress={() => this._start()}
                            >
                                <Text style={styles.titleCat}>{bet.category}</Text>
                                <View style={styles.viewBtn}></View>
                                <Text style={styles.titlePromo}>-30%</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </ImageBackground>
                </LinearGradient>
            )
        }
    }

    componentDidMount() {
        getBetInfos(this.props.navigation.state.params.idBet).then(data => {
            this.setState({
                bet: data,
                isLoading: false,
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
        height: '100%',
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
        zIndex: -10,
        height: 400,
        marginTop: -350,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 75,
        paddingBottom: 17,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    viewBottomCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewBtn: {
        width: 50,
        height: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 10,
    },
})

export default BetUser