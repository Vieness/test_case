import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBLUCRf6LY1x2SiGCfmME9OGzuYALYyDTw",
    authDomain: "chat-react-3d005.firebaseapp.com",
    projectId: "chat-react-3d005",
    storageBucket: "chat-react-3d005.appspot.com",
    messagingSenderId: "606794029722",
    appId: "1:606794029722:web:a9a1cb002b0f493de29d23"
});

export const Context = createContext(null)

const auth = firebase.auth()
const fireStore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        fireStore
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
