import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var fbConfig = {
    apiKey: "AIzaSyA_tF7kvadPD5Z1ICxGPLMpT4q60CIGk0Y",
    authDomain: "react-app-test-ceb80.firebaseapp.com",
    databaseURL: "https://react-app-test-ceb80.firebaseio.com",
    projectId: "react-app-test-ceb80",
    storageBucket: "react-app-test-ceb80.appspot.com",
    messagingSenderId: "362760449422",
    appId: "1:362760449422:web:08370e8e9e511f5cfec8df",
    measurementId: "G-5H8MRQ641C"
  };

firebase.initializeApp(fbConfig);
firebase.firestore().settings({});

export default firebase;