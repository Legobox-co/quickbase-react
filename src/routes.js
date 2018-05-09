// import scenes here and make routes of them
import React from 'react';
import {Route} from 'react-router-dom';
// import scenes here
import {Dashboard, Settings, Login} from './Scenes'

// auth checkers for checking if the routes are authorized
import AppCheck from './Modules/AppCheck.jsx';
import EnsureLoggedInContainer from './Modules/EnsureLoggedInContainer.jsx';
import EnsureVisitorOnlyContainer from './Modules/EnsureVisitorOnlyContainer.jsx';

const routes = (
  <React.Fragment>
	<AppCheck>
		<EnsureVisitorOnlyContainer>
			<Route path="/login" component={Login} />
	</EnsureVisitorOnlyContainer>
		<EnsureLoggedInContainer>
			<Route exact path="/home" component={Dashboard} />
			<Route path="/settings" component={Settings} />
		</EnsureLoggedInContainer>
	</AppCheck>
  </React.Fragment>
);

export default routes;