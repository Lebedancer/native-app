'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component, Image} from 'react-native';
import AppService from '../../services/AppService';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 40,
        backgroundColor: 'green',
        width: 200,
        borderRadius: 4,
        marginTop: 20
    },
    buttonContent: {
        fontSize: 20,
        color: 'white',
        lineHeight: 30,
    },
    label: {
        alignSelf: 'flex-start'
    },
    img: {
        marginBottom: 40
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
                <Image source={require('./logo.jpeg')}  style={[styles.img]} />
                <Text style={[styles.label]}>Логин</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(login) => this.setState({login})}
                    value={this.state.login}
                />
                <Text style={[styles.label]}>Пароль</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <Button
                    containerStyle={[styles.button]}
                    style={[styles.buttonContent]}
                    styleDisabled={{color: 'red'}}
                    onPress={this._handlePress.bind(this)}
                >
                    Войти
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

    _leadsPress(event) {

    }
}