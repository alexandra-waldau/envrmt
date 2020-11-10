import React from 'react';
import { SignUpOptions } from './Components/Sign-up/sign-up';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { InputOptions } from './Components/Create-Account/create-account';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={SignUpOptions} exact/>
        <Route path="/create-account" component={InputOptions}/>
      </Switch>
    </main>
  );
}

export default App;
