import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ADMIN, CONTACT_US, LOGIN_URL,
		 REGISTER_URL, LOGOUT_URL, CART_URL,
		 HOME, ABOUT, SEARCH } from '../Constants';

/*
import LoginPage from 'client/components/LoginPage';
import Logout from 'client/containers/Logout';
import RegisterPage from 'client/components/RegisterPage';
import AdminPage from 'client/components/AdminPage';
import AdminMenu from 'client/components/AdminMenu';
import CartPage from 'client/containers/CartPage';
*/

import SideMenu from 'react-native-side-menu';
import { Router, Stack, Scene, Actions, Reducer } from 'react-native-router-flux';

import Menu from './Menu';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

const reducerCreate = params => {
	const defaultReducer = new Reducer(params);
	return (state, action) => {
	  console.log('ACTION:', action);
	  return defaultReducer(state, action);
	};
  };

class Application extends React.Component {
	render() {
		return (
			<SideMenu menu={<Menu />} >
				<Router createReducer={reducerCreate}>
					<Stack key="root">
						<Scene key={HOME} component={HomePage} title="Home" initial/>
						<Scene key={ABOUT} component={AboutPage} title="About"/>
						<Scene key={CONTACT_US} component={AboutPage} title="Contact up"/>
						<Scene key={LOGIN_URL} component={AboutPage} title="Login"/>
						<Scene key={REGISTER_URL} component={AboutPage} title="Register"/>
						<Scene key={LOGOUT_URL} component={AboutPage} title="Logout"/>
						<Scene key={CART_URL} component={AboutPage} title="Cart"/>
						<Scene key={ADMIN} component={AboutPage} />
					</Stack>
				</Router>
			</SideMenu>
		);
	}
}
/*
let Page = ({ param, sub }) => {
	let menuComponent = (<Route path={`/${param}`} component={MainMenu} />);
	if (param === 'admin') {
		menuComponent = (<Route path={`/${ADMIN}`} component={AdminMenu} />);

*/

export default connect()(Application);
