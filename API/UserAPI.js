export function getCountFriends (id) {
    return fetch('https://sorbet.bet/api/get-count-friends.php', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id_user: id
        })
    })
    .then((response) => response.json())
    //.catch((error) => {console.error(error);});
}