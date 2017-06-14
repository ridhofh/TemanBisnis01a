import React, { Component } from 'react';
import {
    Image, Text, AsyncStorage
} from 'react-native';
import {Container, Tab, Tabs, } from 'native-base';
import BHeader from './berandaHeader';

import HomeTabmA from './TopTab/monthAfter';
import HomeTabmFN from './TopTab/monthFromNow';
import HomeTabmL from './TopTab/monthLater';
import Reactotron from 'reactotron-react-native';

export default class Beranda extends Component {
    constructor(props){
        super (props);
        this.state = {
            userBalance: this.props.userInitCap,
            userdata: [],
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userdata').then((userdata) => {
            Reactotron.log("DID MOUNT TRANSACTION")
            Reactotron.log(userdata)
            this.setState({
                userdata: JSON.parse(userdata)
            })
        })
    }

    render() {
        Reactotron.log("CEK ISI userDATA");
        Reactotron.log(this.state.userdata);
        return (
            <Container>
                <BHeader userBalance={this.state.userBalance}  />
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