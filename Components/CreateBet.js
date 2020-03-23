// Components/CreateBet.js
import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

class CreateBet extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            //Pour l'instant j'ai fait avec le contenu de la bdd on ajustera plus tard
            label:'', //Le titre (Genre Koh-lanta du vendredi)
            description:'', //Description, c'est la question du pari
            category:'', //Catégorie -> Liste déroulante tu mets TV Nourriture Sport Politique... Autre
            price:'', //Le truc a gagner
            selectedItems: [],
        }
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
        //console.log(this.state.selectedItems);
    };

    componentDidMount() {
        this._getFollows();
    }

    laConfirm = (selectedItems) => {
        console.log(this.state.selectedItems);
    }

    /*laConfirm(){
        console.log(this.state);
    }*/

    _getFollows() {
        let userData = this.props.userData[0];
        let id_user = userData.id_user;
        fetch('https://sorbet.bet/api/user/get-follows-create-bet.php', {
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
            .then((responseJson) => {
                if (responseJson == 'no_users_found')
                    Alert.alert("Pas d'users", "Utilisateurs introuvables");
                else if (responseJson == 'no_id')
                    Alert.alert("Pas d'id", "Faut un id");
                else
                    this.setState({follows: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _createBet() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData

        const {id_creator} = userData.id_user;
        const {label} = this.state;
        const {description} = this.state;
        const {category} = this.state;
        const {price} = this.state;
        const {particpants} = this.state;

        fetch('https://sorbet.bet/api/bet/create-bet.php',{
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                id_creator: id_creator,
                label: label,
                description: description,
                category: category,
                price: price,
                participants: participants
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'champs')
                    Alert.alert("Erreur formulaire","Veuillez remplir tous les champs")
                else if (responseJson == 'email_inconnu')
                    Alert.alert("Authentification incorrecte","Email / Mot de passe incorrect")
                else
                    this.props.navigation.navigate("Home", {
                        user: responseJson
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //TODO Le formulaire avec les champs qui sont dans le state (en one page pour l'instant)
    //TODO La mise en forme du truc des participants
    //Pour le truc des participants voir:
    //https://github.com/renrizzolo/react-native-sectioned-multi-select


    render() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData

        const items = [
            // this is the parent or 'item'
            {
                label: 'Personnes suivies',
                id: 0,
                children:
                    this.state.follows
            }
        ];

        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 40, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>

                    <SectionedMultiSelect
                        items={items} // ça on touche pas
                        uniqueKey="value" // ça on touche pas
                        subKey="children" // ça on touche pas
                        displayKey="label" // ça on touche pas
                        selectText="Participants"
                        searchPlaceholderText="Rechercher"
                        showDropDowns={false} // ça c'est pour que ce soit déroulé par défaut
                        //parce que à la base c'est un selection multiple avec des catégories
                        //en entête et du coup des dropdowns avec les éléments enfant
                        readOnlyHeadings={true}
                        onSelectedItemsChange={this.onSelectedItemsChange} // ça on touche pas
                        onConfirm={this.laConfirm} // ça on touche pas
                        selectedItems={this.state.selectedItems} // ça on touche pas
                    />


                    <View style={styles.viewBtn}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => /*this._createBet()*/ Alert.alert("Clique pas","En vrai c'est pas prêt t'sais regarde le reste en attendant")}>
                            <Text style={styles.textBtn}>Créer pari</Text>
                        </TouchableOpacity>
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
    viewImg: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewForm: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewInputEmail: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 15,
        height: 60,
        marginBottom: 0,
        alignItems: 'center',
    },
    textInputEmail: {
        height: 60,
        width: '100%',
    },
    viewInputPwd: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 60,
        borderRadius: 15,
        marginBottom: 0,
        alignItems: 'center',
    },
    textInputPwd: {
        height: 60,
        width: '100%',
    },
    viewBtn: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divBtn: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'center',
        width: '100%',
    },
    textBtn: {
        color: '#ff978d',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    titleText: {
        color: 'white',
        marginTop: 3
    }
})

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(CreateBet)
