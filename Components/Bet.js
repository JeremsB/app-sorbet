// Components/Bet.js
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import BetCard from './BetCard'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper';
import { getBetInfos} from '../API/BetAPI'

class Bet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            bet: undefined,
        }
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayBet() {
        const { bet } = this.state
        console.log(bet)
        if (bet != undefined) {
            return (
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{ flex: 1, paddingTop: 70, paddingBottom: 50, paddingLeft: 30, paddingRight: 30 }}
                    start={[1, 0]}
                    end={[0, 1]}>
                    <Text style={styles.textBlack}>bite</Text>
                    <Text style={styles.textBlack}>{bet.label}</Text>
                    <Text style={styles.textBlack}>{bet.description}</Text>
                    <Text style={styles.textBlack}>{bet.label}</Text>
                </LinearGradient>
            )
        }
    }

    componentDidMount() {
        getBetInfos(this.props.navigation.state.params.idBet).then(data => {
            this.setState({
                bet: data,
                isLoading: false,
            })
        })
    }

    render() {
        return (
            <View style={styles.viewFlex}>
                {this._displayLoading()}
                {this._displayBet()}
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
    scrollView: {
        marginBottom: 75,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewFlex: {
        flex: 1,
    },
    textBlack: {
        color: '#000000',
    },
})

export default Bet