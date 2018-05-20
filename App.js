import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/integration/react'

import Application from './client/containers/Application';
import createStore from './client/store/createStore'; // adding a redux

import { fetchPosts } from './client/actions/postsActions';

//const { store, persistor } = createStore();	// redux-store
const store = createStore();	
fetchPosts()(store.dispatch);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        
            <Application/>
        
      </Provider>
    );
  }
}

/*
<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Application/>
          </Router>
        </PersistGate>
      </Provider>


*/

// import styles
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
