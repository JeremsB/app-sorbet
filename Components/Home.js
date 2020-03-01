// Components/Home.js
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
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
                    style={{flex:1, paddingTop: 70, paddingBottom: 50, paddingLeft: 50, paddingRight: 50}}
                    start={[1, 0]}
                    end={[0, 1]}>


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

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Home)