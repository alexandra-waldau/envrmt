import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { InputOptions } from "../Components/Create-Account/create-account";
import { SignUpScreen } from "../Components/Sign-up/sign-up";

const NotLoggedIn = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="sign-up" />
            <Route path="/sign-up" component={SignUpScreen} exact />
            <Route path="/create-account" component={InputOptions} />
        </Switch>
    );
}

export { NotLoggedIn }