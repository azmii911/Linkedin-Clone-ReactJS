import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD--O3PBGJiLlwRX4QwMrILIt2KGLI8Feo",
    authDomain: "linkedin-clone-338cb.firebaseapp.com",
    projectId: "linkedin-clone-338cb",
    storageBucket: "linkedin-clone-338cb.appspot.com",
    messagingSenderId: "752386295483",
    appId: "1:752386295483:web:bf7eb32626161b9b5d4b9e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };