import firebase from "firebase/app";
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

// to do: display error message to user
const emailSignUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        console.log(error);
  });
}

const googleSignUp = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;
export { auth, emailSignUp, googleSignUp }