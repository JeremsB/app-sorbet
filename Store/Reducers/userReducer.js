// Store/Reducers/userReducer.js

const initialState = { userData: [] }

function userLogin(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'USER_LOGIN':
            nextState = { //Ajoute les données de l'utilisateur dans le state userData
                ...state,
                userData: [...state.userData, action.value]
            }
            return nextState || state
        default:
            return state
    }
}

export default userLogin