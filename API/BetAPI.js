export function getBetInfos (id_bet) {
    return fetch('https://sorbet.bet/api/get-bet-infos.php', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id_bet: id_bet,
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

export function getUserBetInfos (id_bet, id_user) {
    return fetch('https://sorbet.bet/api/bet/get-userbet-infos.php', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id_bet: id_bet,
            id_user: id_user,
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

export function getBetAnswers (id) {
    return fetch('https://sorbet.bet/api/bet/get-bet-answers.php', {
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

export function answerUserBet (id_bet, id_user, answer) {
    return fetch('https://sorbet.bet/api/bet/answer-bet-user.php', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id_bet: id_bet,
            id_user: id_user,
            answer: answer,
        })
    })
    .then((response) => response.json())
     .then((responseJson) => {
         /*if (responseJson == 'no_bet_infos') {
             Alert.alert("Pas d'infos", "Veuillez ajouter des amis");
         } else if (responseJson == 'no_id') {
             Alert.alert("Pas d'id", "Faut un id");
         } else {
             this.setState({bet: responseJson});
         }*/
         alert(responseJson);
     })
     .catch((error) => {
         console.error(error);
     });
}

export function getBetsParti (id_user) {
    return fetch('https://sorbet.bet/api/bet/get-bets-participes.php', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id_user: id_user,
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

export function officialAnswer(id_bet, answer) {
    return fetch('https://sorbet.bet/api/bet/official-answer-bet.php', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id_bet: id_bet,
            answer: answer,
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
