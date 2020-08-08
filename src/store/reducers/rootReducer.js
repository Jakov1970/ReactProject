import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, //syncing data with firestore(bazom)
    firebase: firebaseReducer   //za auth za korisnika
})

export default rootReducer