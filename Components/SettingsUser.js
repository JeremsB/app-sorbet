// Components/Earnings.js
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

class Earnings extends React.Component {

    constructor(props) {
        super(props)
    }

    _navReturn() {
        this.props.navigation.navigate("AccueilUser");
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30 }}
                    start={[1, 0]}
                    end={[0, 1]}
                >
                    <View style={styles.viewTopSettings}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => this._navReturn()}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 5,
                                }}
                                source={require('../content/img/retour-blanc.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.titleSettings}>Paramêtres</Text>
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
    viewTopSettings: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleSettings: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
        
    }
})


export default Earnings

