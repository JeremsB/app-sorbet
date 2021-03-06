// Components/BetCard.js

import React from 'react'
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class BetCard extends React.Component {

    render() {
        const { bet, displayBet } = this.props
        return (
            <ImageBackground
                source={{uri: 'https://sorbet.bet/categories/'+bet.category+'.jpg'}}
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
                            marginBottom: -60
,                            marginLeft: -20,
                        }}
                        source={{uri: 'https://sorbet.bet/users/'+bet.picture}}
                    />
                        <TouchableOpacity style={styles.contentCard}
                            onPress={() => displayBet(bet.id_bet)}
                        >
                            <View style={styles.divInfosParis}>
                                <Text style={styles.nameBet}>{bet.login}</Text>
                                <View style={styles.divInfosTop}>
                                    <View style={styles.divLocation}>
                                        {bet.localisation != null ?
                                        <Image
                                            style={{
                                                width: 7,
                                                height: 10,
                                            }}
                                            source={require('../content/img/pictos/localisation_blanc.png')}
                                        />: null }
                                        <Text style={styles.titleLocation}>{bet.localisation}</Text>
                                    </View>
                                    <View style={styles.divNbBet}>
                                        <Image
                                            style={{
                                                width: 10,
                                                height: 10,
                                            }}
                                            source={require('../content/img/pictos/accueil_blanc.png')}
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
                                        width: 15,
                                        height: 15,
                                    }}
                                    source={require('../content/img/pictos/accueil_blanc.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 100,
        flexDirection: 'row'
    },
    divCard: {
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        height: 150,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    contentCard: {
        width: '100%',
        height: 150,
        borderRadius: 15,
        // marginTop: -60,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    divInfosParis: {
        marginLeft: 60,
        zIndex: 10,
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
        marginHorizontal: 15,
        marginBottom: 10,
    },
    titleCat: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 14,
    },
})

export default BetCard
