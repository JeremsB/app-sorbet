// Components/Bet.js
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import BetCard from './BetCard'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper';
import { getBetInfos} from '../API/BetAPI'

class Bet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            bet: undefined,
        }
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayBet() {
        const { bet } = this.state
        if (bet != undefined) {
            return (
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, paddingBottom: 50}}
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
                                            width: 40,
                                            height: 40,
                                        }}
                                        source={require('../content/img/boules-blanc.png')}
                                    />
                                    <Text style={styles.titleLocation}>{bet.localisation}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                        }}
                                        source={require('../content/img/boules-blanc.png')}
                                    />
                                    <Text style={styles.titleNbBet}>83 Sorbets</Text>
                                </View>
                                
                            </View>
                            <Text style={styles.questionBet}>{bet.label}</Text>

                        </View>
                        <View style={styles.viewScroll}>
                            <Text style={styles.description}>{bet.description}</Text>
                            <View style={styles.viewBottomCard}>
                                <Text style={styles.titleCat}>{bet.category}</Text>
                                <View style={styles.viewBtn}></View>
                                <Text style={styles.titlePromo}>-30%</Text>
                            </View>
                        </View>
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
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
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
    titleLocation: {
        color: '#ffffff',
        fontSize: 10,
    },
    titleNbBet: {
        color: '#ffffff',
        fontSize: 10,
    },
    questionBet: {
        color: '#ffffff',
        textAlign: 'center',
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
        // marginTop: -350,
        marginTop: -50,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 75,
        paddingBottom: 17,
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

export default Bet