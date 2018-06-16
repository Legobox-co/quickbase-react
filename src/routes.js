// import scenes here and make routes of them
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import scenes here
import {Dashboard, Settings, Login, Home, Profile, Signup} from './Scenes'

// auth checkers for checking if the routes are authorized
import AppCheck from './Modules/AppCheck.jsx';
import EnsureLoggedInContainer from './Modules/EnsureLoggedInContainer.jsx';
import EnsureVisitorOnlyContainer from './Modules/EnsureVisitorOnlyContainer.jsx';

const externalPages = [
	'/',
	'/login',
	'/signup'
];

const internalPages = [
	'/home',
	'/profile',
	'/settings'
];


const routes = (
  <React.Fragment>
	<AppCheck>
		<EnsureVisitorOnlyContainer pages={externalPages}>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
		</EnsureVisitorOnlyContainer>
		<EnsureLoggedInContainer pages={internalPages}>
			<Route exact path="/home" component={Dashboard} />
			<Route exact path="/profile" component={Profile} />
			<Route path="/settings" component={Settings} />
		</EnsureLoggedInContainer>
	</AppCheck>
  </React.Fragment>
);

export default routes;