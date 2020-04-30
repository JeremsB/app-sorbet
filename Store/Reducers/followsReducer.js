// Store/Reducers/userReducer.js

const initialState = { userFollows: [] }

function userFollows(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'USER_FOLLOW':
            const userfollows = state.userFollows
            if (userfollows != null){
                state.userFollows = [];
                nextState = { //Ajoute les données de l'utilisateur dans le state userData
                    ...state,
                    userFollows: [...state.userFollows, action.value]
                }
            }
            else {
                nextState = { //Ajoute les données de l'utilisateur dans le state userData
                    ...state,
                    userFollows: [...state.userFollows, action.value]
                }
            }
            //console.log(state);
            //console.log(nextState);
            return nextState || state
        default:
            return state
    }
}

export default userFollows
