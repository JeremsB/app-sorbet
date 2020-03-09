// Components/Loader.js
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'

class Loader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Image
                    style={{
                        alignItems: 'center',
                        width: 300,
                        height: 321,
                        marginBottom: 10,
                    }}
                    source={require('../content/img/logo-color.png')}
                />    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Loader