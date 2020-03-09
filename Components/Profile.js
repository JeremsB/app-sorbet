// Components/Profile.js
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'

class Profile extends React.Component {

    constructor(props) {
        super(props)
    }

    

    _navEarnings() {
        this.props.navigation.navigate("Earnings");
    }

    _navigateSettingsUser() {
        this.props.navigation.navigate("SettingsUser");
    }

    render() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        // const imgUser = (userData.picture);s
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>
                        <View style={styles.divInfosUser}>
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 15,
                                }}
                                // source={{'../content/img/users/'imgUser}}
                                source={require('../content/img/users/bobby.jpg')}
                                // source={imgUser}
                                //TODO Les images sont dans la bdd  pour les user bonjour et bonsoir et bobby donc
                                //userData.picture = bobby.jpg / bonjour.jpg....
                            />
                            <View style={styles.divRightInfosUser}>
                                <View style={styles.divNameUser}>
                                    <Text style={styles.firstName}>{userData.firstname}</Text>
                                    <Text style={styles.lastName}>{userData.lastname}</Text>
                                    
                                </View>
                                <View>
                                    <Text style={styles.txtDescription}>
                                        {userData.description}
                                    </Text>
                                </View> 
                            </View>
                        </View>
                        <View style={styles.divCountUser}>
                            <View style={styles.divCount}>
                                <Text style={styles.txtCount}>SORBET'</Text>
                                <Text style={styles.txtCount2}>43</Text>
                            </View>
                            <View style={styles.divCount}>
                                <Text style={styles.txtCount}>JE SUIS</Text>
                                <Text style={styles.txtCount2}>179</Text>
                            </View>
                            <View style={styles.divCount}>
                                <Text style={styles.txtCount}>SUIVI PAR</Text>
                                <Text style={styles.txtCount2}>179</Text>
                            </View>
                        </View>
                        <View style={styles.viewBtn}>

                            

                            <TouchableOpacity
                                style={styles.divBtn}
                                // onPress={() => this._createBet()}
                                >
                                <Image
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                    }}
                                    source={require('../content/img/boules2.png')}
                                />
                                <Text style={styles.textBtn}>Mes paris</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                                onPress={() => this._navEarnings()}
                                >
                                <Image
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginRight: 5,
                                    }}
                                    source={require('../content/img/boules2.png')}
                                />
                                <Text style={styles.textBtn}>Mes gains</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                                onPress={() => this._navigateSettingsUser()}
                                >
                                <Text style={styles.textBtn}>. . .</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style= {styles.divCardUser}
                        showsVerticalScrollIndicator={false}
                        >
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
                                            <Text style={styles.nameBet}>McDonald's</Text>
                                            <View style={styles.divInfosTop}>
                                                <View style={styles.divLocation}>
                                                    <Image
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                        }}
                                                        source={require('../content/img/boules-blanc.png')}
                                                    />
                                                    <Text style={styles.titleLocation}>Strasbourg</Text>
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
                                            <Text style={styles.questionBet}>Quel burger revient chez McDonald's la semaine prochaine ?</Text>
                                        </View>
                                        <View style={styles.divInfosBottom}>
                                            <Text style={styles.titleCat}>Petits plaisirs</Text>
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
                                            <Text style={styles.nameBet}>McDonald's</Text>
                                            <View style={styles.divInfosTop}>
                                                <View style={styles.divLocation}>
                                                    <Image
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                        }}
                                                        source={require('../content/img/boules-blanc.png')}
                                                    />
                                                    <Text style={styles.titleLocation}>Strasbourg</Text>
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
                                            <Text style={styles.questionBet}>Quel burger revient chez McDonald's la semaine prochaine ?</Text>
                                        </View>
                                        <View style={styles.divInfosBottom}>
                                            <Text style={styles.titleCat}>Petits plaisirs</Text>
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
                                            <Text style={styles.nameBet}>McDonald's</Text>
                                            <View style={styles.divInfosTop}>
                                                <View style={styles.divLocation}>
                                                    <Image
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                        }}
                                                        source={require('../content/img/boules-blanc.png')}
                                                    />
                                                    <Text style={styles.titleLocation}>Strasbourg</Text>
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
                                            <Text style={styles.questionBet}>Quel burger revient chez McDonald's la semaine prochaine ?</Text>
                                        </View>
                                        <View style={styles.divInfosBottom}>
                                            <Text style={styles.titleCat}>Petits plaisirs</Text>
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
    divInfosUser: {
        flexDirection: 'row',
    },
    divRightInfosUser: {
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    divNameUser: {
        flexDirection: 'row',
    },
    firstName: {
        marginRight: 5,
        color: '#ffffff',
        fontSize: 15,
    },
    lastName: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 15,
    },
    txtDescription: {
        fontSize: 9,
        color: '#ffffff',
        width: 150,
    },
    divCountUser: {
        marginTop: 20,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'space-between',
        borderRadius: 15,
    },
    divCount: {
        alignItems: 'center',
    },
    txtCount: {
        color: '#ffffff',
        fontSize: 9,
        marginBottom: 5,
    },
    txtCount2: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 17,
    },
    viewBtn: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    divBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 15,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    textBtn: {
        color: '#ffffff',
        fontSize: 12,
    },
    divCardUser: {
        marginTop: 20,
        marginBottom: 75,
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

//Connecte le composant à redux (ici on récupère seulement le state global "userData"
const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Profile)
