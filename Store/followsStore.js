// Store/followsStore.js

import { createStore } from 'redux';
import userFollows from './Reducers/userReducer'

export default createStore(userFollows)
