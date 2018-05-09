import { createStore, applyMiddleware } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
	let store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
	let persistor = persistStore(store);
  	return {
		store, persistor
  	}
}

export function configureStoreDev(initialState = {}) {
	let store = createStore(
		persistedReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
	);
	let persistor = persistStore(store);
	return { store, persistor };
}
