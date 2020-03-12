// Components/Profile.js
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient'
import BetCard from './BetCard'
import { connect } from 'react-redux'
import {getBetInfos} from "../API/BetAPI";
import {getCountFriends} from "../API/UserAPI";

class Profile extends React.Component {

    constructor(props) {
        super(props)
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        this.state = {
            bets: this._getBets(id_user),
            message: "",
            nb_friends: undefined
        }
    }

    _getBets(id_user) {
        fetch('https://sorbet.bet/api/get-user-bets.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_bets')
                    this.setState({ message: "N'attend pas et créés ton Sorbet'!" });
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this.setState({ bets: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _navEarnings() {
        this.props.navigation.navigate("Earnings");
    }

    _navigateSettingsUser() {
        this.props.navigation.navigate("SettingsUser");
    }

    componentDidMount() {
        getCountFriends(this.props.userData[0].id_user).then(data => {
            this.setState({
                nb_friends: data
                //isLoading: false,
            })
        })
        console.log(this.state)
    }

    render() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
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
                            source={{uri: 'https://sorbet.bet/users/'+userData.picture}}
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
                            <Text style={styles.txtCount2}>{/*this.state.nb_friends[0]*/}</Text>
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
                    <ScrollView
                        showsVerticalScrollIndicator={false} style={styles.divCardUser}>
                        <FlatList
                            data={this.state.bets}
                            keyExtractor={(item) => item.id_bet}
                            renderItem={({ item }) => <BetCard bet={item} />}
                        />
                        <Text style={styles.txtCount2}>{this.state.message}</Text>
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
