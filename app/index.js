
import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { Container, StyleProvider } from 'native-base';
import getTheme from './assets/themes/components/';
import tbThemes from './assets/themes/variables/tbThemes';

import Login from './views/regLog/regSB/login';
import Dashboard from './views/dashboard/dashboard';
import WelcomeScreen from './views/regLog/wScreen';
//import IndexSB from './views/regLog/regSB/index';
import DashboardWalkthrough from './views/dashboard/dashboardWalkthrough';
import RegA from './views/regLog/regSB/regA';
import RegB from './views/regLog/regSB/regB';
import RegC from './views/regLog/regSB/regC';
import RegD from './views/regLog/regSB/regD';
//forTestingOnlu
import Transactions from './views/addTrx/addNewTrx';
import TestmFN from './views/dashboard/beranda/TopTab/mFNtest';


const IndexApp =() => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="index" component={Dashboard} hideNavBar={true} title="Dashboard"  />
                    <Scene key="dsw" component={DashboardWalkthrough} hideNavBar={true} />
                <Scene key="login" component={Login} title="Login Page" hideNavBar={true} />
                <Scene key="welcome" component={WelcomeScreen} hideNavBar={true} initial />
                {/*Registration Story Board*/}
                    <Scene key="regA" component={RegA} title="A" hideNavBar={true}   />
                    <Scene key="regB" component={RegB} title="B" hideNavBar={true}  />
                    <Scene key="regC" component={RegC} title="C" hideNavBar={true} />
                    <Scene key="regD" component={RegD} title="D" hideNavBar={true} />
                {/*For Testing Purpose Only*/}
                <Scene key="test" component={Transactions} hideNavBar={true} />
                <Scene key="mFNtest" component={TestmFN} hideNavBar={true}   />
            </Scene>
        </Router>

    )
}

module.exports = IndexApp;
