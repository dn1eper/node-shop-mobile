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
                <Button title="Home" 
                    onPress={() => Actions.push(HOME)}/>
                    
                <Button
                    title="About"
                    onPress={() => Actions.push(ABOUT)}/>
                    
                <Button
                    title="Contact us"
                    onPress={() => Actions.push(ABOUT)}/>
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

export default connect(
    state => ({
        isSigned: state.auth.status === 'signed',
        cart_length: state.cart.length
    })
)(Menu);
