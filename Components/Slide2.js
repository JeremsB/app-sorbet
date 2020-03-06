// Components/Slide2.js
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'

class Slide2 extends React.Component {

    constructor(props) {
        super(props)
    }

    _navSlide() {
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            <View style={styles.main_container}>
                <ImageBackground
                    source={require('../content/img/bg-slide-2.png')}
                    style={styles.bgFull}
                >
                    <View style={styles.viewContainer}>
                        <View style={styles.viewTop}>
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 100,
                                    height: 107,
                                    marginBottom: 10,
                                }}
                                source={require('../content/img/logo.png')}
                            />
                            <Image
                                style={{
                                    alignItems: 'center',
                                    width: 150,
                                    height: 28,
                                }}
                                source={require('../content/img/logo-textuel-blanc.png')}
                            />
                        </View>
                        <View style={styles.viewMiddle}>

                        </View>
                        <View style={styles.viewBottom}>
                            <Text style={styles.textBottom1}>Goûter au plaisir</Text>
                            <Text style={styles.textBottom2}>Des paris entre amis</Text>
                        </View>
                    </View>
                    
                </ImageBackground> 
                    
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
    bgFull: {
        width: '100%',
        height: '100%',
    },
    viewContainer: {
        flex: 1,
        marginTop: 70,
        marginBottom: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    viewTop: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewMiddle: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewBottom: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBottom1: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 15,
    },
    textBottom2: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 22,
    },
})

export default Slide2