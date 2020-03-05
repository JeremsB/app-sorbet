// Components/AccountSettings.js
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, TextInput } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { LinearGradient } from "expo-linear-gradient"
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

class AccountSettings extends React.Component {

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
                                    width: 25,
                                    height: 25,
                                    zIndex: 10,
                                }}
                                source={require('../content/img/left.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.viewTitle}>
                            <Text style={styles.titleSettings}>Mon compte</Text>
                        </View>
                    </View>

                    <ScrollView>
                        <Text style={styles.label}>Nom d'utilisateur</Text>
                        <TextInput
                            style={styles.viewInput}
                            defaultValue={userData.login}
                            onChangeText={login => this.setState({ login })}
                        />
                        <Text style={styles.label}>Nom</Text>
                        <TextInput
                            style={styles.viewInput}
                            defaultValue={userData.lastname}
                            onChangeText={lastname => this.setState({ lastname })}
                        />
                        <Text style={styles.label}>Prénom</Text>
                        <TextInput
                            style={styles.viewInput}
                            defaultValue={userData.firstname}
                            onChangeText={firstname => this.setState({ firstname })}
                        />
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            numberOfLines={3}
                            defaultValue={userData.description}
                            onChangeText={description => this.setState({ description })}
                        />
                        {/* <Text style={styles.label}>Date de naissance</Text>
                        <DatePicker
                            style={styles.viewInputDate}
                            date={this.state.birth}
                            mode="date"
                            showIcon={false}
                            format="YYYY-MM-DD"
                            placeholder={"YYYY-MM-DD"}
                            minDate={moment().subtract(500, "years")}
                            maxDate={moment().subtract(18, "years")}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    marginTop: 10,
                                    borderColor: 'rgba(0, 0, 0, 0)'
                                },
                                dateText: {
                                    fontSize: 16,
                                    color: '#ffffff',
                                },
                                PlaceholderText: {
                                    fontSize: 16,
                                    color: 'rgba(0, 0, 0, 0)',
                                }
                            }}
                            onDateChange={(birth) => { this.setState({ birth: birth }) }}
                        /> */}
                        <View>
                            <Text>{userData.lastname}</Text>
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
    label: {
        color: '#ffffff',
        marginBottom: 10,
        marginTop: 10,
    },
    viewImg: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 40,
    },
    viewForm: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        borderRadius: 10,
        height: 50,
        marginBottom: 0,
        alignItems: 'center',
        color: '#ffffff',
        paddingLeft: 20,
    },
    textArea: {
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        height: 100,
        justifyContent: "flex-start",
    },
    viewInputDate: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
    },
})

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(AccountSettings)