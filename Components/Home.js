// Components/Home.js
import React from 'react'
import { StyleSheet, View, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    _navAddUser(id_user) {
        //const userData = this.props.navigation.getParam("user");
        this.props.navigation.navigate("AddUser", id_user);
       // this.props.navigation.navigate("AddUser",userData);
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 30, paddingBottom: 50, paddingLeft: 50, paddingRight: 50}}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <View style={styles.viewLogo}>
                        <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: -45,
                            }}
                            source={require('../content/img/logo-white.png')}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false} style={styles.scrollView}>
                            <View style={styles.divCard}>
                                <Image
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/macdo.jpg')}
                                />
                                <View style={styles.contentCard}>
                                    
                                </View>
                            </View>
                            <View style={styles.divCard}>
                                <Image
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/macdo.jpg')}
                                />
                                <View style={styles.contentCard}>
                                    
                                </View>
                            </View>
                            <View style={styles.divCard}>
                                <Image
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/macdo.jpg')}
                                />
                                <View style={styles.contentCard}>
                                    
                                </View>
                            </View>
                            <View style={styles.divCard}>
                                <Image
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 15,
                                    }}
                                    source={require('../content/img/macdo.jpg')}
                                />
                                <View style={styles.contentCard}>
                                    
                                </View>
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
    viewLogo: {
        flex: 1,
    },
    scrollView: {
        flex: 3,
        marginBottom: 75,
    },
    divCard: {
        marginBottom: 20,
    },
    contentCard: {
        backgroundColor: '#ffffff',
        width: '100%',
        marginStart: 20,
        height: 150,
        borderRadius: 15,
        marginTop: -60,
        zIndex: -5,
    },
})

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Home)