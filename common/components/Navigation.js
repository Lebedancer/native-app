"use strict";

import React, {StyleSheet, View,Text, Navigator} from 'react-native';
import MainPage from './pages/MainPage';
import Menu from './Menu';
const SideMenu = require('react-native-side-menu');


class Navigation extends React.Component{
    render() {
        return (
            <Navigator
                initialRoute={{id: 'first'}}
                renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        const menu = <Menu navigator={navigator}/>
        let scene;
        switch (route.id) {
            case 'main':
                scene = <MainPage title="first">
                        </MainPage>

            case 'webStatistic':
                return (
                        <View navigator={navigator} title="second">
                            <Text>second</Text>
                        </View>
                    );
            case 'partnerNetwork':
                return (
                        <View navigator={navigator} title="second">
                            <Text>second</Text>
                        </View>
                    );
            case 'subaccount':
                return (
                        <View navigator={navigator} title="second">
                            <Text>second</Text>
                        </View>
                    );
            case 'lead':
                return (
                        <View navigator={navigator} title="second">
                            <Text>second</Text>
                        </View>
                    );
            case 'faq':
                return (
                        <View navigator={navigator} title="second">
                            <Text>second</Text>
                        </View>
                    );

            return (
                <SideMenu menu={menu} navigator={navigator}>
                </SideMenu>
            );
        }
    }
}

export default Navigation;

