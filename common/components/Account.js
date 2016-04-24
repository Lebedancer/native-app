'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
import CookieManager from 'react-native-cookies';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    text: {
        color: 'white'
    }

});

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money: '0'
        };
    }
    render () {
        return (
            <View style={[styles.container]}>
                <Text  style={[styles.text]}>
                    Личный счет: {this.state.money}р
                </Text>
            </View>
        );
    }
}