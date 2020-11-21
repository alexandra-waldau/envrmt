import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { LoggedIn } from "./App/LoggedIn";
import { NotLoggedIn } from "./App/NotLoggedIn";
import { auth } from "./Firebase/firebaseIndex";
import './App.css';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return null;
  }

  return user ? <LoggedIn /> : <NotLoggedIn />;

}

export default App;
