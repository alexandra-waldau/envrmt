import firebase from "firebase/app";
import { auth } from "./firebaseIndex";
import { createUser, createProgress } from "./firestoreAPI";

const emailSignUp = async (name, email, password) => {
    try {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        await createUser(user.user.uid, name);
        await createProgress(user.user.uid)
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

const signInWithGoogle = async () => {
  const user = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  await createUser(user.user.uid, user.user.displayName);
}

const signInWithFacebook = async () => {
  const user = await auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  await createUser(user.user.uid, user.user.displayName);
}

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


export { emailSignUp, signInWithFacebook, signInWithGoogle, emailSignIn, signOut, deleteAccount, forgotPassword }