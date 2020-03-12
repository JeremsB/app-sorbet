import { StyleSheet, View, Image, Text, ImageBackground, Alert } from 'react-native'

export function getBetInfos (id) {
    return fetch('https://sorbet.bet/api/get-bet-infos.php', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
        })
    })
        .then((response) => response.json())
        // .then((responseJson) => {
        //     if (responseJson == 'no_bet_infos')
        //         Alert.alert("Pas d'infos", "Veuillez ajouter des amis");
        //     else if (responseJson == 'no_id')
        //         Alert.alert("Pas d'id", "Faut un id");
        //     else
        //         this.setState({ bet: responseJson });
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
}