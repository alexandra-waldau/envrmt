import React from 'react';
import './App.css';
import { SignUpScreen } from "./Components/Sign-up/sign-up";
import { Dashboard } from "./Components/Dashboard/dashboard";
import { Route, Switch } from "react-router-dom";
import { InputOptions } from "./Components/Create-Account/create-account";
import AuthProvider from "./Firebase/providers";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={SignUpScreen} exact/>
        <Route path="/create-account" component={InputOptions}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </main>
  );
}

export default App;
