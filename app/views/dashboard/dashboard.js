import React, { Component } from 'react';
import { Container, StyleProvider, Icon } from 'native-base';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import {Router,Scene, Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';

import getTheme from '../../assets/themes/components';
import tbThemes from '../../assets/themes/variables/tbThemes';

import DashboardFooter from './dashboardFooter';
import AButton from './actionButton';

import Beranda from './beranda/beranda';
import Laporan from './laporan/laporan';
import Piutang from './piUtang/piutang';
import Lainnya from './lainnya/lainnya';

export default class Dashboard extends Component{
    render(){
        return (
            <StyleProvider style={getTheme(tbThemes)}>
                <Container>
                    <Router>
                        <Scene key="beranda" component={Beranda} title="Beranda" hideNavBar={true}/>
                        <Scene key="laporan" component={Laporan} title="Laporan"/>
                        <Scene key="piutang" component={Piutang} title="PiUtang"/>
                        <Scene key="lainnya" component={Lainnya} title="Lainnya"/>
                    </Router>
                        <ActionButton buttonColor='#00AE9C' position="center" offsetY={50} spacing={10}>
                            <ActionButton.Item buttonColor='#fff' title="Pemasukan" onPress={() => { Actions.laporan() }}>
                                <Icon name="md-create" style={styles.actionButtonIcon} />
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor='#fff' title="Pengeluaran" onPress={() => {}}>
                                <Icon name="md-create"  />
                            </ActionButton.Item>
                            <ActionButton.Item buttonColor='#fff' title="notes" onPress={() => {}}>
                                <Icon name="md-done-all" style={styles.actionButtonIcon} />
                            </ActionButton.Item>
                        </ActionButton>
                    <DashboardFooter/>
                </Container>
            </StyleProvider>
        );
    }
}


console.ignoredYellowBox = ['Warning: Failed prop type'];
console.ignoredYellowBox = ['Warning: BackAndroid'];

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 11,
        height: 12,
        color: 'white',
    },
});