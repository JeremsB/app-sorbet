// Store/Reducers/userReducer.js

const initialState = { userData: [] }

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