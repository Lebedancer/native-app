'use strict';

import React, {StyleSheet, View,Text, TextInput, WebView, Component} from 'react-native';
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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
                <Text>
                    Важная информация:
                    - Запрещен спам в чужих группах вконтакте и других соц. сетей , мы будем блокировать таких партнеров без предупреждения.
                    - Запрещены e-mail рассылки от нашего имени, если вы делаете рассылки то нельзя в теме и в заголовке указывать что компания Мое Дело предлагает вам... Предлагать вы можете от себя лично. Нарушающие это правило веб-мастера будут заблокированы.
                    - Запрещена накрутка регистраций! Использование сервисов - «буксов», а также любых сервисов, в которых создаются задания на регистрацию или серфинг.
                    - Обратите внимание, что мы принимаем только трафик из РФ. Регистрации из других стран не принимаются.
                    - Напоминаем, что мы платим только за подтвержденные регистрации, за тех, кто корректно указали свои контактные данные и до которых смог дозвониться наш колл-центр.
                    Вы можете воспользоваться подарочным купоном для Google Adwords на 2000 руб. - http://www.google.ru/adwords/?channel=coma-md
                </Text>
            </View>
        );
    }

}