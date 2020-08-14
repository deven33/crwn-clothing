import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyBeT7a7hKwWDKWxQU6subquslWJ_ABO_JE",
        authDomain: "crown-db-cfb15.firebaseapp.com",
        databaseURL: "https://crown-db-cfb15.firebaseio.com",
        projectId: "crown-db-cfb15",
        storageBucket: "crown-db-cfb15.appspot.com",
        messagingSenderId: "672758254428",
        appId: "1:672758254428:web:29a6cf09c4d2231c504f99",
        measurementId: "G-Z521VTLQBV"
      };

  firebase.initializeApp(config);    

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt : 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;