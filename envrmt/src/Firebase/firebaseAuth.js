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
        switch (error.code) {
          case "auth/invalid-email":
            return "Email is invalid."
          case "auth/weak-password":
            return "Password must have more than 6 characters."
          case "auth/email-already-in-use":
            return "Email already in use."
        }
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

const emailSignIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email,password)
  }
  catch(error) {
    switch (error.code) {
      case "auth/wrong-password":
        return "Wrong password.";
      case "auth/user-not-found":
        return "User doesn't exist."
      case "auth/invalid-email":
        return "Invalid email address."
    }
  }
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


const forgotPassword = (email) => {
  auth.sendPasswordResetEmail(email).then(function() {
  }).catch(function(error) {
    console.log(error);
  })

}


export { emailSignUp, googleSignUp, facebookSignUp, emailSignIn, signOut, deleteAccount, getUsername, forgotPassword }