// Components/SettingsUser.js
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { connect } from 'react-redux'

class SettingsUser extends React.Component {

    constructor(props) {
        super(props)
    }

    _navReturn() {
        this.props.navigation.navigate("UserHome");
    }

    _navPersonnalData() {
        this.props.navigation.navigate("PersonnalData");
    }

    _navAccountSettings() {
        this.props.navigation.navigate("AccountSettings");
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
                                    width: 25,
                                    height: 25,
                                    zIndex: 10,
                                }}
                                source={require('../content/img/left.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.viewTitle}>
                            <Text style={styles.titleSettings}>Parametres</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => this._navPersonnalData()}
                    >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>Données personnelles</Text>
                        </TouchableOpacity>
                        <View style={styles.viewThinLine}></View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => this._navAccountSettings()}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>Paramètres de compte</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewFatLine}></View>
                    <View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => alert("Actives les notifs ou je t'enc***")}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>Notifications</Text>
                        </TouchableOpacity>
                        <View style={styles.viewThinLine}></View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => alert("Confidentialité et ... je sais pas kiki a mis que ça sur la maquette")}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/cadenas-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>Confidentialité et</Text>
                        </TouchableOpacity>
                        <View style={styles.viewThinLine}></View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => alert("PAS DE PUB OK ?")}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>Publicités</Text>
                        </TouchableOpacity>
                        <View style={styles.viewThinLine}></View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => alert("A propos")}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>A propos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewFatLine}></View>
                    <View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => alert("Besoin d'aide ? Et bah va te faire")}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>Besoin d'aide ?</Text>
                        </TouchableOpacity>
                        <View style={styles.viewThinLine}></View>
                        <TouchableOpacity
                            style={styles.viewCatSettings}
                            onPress={() => alert("On a pas le droit de se deconnecter de la meilleure appli du monde")}
                        >
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                source={require('../content/img/personne-blanc.png')}
                            />
                            <Text style={styles.textCatSettings}>Se déconnecter</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View>
                        <Text>{userData.lastname}</Text>
                    </View> */}
                    
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
    viewCatSettings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    textCatSettings: {
        color: '#ffffff',
        fontSize: 16,
        marginLeft: 15,
    },
    viewThinLine: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginLeft: 30,
    },
    viewFatLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#ffffff',
        // marginLeft: -30,
        
    }

})

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(SettingsUser)

