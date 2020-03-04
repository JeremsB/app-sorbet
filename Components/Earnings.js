// Components/Earnings.js
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

class Earnings extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30 }}
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
})


export default Earnings

