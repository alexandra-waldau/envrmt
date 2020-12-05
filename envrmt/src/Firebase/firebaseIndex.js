import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAVsAlc93LKMikvfuC0nR7wFTxOeWxsPE",
    authDomain: "envrmt.firebaseapp.com",
    databaseURL: "https://envrmt.firebaseio.com",
    projectId: "envrmt",
    storageBucket: "envrmt.appspot.com",
    messagingSenderId: "1094862075352",
    appId: "1:1094862075352:web:4344fa0059017e81feaead"
  };
  
// to do: double initialization
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

export default firebaseApp;
export { db, auth }