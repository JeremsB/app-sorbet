// Store/configureStore.js

import { createStore } from 'redux';
import userLogin from './Reducers/userReducer'

export default createStore(userLogin)
