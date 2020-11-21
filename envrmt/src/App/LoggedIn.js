import React from 'react';
import { Route, Switch, Redirect  } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/dashboard";
import { Challenges } from '../Components/NewChallenge/challenges';

const LoggedIn = () => {
    return (
        <Switch>
            <Redirect from="/create-account" to="/" />
            <Route path="/" component={Dashboard} exact/>
            <Route path="/add-challenge" component={Challenges}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    );
}

export { LoggedIn }