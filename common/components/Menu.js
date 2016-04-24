'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

export default class Menu extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <View style={[styles.container]}>
                <Text onPress={() => this._handler('main')}>
                    Main
                </Text>
                <Text onPress={() => this._handler('second')}>
                    Second
                </Text>
            </View>
        );
    }

    _handler(page) {
        this.props.navigator.replace({id: page});
    }

}