// Components/Bet.js
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
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
                            <Text style={styles.titleNbBet}>83 Sorbets</Text>
                            <Text style={styles.questionBet}>{bet.description}</Text>
                            <Text style={styles.titleCat}>{bet.category}</Text>

                            <Text style={styles.nameBet}>{bet.login}</Text>
                            <Text style={styles.titleLocation}>{bet.localisation}</Text>
                            {/* <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('../content/img/boules-blanc.png')}
                            />
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('../content/img/boules-blanc.png')}
                            /> */}
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
        height: 250,
    },
    contentCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100%',
        width: '100%',
        height: 250,
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
    },
    nameBet: {
        color: '#ffffff',
        fontWeight: 'bold',
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
    titleCat: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 14,
    },
})

export default Bet