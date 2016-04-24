'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
import AppService from '../services/AppService';
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
                    onChangeText={(login) => this.setState({login})}
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
                    onPress={this._handlePress.bind(this)}
                >
                    Press Me!
                </Button>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={this._LeadsPress.bind(this)}
                >
                    Press Me111!
                </Button>
            </View>
        );
    }



    _handlePress() {
        const props = this.props;

        AppService.login({
            onLogin: ()=> {
                props.onLogin()

            }
        })
    }

    _LeadsPress(event) {
        this.logout.bind(this);
        fetch('https://www.moedelo.org/Agents/Subaccount/GetReferralLinksByPartner', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            //body: JSON.stringify({
            //    Email: 'sferryf@gmail.com',
            //    Password: 'b29e864493515e3c83c7618b7528e323'
            //})
        })
            .then((response) => response.json())
            .then((responseText) => {
                debugger;
                console.log(responseText);
            })
            .catch((error) => {
                console.warn(error);
            });
    }
}