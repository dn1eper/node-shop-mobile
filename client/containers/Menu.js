import React from 'react';
import { 
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
  } from 'react-native';
import { connect } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { ADMIN, CONTACT_US, LOGIN_URL,
    REGISTER_URL, LOGOUT_URL, CART_URL,
    HOME, ABOUT, SEARCH } from '../Constants';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

class Menu extends React.Component {
    render() {
        return (
            <ScrollView scrollsToTop={false}>
                <Router>
                    <Stack key="root">
                        <Scene key={HOME} component={HomePage} title="Home" initial/>
                        <Scene key={ABOUT} component={AboutPage} title="About"/>
                        <Scene key={CONTACT_US} component={AboutPage} title="About"/>
                        <Scene key={LOGIN_URL} component={AboutPage} title="About"/>
                        <Scene key={REGISTER_URL} component={AboutPage} title="About"/>
                        <Scene key={LOGOUT_URL} component={AboutPage} title="About"/>
                        <Scene key={CART_URL} component={AboutPage} title="About"/>
                        <Scene key={ADMIN} component={AboutPage} title="About"/>
                    </Stack>
				</Router>
            </ScrollView>
        );
    }

    onItemSelected(la) {
        console.log(la);
    }
}

/*
<Text onPress={() => this.onItemSelected('Home')} >
                    Home
                </Text>
                <Text onPress={() => this.onItemSelected('About')} >
                    About
                </Text>
                <Text onPress={() => this.onItemSelected('Contact')} >
                    Contact us
                </Text>
*/

/*
    var lastMenuItem = props.isSigned ? LOGOUT_URL : LOGIN_URL;

    return (
        <div className="menu">

        <NavLink to={`/${HOME}`} >
            <MenuItem item={HOME} />
        </NavLink>

        <NavLink to={`/${ABOUT}`} >
            <MenuItem item={ABOUT} />
        </NavLink>


        <NavLink to={`/${CONTACT_US}`} >
            <MenuItem item={CONTACT_US} />
        </NavLink>

        <NavLink to={`/${CART_URL}`} >
            <MenuItem item={CART_URL} param={props.cart_length}/>
        </NavLink>

        <NavLink to={`/${lastMenuItem}`} >
            <MenuItem item={lastMenuItem} />
        </NavLink>

        </div>
    );
*/

export default connect(
    state => ({
        isSigned: state.auth.status === 'signed',
        cart_length: state.cart.length
    })
)(Menu);
