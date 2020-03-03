// Components/Home.js
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class Home extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    _navAddUser(id_user) {
        //const userData = this.props.navigation.getParam("user");
        this.props.navigation.navigate("AddUser", id_user);
       // this.props.navigation.navigate("AddUser",userData);
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 30, paddingBottom: 50, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewLogo}>
                        <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: -25,
                            }}
                            source={require('../content/img/logo-white.png')}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false} style={styles.scrollView}>
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
                                            marginTop: -20,
                                            marginLeft: -20,
                                            borderRadius: 15,
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
    viewLogo: {

    },
    scrollView: {
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

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Home)