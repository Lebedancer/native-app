'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5FCFF',
    }
});

export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <View style={[styles.container]}>
                <Text>
                    Веб статистика
                </Text>
            </View>
        );
    }

}