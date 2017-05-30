import React, { Component } from 'react';
import {
    Image, Text
} from 'react-native';
import {Container, Tab, Tabs, } from 'native-base';
import BHeader from './berandaHeader';

import HomeTabmA from './TopTab/monthAfter';
import HomeTabmFN from './TopTab/monthFromNow';
import HomeTabmL from './TopTab/monthLater';

export default class Beranda extends Component {
    render() {
        return (
            <Container>
                <BHeader />
                <Tabs style={{backgroundColor: "#00AE9C"}} tabBarPosition="top" initialPage={1}>
                    <Tab style={{borderBottomColor: "#FFFFFF"}} heading="Apr 2017">
                        <HomeTabmL />
                    </Tab>
                    <Tab heading="Mei 2017">
                        <HomeTabmFN />
                    </Tab>
                    <Tab heading="Jun 2017">
                        <HomeTabmA />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

module.export = Beranda;