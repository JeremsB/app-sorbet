// Components/UserCard.js

import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
//import { getImageFromApi } from '../API/TMDBApi'

class UserCard extends React.Component {
    render() {
        const { user } = this.props
        return (
            <View style={styles.cardUser}>
                <Image
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 15,
                    }}
                    source={require('../content/img/users/bobby.jpg')}
                />
                <View style={styles.infosRightUser}>
                    <View style={styles.viewInfosUsers}>
                    <Text style={styles.titleInfosUser}>{user.login}</Text>
                        <Text style={styles.txtInfosUser}>63 Sorbets</Text>
                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                    </View>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require('../content/img/amis-p.png')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    }, cardUser: {
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
    titleInfosUser: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 19,
    },
    txtInfosUser: {
        color: '#ffffff',
        fontSize: 12,
    },
})

export default UserCard