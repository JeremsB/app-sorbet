// Components/CreateBet.js
import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from 'react-redux'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Dropdown } from 'react-native-material-dropdown';

class CreateBet extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            //Pour l'instant j'ai fait avec le contenu de la bdd on ajustera plus tard
            label:'', //Le titre (Genre Koh-lanta du vendredi)
            description:'', //Description, c'est la question du pari
            category:undefined, //Catégorie -> Liste déroulante tu mets TV Nourriture Sport Politique... Autre
            price:'', //Le truc a gagner
            userAnswer:'', //La réponse du créateur
            selectedItems: [], //Les participants
        }
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
    };

    componentDidMount() {
        this._getFollows();
    }

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

    _createBet(selectedItems) {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData

        const {label} = this.state;
        const {description} = this.state;
        const {category} = this.state;
        const {price} = this.state;
        const {userAnswer} = this.state;

        fetch('https://sorbet.bet/api/bet/create-bet.php',{
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                id_creator: userData.id_user,
                label: label,
                description: description,
                category: category,
                price: price,
                userAnswer: userAnswer,
                participants: this.state.selectedItems,
            })
        })
            //TODO Récupérer les erreurs
            .then((response) => response.json())
            /*.then((responseJson) => {
                Alert.alert("Ptet ça marche","Inch'allah")
                /*if (responseJson == 'champs')
                    Alert.alert("Erreur formulaire","Veuillez remplir tous les champs")
                else if (responseJson == 'email_inconnu')
                    Alert.alert("Authentification incorrecte","Email / Mot de passe incorrect")
                else
                    this.props.navigation.navigate("Home", {
                        user: responseJson
                    });*//*
            })
            .catch((error) => {
                console.error(error);
            });*/
        Alert.alert("Pari crée!","GG");
        //TODO Envoyer directement le créteur vers la page de réponse au paris qu'il vient de créer
        //Et faire en sorte qu'il puisse pas se barrer sinon ça annule son pari bref faudra trouver une combine
        //Non au fait il rentre sa réponse dans la créa du pari
    }


    //TODO La mise en forme du formulaire
    //TODO La mise en forme du truc des participants
    //Pour le truc des participants voir:
    //https://github.com/renrizzolo/react-native-sectioned-multi-select
    //Pour le dropdown des catégories:
    //https://github.com/n4kz/react-native-material-dropdown

    //TODO Le KeyboardAvoidingView comme dans register pour que le clavier fasse pas n'imp
    //Update Le 04/04/2020 J'ai eu je sais pas si c'est une maj ou quoi d'un truc mais j'ai ma barre de
    //d'outils? je sais pas comment ça s'appelle la barre en haut avec heure batterie et tout qui est devenue
    //noire sur l'appliavant elle était transparente et l'appli passait derrière mais là ça fait des comportements chelous
    //A voir si y'a la même sur iOS
    //Update2 J'ai rajouté une propriété StatusBar dans app.js (Au passage on peut changer pas mal d'options c'est ouf
    //Du coup c'est résolu j'espère que ça a rien changé sur iOS normalement c'est que pour Android StatusBar

    render() {
        let userData = this.props.userData[0]; //Recupère le contenu du premier objet du tableau userData

        //C'est le contenu de la liste des participant
        //Personnes suivies c'est le parent
        const items = [
            // this is the parent or 'item'
            {
                label: 'Personnes suivies',
                id: 0,
                children:
                    this.state.follows
            }
        ];

        //C'est la liste des catégories
        let data = [{
            value: 'Nourriture',
        }, {
            value: 'People',
        }, {
            value: 'Politique',
        }, {
            value: 'Sport',
        }, {
            value: 'TV',
        }, {
            value: 'Autres',
        }];

        return (
            <View style={styles.main_container}>
                <LinearGradient
                    colors={['#E577A2', '#ff978d']}
                    style={{flex:1, paddingTop: 70, paddingBottom: 40, paddingLeft: 30, paddingRight: 30}}
                    start={[1, 0]}
                    end={[0, 1]}>

                    <TextInput
                        //style={styles.textInputEmail}
                        placeholder='Titre'
                        placeholderTextColor='#ffffff'
                        onChangeText={label => this.setState({ label })}
                    />

                    <TextInput
                        //style={styles.textInputEmail}
                        placeholder='Question'
                        placeholderTextColor='#ffffff'
                        onChangeText={description => this.setState({ description })}
                    />

                    <Dropdown
                        label='Catégorie'
                        data={data}
                        onChangeText={category => this.setState({ category })}
                    />

                    <TextInput
                        placeholder='Prix'
                        placeholderTextColor='#ffffff'
                        onChangeText={price => this.setState({ price })}
                    />

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

                    <TextInput
                        placeholder='Votre réponse'
                        placeholderTextColor='#ffffff'
                        onChangeText={userAnswer => this.setState({ userAnswer })}
                    />

                    {/* //TODO Rajouter le champs de la réponse du créateur
                        // Un textInput */}


                    <View style={styles.viewBtn}>
                        <TouchableOpacity
                            style={styles.divBtn}
                            onPress={() => this._createBet() /*Alert.alert("Clique pas","En vrai c'est pas prêt t'sais regarde le reste en attendant")*/}>
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
