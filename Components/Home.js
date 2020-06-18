// Components/Home.js
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, Alert, RefreshControl } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import BetCard from './BetCard'
import { connect } from 'react-redux'

class Home extends React.Component {

    //TODO Mettre le refresh au changement de page plutot que de devoir pull to refresh

    constructor(props) {
        super(props)
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        this.state = {
            refreshing: false,
            //bets: this._getBets(id_user)
        }
    }

    _onRefresh = () => {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData
        let id_user = userData.id_user;
        this.setState({ refreshing: true });
        //this.state.bets = this._getBets(id_user)
        this.setState({refreshing: false});
    }
    
    _displayBet = (idBet) => {
        this.props.navigation.navigate("Bet", {
            idBet: idBet
        })
    }
/*
    _getBets(id_user) {
        fetch('https://sorbet.bet/api/get-bets.php', {
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
*/
    _navAddUser(id_user) {
        //const userData = this.props.navigation.getParam("user");
        this.props.navigation.navigate("AddUser", id_user);
       // this.props.navigation.navigate("AddUser",userData);
    }

    render() {
        if (this.props.otherBets[0] == null){
            return(
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <ScrollView
                        showsVerticalScrollIndicator={false} style={styles.scrollView}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />}
                    >
                        <Text style={styles.txtEmpty}>Pas de Sorbet's disponibles pour le moment !</Text>
                        <Text style={styles.txtEmpty}>↓ Tire vers le bas pour rafraîchir ↓</Text>
                    </ScrollView>
                </LinearGradient>
            </View>
            )
        } else {
            return (
                <View style={styles.main_container}>
                    <LinearGradient
                        colors={['#E577A2', '#ff978d']}
                        style={{flex:1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30}}
                        start={[1, 0]}
                        end={[0, 1]}>
                        <ScrollView
                            showsVerticalScrollIndicator={false} style={styles.scrollView}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                />}
                        >
                            <FlatList
                                data={this.props.otherBets[0]}
                                keyExtractor={(item) => item.id_bet}
                                renderItem={({ item }) => <BetCard bet={item} displayBet={this._displayBet} />}
                            />
                        </ScrollView>
                    </LinearGradient>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    scrollView: {
        marginBottom: 75,
    },
    txtEmpty: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        marginTop: '2%',
        fontStyle: 'italic',
    },
})

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        otherBets: state.otherBets,
    }
}

export default connect(mapStateToProps)(Home)
