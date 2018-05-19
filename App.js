import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import Main from './client/components/Main';
import createStore from './client/store/createStore'; // adding a redux

import { fetchPosts } from './client/actions/postsActions';

const { store, persistor } = createStore();	// redux-store
	
fetchPosts()(store.dispatch);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Route path="/:place?/:subplace?" component={Main} />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

// import styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
