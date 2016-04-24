"use strict";

import React, {StyleSheet, View,Text, Navigator} from 'react-native';
import MainPage from './pages/MainPage';
import Leads from './pages/Leads/Leads';
import Subaccount from './pages/Subaccount';
import Faq from './pages/Faq';
import PartnerNetwork from './pages/PartnerNetwork';
import WebStatistic from './pages/WebStatistic';
import Menu from './Menu';
import Account from './Account';
const SideMenu = require('react-native-side-menu');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

class Navigation extends React.Component{
    render() {
        return (
            <Navigator
                initialRoute={{id: 'main'}}
                renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {
        const menu = <Menu navigator={navigator}/>
        let scene;

        switch (route.id) {
            case 'main':
                scene = <MainPage title="first"></MainPage>;
                break;
            case 'webStatistic':
                scene = <WebStatistic title="first"></WebStatistic>;
                break;
            case 'partnerNetwork':
                scene= <PartnerNetwork title="first"></PartnerNetwork>;
                break;
            case 'subaccount':
                scene= <Subaccount title="first"></Subaccount>;
                break;
            case 'lead':
                scene= <Leads title="first"></Leads>;
                break;
            case 'faq':
                scene= <Faq title="first"></Faq>;
                break;
        }

        return (
            <SideMenu style={styles.container} menu={menu} navigator={navigator}>
                <Account></Account>
                {scene}
            </SideMenu>
        );
    }
}

export default Navigation;

