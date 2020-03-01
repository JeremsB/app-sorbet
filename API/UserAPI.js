export function getUsers (id) {
    fetch('https://sorbet.bet/api/get-users.php', {
        method: 'post',
        header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            id: id
        })
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}