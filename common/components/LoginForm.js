'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

export default class LoginForm extends Component {
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
                <Text>Логин</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({login})}
                    value={this.state.login}
                />
                <Text>Пароль</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={this._handlePress}
                >
                    Press Me!
                </Button>
            </View>
        );
    }

    _handlePress(event) {
        console.log('Pressed!');
    }
}