// Components/Slide1.js
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Loader from '../assets/Loader';

class Slide1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isLoading: false }
    }

    _navSlide() {
        this.props.navigation.navigate("Slide2");
    }

    render() {
        if (this.state.isLoading) {
            return <Loader />;
        }

        return (
            <View style={styles.main_container}>
                <ImageBackground
                    source={require('../content/img/bg-slide-1.png')}
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
                            <Text style={styles.textMiddle}>Parie seul ou avec tes amis et tente de remporter une multitude de gains proposé par nos partenaires</Text>
                        </View>
                        <View style={styles.viewBottom}>
                            <Text style={styles.textBottom1}>N'attends plus,</Text>
                            <Text style={styles.textBottom2}>Swipe et connecte-toi</Text>
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
        justifyContent: 'center',
    },
    textMiddle: {
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
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

export default Slide1