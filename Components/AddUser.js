// Components/Search.js
import React from 'react'
import {StyleSheet, View, TextInput, Image, TouchableOpacity, Text, Alert, RefreshControl} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import UserCard from './UserCard';

class AddUser extends React.Component {

    constructor(props) {
        super(props)
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        this.state = {
            refreshing: false,
            users: this._getUsers(id_user),
            //friends: this._getFriends(id_user)
        }
    }

    _onRefresh = () => {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        this.setState({ refreshing: true });
        this.state.users = this._getUsers(id_user);
        this.setState({refreshing: false});
    }

    _getUsers(id_user) {
        fetch('https://sorbet.bet/api/user/get-others-users.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this.setState({users: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /*
    _getFriends(id_user) {
        fetch('https://sorbet.bet/api/get-friends.php',{
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                id_user: id_user,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'no_friends')
                    Alert.alert("Pas d'amis","Veuillez ajouter des amis");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id","Faut un id");
                else
                    this.setState({friends : responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }*/

    render() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 0, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewTopSearch}>
                        <View style={styles.viewSearch}>
                            <TextInput
                                style={styles.inputSearch}
                                placeholder='Rechercher'
                                placeholderTextColor='#ffffff'
                            />
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('../content/img/pictos/recherche_blanc.png')}
                            />
                        </View>
                        <ScrollView
                            style={styles.viewBtn}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._createBet()}
                            >
                                <Text style={styles.textBtn}>Utilisateurs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._navEarnings()}
                            >
                                <Text style={styles.textBtn}>Sorbet'</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._navEarnings()}
                            >
                                <Text style={styles.textBtn}>Cadeaux</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._navEarnings()}
                            >
                                <Text style={styles.textBtn}>Thèmes</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={styles.scrollAllUsers}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                />}
                        >
                            
                            <FlatList 
                                data={this.state.users}
                                keyExtractor={(item) => item.id_user}
                                renderItem={({item}) => (<UserCard user={item} userco={userData.id_user}/>)}
                            />
                            
                        </ScrollView>
                    </View>
                    
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
    viewSearch: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    inputSearch: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        color: '#ffffff',
        width: '80%',
    },
    viewBtn: {
        flexDirection: 'row',
        marginTop: 10,
    },
    divBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 15,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginRight: 10,
    },
    textBtn: {
        color: '#ffffff',
        fontSize: 12,
    },
    scrollAllUsers: {
        height: '70%',
        marginTop: 20,
    },
    cardUser: {
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 15,
        padding: 10,
    },
    infosRightUser: {
        marginLeft: 10,
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleInfosUser:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 19,
    },
    txtInfosUser: {
        color: '#ffffff',
        fontSize: 12,
    },
})

//Connecte le composant à redux (ici on récupère seulement le state global "userData"
const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(AddUser)
