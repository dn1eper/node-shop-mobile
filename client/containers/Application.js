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
import { Router, Scene, Actions } from 'react-native-router-flux';

import Menu from './Menu';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

class Application extends React.Component {
	render() {
		return (
			<SideMenu menu={<Menu />}>
				<Text>WHY? WHY? WHY? WHY?</Text>
			</SideMenu>
		);
	}
}
/*
let Page = ({ param, sub }) => {
	let menuComponent = (<Route path={`/${param}`} component={MainMenu} />);
	if (param === 'admin') {
		menuComponent = (<Route path={`/${ADMIN}`} component={AdminMenu} />);
	}

	return (
		<div>
		  {menuComponent}
		  <div className="page">
			<Route exact path={`/`} component={HomePage} />
			<Route exact path={`/${HOME}`} component={HomePage} />
			<Route exact path={`/${ABOUT}`} component={AboutPage} />
			<Route exact path={`/${SEARCH}`} component={HomePage} />
			<Route exact path={`/${CONTACT_US}`} component={AboutPage} />
			<Route exact path={`/${LOGIN_URL}`} component={LoginPage} />
			<Route exact path={`/${REGISTER_URL}`} component={RegisterPage} />
			<Route exact path={`/${LOGOUT_URL}`} component={Logout} />
			<Route exact path={`/${CART_URL}`} component={CartPage} />
			<Route path={`/${ADMIN}`} component={AdminPage} />
		  </div>
		</div>
	);
};
*/

export default connect()(Application);
