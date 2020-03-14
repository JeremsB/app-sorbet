// Components/PersonnalData.js
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { connect } from 'react-redux'

class PersonnalData extends React.Component {

    constructor(props) {
        super(props)
    }

    _navReturn() {
        this.props.navigation.navigate("SettingsUser");
    }

    render() {
        let userData = this.props.userData[0];
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
                                    width: 15,
                                    height: 25,
                                    zIndex: 10,
                                }}
                                source={require('../content/img/pictos/retour_blanc.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.viewTitle}>
                            <Text style={styles.titleSettings}>Personnal Data</Text>
                        </View>
                    </View>
                    <View>
                        <Text>{userData.lastname}</Text>
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
        marginBottom: 20,
    },
    viewTitle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
    },
    titleSettings: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
    },
})

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(PersonnalData)