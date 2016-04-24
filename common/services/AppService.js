'use strict';

import CookieManager from 'react-native-cookies';
import _ from 'underscore';

export default class AppService  {
    static login({ email, pass, onLogin, onError }) {
        fetch('https://www.moedelo.org/Agents/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: 'sferryf@gmail.com',
                Password: 'b29e864493515e3c83c7618b7528e323'
            })
        })
        .then(() => {
            CookieManager.get('https://www.moedelo.org/', (err, cookie) => {
                const authCookie = _.find(cookie, (val, key)=> {
                    return key.replace(' ', '') === 'md-auth'
                });
                let isAuthenticated = !!authCookie;

                if (isAuthenticated) {
                    onLogin && onLogin();
                } else {
                    onError && onError();
                }
            })
        })
        .catch((error) => {
            console.warn(error);
        })
    }

    static loadLeads({  }) {
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

    static logout() {
        CookieManager.clearAll((err, res) => {});

        this.setState({
            loggedIn: false,
        });
    }
}