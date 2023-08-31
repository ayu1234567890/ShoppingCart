import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import './index.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2Z-lHg0fa-qkz7VAWFxhXHvVmCNYUn8g",
  authDomain: "cart-47bfc.firebaseapp.com",
  projectId: "cart-47bfc",
  storageBucket: "cart-47bfc.appspot.com",
  messagingSenderId: "359461120839",
  appId: "1:359461120839:web:1d01755f1a9af0048cfa62"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

