import React from 'react';
import { 
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    Button 
  } from 'react-native';
import { connect } from 'react-redux';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { ADMIN, CONTACT_US, LOGIN_URL,
    REGISTER_URL, LOGOUT_URL, CART_URL,
    HOME, ABOUT, SEARCH } from '../Constants';
import PropTypes from 'prop-types';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

class Menu extends React.Component {
    render() {
        return (
            <ScrollView 
                scrollsToTop={false}
                style={styles.menu}
            >
            {console.log(Actions)}
            {console.log(this.props)}
                <Button title="Home" 
                    onPress={() => { Actions.popTo(HOME); this.props.onItemSelected(); }}/>
                    
                <Button
                    title="About"
                    onPress={() => {Actions.push(ABOUT); this.props.onItemSelected(); } }/>
                    
                <Button
                    title="Contact us"
                    onPress={() => { Actions.push(ABOUT); this.props.onItemSelected(); } }/>
             </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        paddingTop: 20,
    },
});

/*
    var lastMenuItem = props.isSigned ? LOGOUT_URL : LOGIN_URL;
*/

Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
}

export default connect(
    state => ({
        isSigned: state.auth.status === 'signed',
        cart_length: state.cart.length
    })
)(Menu);
