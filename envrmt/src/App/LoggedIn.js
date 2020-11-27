import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/dashboard";
import { Settings } from "../Components/Settings/settings";
import { NewChallenges } from "../Components/NewChallenge/challenges";

const LoggedIn = () => {
	return (
		<Switch>
			<Redirect from="/create-account" to="/" />
			<Redirect from="/log-in" to="/" />
			<Redirect from="/sign-up" to="/" />
			<Route path="/" component={Dashboard} exact />
			<Route path="/add-challenge" component={NewChallenges} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/settings" component={Settings} />
		</Switch>
	);
};

export { LoggedIn };
