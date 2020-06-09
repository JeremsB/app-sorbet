// Store/Reducers/userReducer.js

const initialState = { userData: [], userFollows: [], otherBets: [], userBets: [], participeBets: [], otherUsers: [], userFollowsCreate: [] }

function userLogin(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'USER_LOGIN':
            const datauser = state.userData
            if (datauser != null){
                state.userData = [];
                nextState = { //Ajoute les données de l'utilisateur dans le state userData
                    ...state,
                    userData: [...state.userData, action.value]
                }
            }
            else {
                nextState = { //Ajoute les données de l'utilisateur dans le state userData
                    ...state,
                    userData: [...state.userData, action.value]
                }
            }
            return nextState || state

        case 'USER_FOLLOWS':
            const follows = state.userFollows
            if (follows != null){
                state.userFollows = [];
                nextState = {
                    ...state,
                    userFollows: [...state.userFollows, action.value]
                }
            }
            else {
                nextState = {
                    ...state,
                    userFollows: [...state.userFollows, action.value]
                }
            }
            return nextState || state

        case 'OTHER_BETS':
            const other = state.otherBets
            if (other != null){
                state.otherBets = [];
                nextState = {
                    ...state,
                    otherBets: [...state.otherBets, action.value]
                }
            }
            else {
                nextState = {
                    ...state,
                    otherBets: [...state.otherBets, action.value]
                }
            }
            return nextState || state

        case 'USER_BETS':
            const userbets = state.userBets
            if (userbets != null){
                state.userBets = [];
                nextState = {
                    ...state,
                    userBets: [...state.userBets, action.value]
                }
            }
            else {
                nextState = {
                    ...state,
                    userBets: [...state.userBets, action.value]
                }
            }
            return nextState || state

        case 'PARTICIPE_BETS':
            const participe = state.participeBets
            if (participe != null){
                state.participeBets = [];
                nextState = {
                    ...state,
                    participeBets: [...state.participeBets, action.value]
                }
            }
            else {
                nextState = {
                    ...state,
                    participeBets: [...state.participeBets, action.value]
                }
            }
            return nextState || state

        case 'OTHER_USERS':
            const otherusers = state.otherUsers
            if (otherusers != null){
                state.otherUsers = [];
                nextState = {
                    ...state,
                    otherUsers: [...state.otherUsers, action.value]
                }
            }
            else {
                nextState = {
                    ...state,
                    otherUsers: [...state.otherUsers, action.value]
                }
            }
            return nextState || state

        case 'USER_FOLLOWS_CREATE':
            const userfollowscreate = state.userFollowsCreate
            if (userfollowscreate != null){
                state.userFollowsCreate = [];
                nextState = {
                    ...state,
                    userFollowsCreate: [...state.userFollowsCreate, action.value]
                }
            }
            else {
                nextState = {
                    ...state,
                    userFollowsCreate: [...state.userFollowsCreate, action.value]
                }
            }
            return nextState || state

        case 'USER_DISCONNECT':
            const datauserco = state.userData
            if (datauserco != null){
                state.userData = [];
            }
            return state
        default:
            return state
    }
}

export default userLogin
