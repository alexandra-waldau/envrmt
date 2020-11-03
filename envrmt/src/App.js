import React from 'react';
import './App.css';
import { SignUpOptions } from "./Components/Sign-up/sign-up";
import { Route, Switch } from "react-router-dom";
import { InputOptions } from "./Components/Create-Account/create-account";
import AuthProvider from "./Firebase/providers";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={SignUpOptions} exact/>
        <Route path="/create-account" component={InputOptions} exact/>
      </Switch>
    </AuthProvider>
  );
}

export default App;
