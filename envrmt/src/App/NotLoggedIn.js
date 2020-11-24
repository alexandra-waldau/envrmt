import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { InputOptions } from "../Components/Create-Account/create-account";
import { SignUpScreen } from "../Components/Sign-up/sign-up";
import { LogIn } from "../Components/Log-in/log-in";

const NotLoggedIn = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="sign-up" />
            <Redirect from="/settings" to="sign-up" />
            <Route path="/sign-up" component={SignUpScreen} exact />
            <Route path="/log-in" component={LogIn} />
            <Route path="/create-account" component={InputOptions} />
        </Switch>
    );
}

export { NotLoggedIn }