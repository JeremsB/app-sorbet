// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import { ScrollView } from 'react-native-gesture-handler';

class AddUser extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewTopSearch}>
                        <View style={styles.viewSearch}>
                            <TextInput
                                style={styles.inputSearch}
                                secureTextEntry={true}
                                placeholder='Rechercher'
                                placeholderTextColor='#ffffff'
                            />
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('../content/img/search-blanc.png')}
                            />
                        </View>
                        <ScrollView
                            style={styles.viewBtn}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._createBet()}
                            >
                                <Text style={styles.textBtn}>Utilisateurs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._navEarnings()}
                            >
                                <Text style={styles.textBtn}>Sorbet'</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._navEarnings()}
                            >
                                <Text style={styles.textBtn}>Cadeaux</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.divBtn}
                            // onPress={() => this._navEarnings()}
                            >
                                <Text style={styles.textBtn}>Thèmes</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={styles.scrollAllUsers}
                        >
                            <View style={styles.cardUser}>
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/bobby.jpg')}
                                />
                                <View style={styles.infosRightUser}>
                                    <View style={styles.viewInfosUsers}>
                                        <Text style={styles.titleInfosUser}>Kévin2202</Text>
                                        <Text style={styles.txtInfosUser}>63 Sorbets</Text>
                                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                                    </View>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/amis-p.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardUser}>
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/bobby.jpg')}
                                />
                                <View style={styles.infosRightUser}>
                                    <View style={styles.viewInfosUsers}>
                                        <Text style={styles.titleInfosUser}>Kévin2202</Text>
                                        <Text style={styles.txtInfosUser}>63 Sorbets</Text>
                                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                                    </View>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/amis-p.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardUser}>
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/bobby.jpg')}
                                />
                                <View style={styles.infosRightUser}>
                                    <View style={styles.viewInfosUsers}>
                                        <Text style={styles.titleInfosUser}>Kévin2202</Text>
                                        <Text style={styles.txtInfosUser}>63 Sorbets</Text>
                                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                                    </View>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/amis-p.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardUser}>
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/bobby.jpg')}
                                />
                                <View style={styles.infosRightUser}>
                                    <View style={styles.viewInfosUsers}>
                                        <Text style={styles.titleInfosUser}>Kévin2202</Text>
                                        <Text style={styles.txtInfosUser}>63 Sorbets</Text>
                                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                                    </View>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/amis-p.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardUser}>
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/bobby.jpg')}
                                />
                                <View style={styles.infosRightUser}>
                                    <View style={styles.viewInfosUsers}>
                                        <Text style={styles.titleInfosUser}>Kévin2202</Text>
                                        <Text style={styles.txtInfosUser}>63 Sorbets</Text>
                                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                                    </View>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/amis-p.png')}
                                    />
                                </View>
                            </View>
                            <View style={styles.cardUser}>
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/bobby.jpg')}
                                />
                                <View style={styles.infosRightUser}>
                                    <View style={styles.viewInfosUsers}>
                                        <Text style={styles.titleInfosUser}>Kévin2202</Text>
                                        <Text style={styles.txtInfosUser}>63 Sorbets</Text>
                                        <Text style={styles.txtInfosUser}>3 amis en commun</Text>
                                    </View>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../content/img/amis-p.png')}
                                    />
                                </View>
                            </View>
                        </ScrollView>
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
    viewSearch: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    inputSearch: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        color: '#ffffff',
        width: '80%',
    },
    viewBtn: {
        flexDirection: 'row',
        marginTop: 10,
    },
    divBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 15,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginRight: 10,
    },
    textBtn: {
        color: '#ffffff',
        fontSize: 12,
    },
    scrollAllUsers: {
        height: '72.5%',
        marginTop: 20,
    },
    cardUser: {
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 15,
        padding: 10,
    },
    infosRightUser: {
        marginLeft: 10,
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleInfosUser:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 19,
    },
    txtInfosUser: {
        color: '#ffffff',
        fontSize: 12,
    },
})


export default AddUser

