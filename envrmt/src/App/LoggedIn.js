import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/dashboard";
import { Settings } from "../Components/Settings/settings";
import { NewChallenges } from "../Components/NewChallenge/challenges";
import {Boarding} from '../Components/On-boarding/on-boarding'
import {Bfirst} from '../Components/On-boarding/boarding-first'
import {Bsecond} from '../Components/On-boarding/boarding-second'
import {Bthird} from '../Components/On-boarding/boarding-third'
import {Bfourth} from '../Components/On-boarding/boarding-fourth'
import {Bfifth} from '../Components/On-boarding/boarding-fifth'
import {Bsixth} from '../Components/On-boarding/boarding-sixth'
import {Bseventh} from '../Components/On-boarding/boarding-seventh'
import {Beigth} from '../Components/On-boarding/boarding-eigth'
import {BoardingCategories} from '../Components/On-boarding/on-boarding-categories'

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
			<Route path="/on-boarding" component={Boarding}/>
            <Route path="/boarding-first" component={Bfirst}/>
            <Route path="/boarding-second" component={Bsecond}/>
            <Route path="/boarding-third" component={Bthird}/>
            <Route path="/boarding-fourth" component={Bfourth}/>
            <Route path="/boarding-fifth" component={Bfifth}/>
            <Route path="/boarding-sixth" component={Bsixth}/>
            <Route path="/boarding-seventh" component={Bseventh}/>
            <Route path="/boarding-eigth" component={Beigth}/>
            <Route path="/on-boarding-categories" component={BoardingCategories}/>
		</Switch>
	);
};

export { LoggedIn };
