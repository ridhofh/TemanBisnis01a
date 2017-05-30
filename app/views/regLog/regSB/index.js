import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import {Header, Title, Body} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import RegA from './regA';
import RegB from './regB';
import WelcomeScreen from '../wScreen';



export default class IndexSB extends Component {
    render() {
        return (
            <Router>
                <Scene key="welcome" component={WelcomeScreen} hideNavBar={true} />
                <Scene key="reg-A" component={RegA} title="A" hideNavBar={true} initial />
                <Scene key="reg-B" component={RegB} title="B" hideNavBar={false} />
            </Router>
        );
    }
}


