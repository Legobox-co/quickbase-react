import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from './Components';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import {configureStoreDev} from './Store';
import { PersistGate } from "redux-persist/integration/react";
import initialStore from "./Store/Reducers/inital-state";

let storeValues = configureStoreDev(initialStore);

class App extends Component {
	render() {
		return (
			<Provider store={storeValues.store}>
				<PersistGate loading={null} persistor={storeValues.persistor}>
					<React.Fragment>
						<Router>
							<React.Fragment>
							<Header />
							{routes}
							</React.Fragment>
						</Router>
					</React.Fragment>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
