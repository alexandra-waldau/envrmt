import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/dashboard";
import { Settings } from "../Components/Settings/settings";
import { NewChallenges } from "../Components/NewChallenge/challenges";
import { Boarding } from "../Components/On-boarding/on-boarding";
import { BoardingCategories } from "../Components/On-boarding/on-boarding-categories";
import { auth } from "../Firebase/firebaseIndex";
import { useAuthState } from "react-firebase-hooks/auth";
import { checkOnboardingComplete } from "../Firebase/firestoreAPI";

const LoggedIn = () => {
	const [onboardingFinished, setOnboardingFinished] = useState(false);
	const [user] = useAuthState(auth);

	const getOnboardingFinished = async (uid) => {
		const finished = await checkOnboardingComplete(uid);
		setOnboardingFinished(finished);
	};

	useEffect(() => {
		getOnboardingFinished(user.uid);
	}, []);

	return (
		<Switch>
			<Redirect from="/create-account" to="/" />
			<Redirect from="/log-in" to="/" />
			<Redirect from="/sign-up" to="/" />

			{onboardingFinished === false ? (
				<Route path="/" component={Boarding} exact />
			) : (
				<Route path="/" component={Dashboard} exact />
			)}

			<Route path="/add-challenge" component={NewChallenges} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/settings" component={Settings} />
			<Route path="/on-boarding" component={Boarding} />
			<Route path="/on-boarding-categories" component={BoardingCategories} />
		</Switch>
	);
};

export { LoggedIn };
