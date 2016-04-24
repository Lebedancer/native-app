'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
import CookieManager from 'react-native-cookies';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }
    render () {
        return (
            <View style={[styles.container]}>
                <Text>Личный счет</Text>

            </View>
        );
    }

    logout() {
        CookieManager.clearAll((err, res) => {
            console.log(err);
            console.log(res);
        });

        this.setState({
            loggedIn: false,
        });
    }

    _handlePress(event) {
        this.logout.bind(this);
        fetch('https://www.moedelo.org/Agents/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: 'sferryf@gmail.com',
                Password: 'b29e864493515e3c83c7618b7528e323'
            })
        })
            .then((response) => {
                CookieManager.get('https://www.moedelo.org/', (cookie) => {
                    let isAuthenticated;
                    if (cookie && cookie.indexOf('md-auth') != -1) {
                        isAuthenticated = true;
                    }
                    else {
                        isAuthenticated = false;
                    }

                    this.setState({
                        loggedIn: isAuthenticated,
                        loadedCookie: true
                    })
                })
            })
            .catch((error) => {
                console.warn(error);
            });
    }
}