import React, { Component } from 'react';
import { Container, StyleProvider, Icon, Footer } from 'native-base';
import { StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {Router,Scene, Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import getTheme from '../../assets/themes/components';
import tbThemes from '../../assets/themes/variables/tbThemes';

import DashboardFooter from './dashboardFooter';
import AButton from './actionButton';

import Beranda from './beranda/beranda';
import Laporan from './laporan/laporan';
import Piutang from './piUtang/piutang';
import Lainnya from './lainnya/lainnya';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            userBalance: this.props.userInitCap
        }
    }
    render(){

        return (

            <StyleProvider style={getTheme(tbThemes)}>

                <Container>
                    {/*<Router>*/}
                        {/*<Scene key="beranda" component={Beranda} title="Beranda" hideNavBar={true} initial/>*/}
                        {/*<Scene key="laporan" component={Laporan} title="Laporan"/>*/}
                        {/*<Scene key="piutang" component={Piutang} title="PiUtang"/>*/}
                        {/*<Scene key="lainnya" component={Lainnya} title="Lainnya"/>*/}
                        {/*/!*Transaksi*!/*/}
                            {/*<Scene key="addTrx" component={AddNewTrx} hideNavBar={true} />*/}
                    {/*</Router>*/}
                    {/*<DashboardFooter/>*/}
                    <ScrollableTabView
                            style={{borderColor    : '#b7b7b7',
                                    backgroundColor: 'white',
                                    opacity        : 1}}
                            tabBarUnderlineStyle={{borderColor: '#00AE9C', borderBottomColor: 'transparent', backgroundColor: 'transparent', borderBottomWidth: 65}}
                            tabBarTextStyle={{fontSize:14 }}
                            tabBarActiveTextColor='#00AE9C'
                            tabBarInactiveTextColor='#6B6B6B'
                            tabBarPosition="bottom"
                            locked={true}
                            renderTabBar={() => <ScrollableTabBar style={{elevation : 1}} />}>
                        <Beranda userBalance={this.state.userBalance} tabLabel='Home'>
                            <Image
                                source={require('../../assets/src/img/footer_icon/Logo_Home_Colored.png')}
                                style={{width: 24, height: 24}} color="black" />
                        </Beranda>
                        <Laporan tabLabel='Lap'/>
                        <Piutang tabLabel='Piutang'/>
                        <Lainnya tabLabel='Lain'/>
                    </ScrollableTabView>
                    <ActionButton buttonColor='#00AE9C' position="center" offsetY={24} spacing={10}>
                        <ActionButton.Item buttonColor='#fff' title="Pemasukan" onPress={()=> { Actions.addTrx({trxType: "Transaksi Pemasukan"}) }}>
                            <Icon name="md-create" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#fff' title="Pengeluaran" onPress={() => { Actions.addTrx({trxType: "Transaksi Pengeluaran"}) }}>
                            <Icon name="md-create"  />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#fff' title="notes" onPress={() => {}}>
                            <Icon name="md-done-all" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>
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