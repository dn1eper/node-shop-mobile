import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['register', 'postFilter']
}

//const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	let store = createStore(
		//persistedReducer,
		rootReducer,
		initialState/*,
		applyMiddleware(thunk)*/
	);
	//let persistor = persistStore(store);
	//let persistor;
	//return { store, persistor }
	return store;
}
