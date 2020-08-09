import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'; //applyMiddleware saljemo kao drugi parametar createStore-u
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux' //za bind-ovanje redux-a u react aplikaciju
import thunk from 'redux-thunk'
import {getFirestore, reduxFirestore, createFirestoreInstance} from 'redux-firestore'
import {getFirebase, ReactReduxFirebaseProvider, isLoaded} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

const rrfProps = {
  firebase,
  config: profileSpecificProps,
  //config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center"> <p>Loading projects...</p></div>;
      return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps }>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
