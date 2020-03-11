// Components/BetCard.js

import React from 'react'
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native'
//import { getImageFromApi } from '../API/TMDBApi'

class BetCard extends React.Component {

    _getCreator(id_bet) {
        fetch('https://sorbet.bet/api/get-bet-creator.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id_bet,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'amis", "Veuillez ajouter des amis");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this.setState({ bets: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { bet } = this.props
        // let creator = _getCreator(bet.id_creator)
        return (
            <ImageBackground
                source={require('../content/img/burger.jpg')}
                style={styles.divCard}
                imageStyle={{ borderRadius: 15 }}
            >
                <View style={styles.overlay}>
                    <Image
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 15,
                            zIndex: 50,
                            marginTop: -20,
                            marginLeft: -20,
                        }}
                        source={require('../content/img/macdo.jpg')}
                    />
                    <View style={styles.contentCard}>
                        <View style={styles.divInfosParis}>
                        <Text style={styles.nameBet}>Nom de la société</Text>
                            <View style={styles.divInfosTop}>
                                <View style={styles.divLocation}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/boules-blanc.png')}
                                    />
                                    <Text style={styles.titleLocation}>LOL</Text>
                                </View>
                                <View style={styles.divNbBet}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/boules-blanc.png')}
                                    />
                                    <Text style={styles.titleNbBet}>83 Sorbets</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.divQuestionBet}>
                            <Text style={styles.questionBet}>{bet.label}</Text>
                        </View>
                        <View style={styles.divInfosBottom}>
                            <Text style={styles.titleCat}>{bet.category}</Text>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../content/img/boules-blanc.png')}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    divCard: {
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        height: 200,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    contentCard: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginTop: -60,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    divInfosParis: {
        marginLeft: 60,
    },
    nameBet: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },
    divInfosTop: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    divLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleLocation: {
        color: '#ffffff',
        fontSize: 10,
    },
    divNbBet: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleNbBet: {
        color: '#ffffff',
        fontSize: 10,
    },
    divQuestionBet: {
        alignItems: 'center',
    },
    questionBet: {
        color: '#ffffff',
        textAlign: 'center',
        width: '80%',
    },
    divInfosBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 5,
    },
    titleCat: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 14,
    },
})

export default BetCard