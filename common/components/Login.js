'use strict';

import React, {StyleSheet, View,Text, WebView, Component} from 'react-native';
import CookieManager from 'react-native-cookies';
import LoginForm from './LoginForm';

// Change these to reflect
const LOGIN_URL = "https://www.moedelo.org/Agents/Login";
const HOME_URL = "http://localhost:3000/";

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

export default class ReactNativeLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            loadedCookie: false
        };
    }

    componentWillMount () {
        CookieManager.get(HOME_URL, (cookie) => {
            let isAuthenticated;
            // If it differs, change `cookie.remember_me` to whatever the name for your persistent cookie is!!!
            if (cookie && cookie.indexOf('md-auth') != -1) {
                isAuthenticated = true;
            }
            else {
                isAuthenticated = false;
            }

            this.setState({
                loggedIn: isAuthenticated,
                loadedCookie: true
            });
        });
    }

    onNavigationStateChange (navState) {
        // If we get redirected back to the HOME_URL we know that we are logged in. If your backend does something different than this
        // change this line.
        if (navState.url == HOME_URL) {
            this.setState({
                loggedIn: true,
            });
        }
    }

    render () {
        // If we have completed loading the cookie choose to show Login WebView or the LoggedIn component, else just show an empty View.
        if (this.state.loadedCookie) {
            if (this.state.loggedIn) {
                return (
                    <Text>Ты залогинен</Text>
                );
            }
            else {
                return (
                    <LoginForm></LoginForm>
                );
            }
        }
        else {
            return (
                <View></View>
            );
        }
    }
}