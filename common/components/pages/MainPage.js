'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    row: {
        color: '#404040',
        paddingBottom: 5
    }
});

export default class MainPage extends Component {
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
                <Text style={[styles.header]}>Важная информация:</Text>
                <Text style={[styles.row]}>- Запрещен спам в чужих группах вконтакте и других соц. сетей , мы будем блокировать таких партнеров без предупреждения.</Text>
                <Text style={[styles.row]}>- Запрещены e-mail рассылки от нашего имени, если вы делаете рассылки то нельзя в теме и в заголовке указывать что компания Мое Дело предлагает вам... Предлагать вы можете от себя лично. Нарушающие это правило веб-мастера будут заблокированы.</Text>
                <Text style={[styles.row]}>- Запрещена накрутка регистраций! Использование сервисов - «буксов», а также любых сервисов, в которых создаются задания на регистрацию или серфинг.</Text>
                <Text style={[styles.row]}>- Обратите внимание, что мы принимаем только трафик из РФ. Регистрации из других стран не принимаются.</Text>
                <Text style={[styles.row]}>- Напоминаем, что мы платим только за подтвержденные регистрации, за тех, кто корректно указали свои контактные данные и до которых смог дозвониться наш колл-центр.</Text>
            </View>
        );
    }

}