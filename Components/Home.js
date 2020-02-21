// Components/Home.js
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    _navCreateBet() {
        this.props.navigation.navigate("CreateBet");
    }

    render() {
        const user = this.props.navigation.getParam("user");
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 50, paddingLeft: 50, paddingRight: 50}}
                    start={[1, 0]}
                    end={[0, 1]}>

                    <Text>Email: {user.email}</Text>
                    <Text>Last name: {user.lastname}</Text>
                    <Text>First name: {user.firstname}</Text>
                    <Text>Login: {user.login}</Text>
                    <Text>Profil: {user.profile}</Text>

                    <TouchableOpacity
                        style={styles.divBtn}
                        onPress={() => this._navCreateBet()}>
                        <Text style={styles.textBtn}>Créer un Sorbet'</Text>
                    </TouchableOpacity>
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
    divBtn: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'center',
        width: '100%',
    },
    textBtn: {
        color: '#ff978d',
        textTransform: 'uppercase',
        fontSize: 20,
    }
})

export default Home