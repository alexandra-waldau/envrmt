import firebase from "firebase/app";
import { auth } from "./firebaseIndex";

// to do: display error message to user
const emailSignUp = async (name, email, password) => {
    try {
        const user = await auth.createUserWithEmailAndPassword(email, password)
        await user.user.updateProfile({
          displayName: name
        })
    } catch(error) {
        console.log(error.message);
  }
}

const getUsername = () => {
    const username = auth.currentUser.displayName;
    // only split by one or more whitespace 
    const parts = username.split(/\s+/);
    // only return the first name
    if (parts.length > 1) {
        return parts[0];
    }
    return parts;
}

const googleSignUp = new firebase.auth.GoogleAuthProvider();

const facebookSignUp = new firebase.auth.FacebookAuthProvider();

const emailSignIn = (email, password) => {
  auth.signInWithEmailAndPassword(email,password)
  .catch(function(error) {
    console.log(error);
  })
}

const signOut = () => {
  auth.signOut()
  .catch(function(error) {
    console.log(error);
  })
}

const deleteAccount = () => {
  auth.currentUser.delete().then(function() {
  }).catch(function(error){
    console.log(error);
  })
}

export { emailSignUp, googleSignUp, facebookSignUp, emailSignIn, signOut, deleteAccount, getUsername }