// Components/SettingsUser.js
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

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

    _deconnectUser() {
        const action = { type: "USER_DISCONNECT" };
        this.props.dispatch(action);
        this.props.navigation.navigate("Login");
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
                                }}
                                source={require('../content/img/pictos/retour_blanc.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.viewTitle}>
                            <Text style={styles.titleSettings}>Paramètres</Text>
                        </View>
                    </View>
                    <ScrollView
                        style={styles.viewScroll}
                    >
                        <View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => this._navPersonnalData()}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 17,
                                        }}
                                        source={require('../content/img/pictos/utilisateur_blanc.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>Données personnelles</Text>
                            </TouchableOpacity>
                            <View style={styles.viewThinLine}></View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => this._navAccountSettings()}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 17,
                                        }}
                                        source={require('../content/img/pictos/utilisateur_blanc.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>Paramètres de compte</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewFatLine}></View>
                        <View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => alert("Actives les notifs ou je t'enc***")}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 16,
                                            height: 20,
                                        }}
                                        source={require('../content/img/pictos/notifications.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>Notifications</Text>
                            </TouchableOpacity>
                            <View style={styles.viewThinLine}></View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => alert("Confidentialité et ... je sais pas kiki a mis que ça sur la maquette")}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 13,
                                            height: 20,
                                        }}
                                        source={require('../content/img/pictos/cadenas_blanc.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>Confidentialité et</Text>
                            </TouchableOpacity>
                            <View style={styles.viewThinLine}></View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => alert("PAS DE PUB OK ?")}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 21,
                                            height: 20,
                                        }}
                                        source={require('../content/img/pictos/publicite.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>Publicités</Text>
                            </TouchableOpacity>
                            <View style={styles.viewThinLine}></View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => alert("A propos")}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/pictos/information.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>A propos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewFatLine}></View>
                        <View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => alert("Besoin d'aide ? Et bah va te faire")}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/pictos/aide.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>Besoin d'aide ?</Text>
                            </TouchableOpacity>
                            <View style={styles.viewThinLine}></View>
                            <TouchableOpacity
                                style={styles.viewCatSettings}
                                onPress={() => this._deconnectUser()}
                            >
                                <View style={styles.viewIcon}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 20,
                                        }}
                                        source={require('../content/img/pictos/deconnexion.png')}
                                    />
                                </View>
                                <Text style={styles.textCatSettings}>Se déconnecter</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    
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
    viewScroll: {
        marginBottom: 56,
    },
    viewCatSettings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 22,
    },
    viewIcon: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
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

