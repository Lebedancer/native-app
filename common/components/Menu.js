'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#459b44',
    },
    row: {
        color: 'white'
    },
    exit: {
        paddingTop: 20,
        color: 'white'
    }
});

export default class Menu extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <View style={[styles.container]}>
                <Text  style={[styles.row]} onPress={() => this._handler('main')}>
                    Главная
                </Text>
                <Text  style={[styles.row]} onPress={() => this._handler('webStatistic')}>
                    Веб-статистика
                </Text>
                <Text  style={[styles.row]} onPress={() => this._handler('partnerNetwork')}>
                    Партнерская сеть
                </Text>
                <Text style={[styles.row]}  onPress={() => this._handler('subaccount')}>
                    Субаккаунт
                </Text>
                <Text style={[styles.row]}  onPress={() => this._handler('lead')}>
                    Лиды
                </Text>
                <Text style={[styles.row]}  onPress={() => this._handler('faq')}>
                    Вопросы и ответы
                </Text>

                <Text style={[styles.exit]}  onPress={() => this._exitHandler()}>
                    Выход
                </Text>
            </View>
        );
    }

    _handler(page) {
        this.props.navigator.replace({id: page});
    }

    _exitHandler(page) {
        this.props.navigator.replace({id: page});
    }

}