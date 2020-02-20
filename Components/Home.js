// Components/Home.js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const user = this.props.navigation.getParam("user");
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 40, paddingLeft: 40, paddingRight: 40}}
                    start={[1, 0]}
                    end={[0, 1]}>

                    <Text>{user.email}</Text>
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
    }
})

export default Home