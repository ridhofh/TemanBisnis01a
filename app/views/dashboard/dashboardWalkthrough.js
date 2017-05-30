import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import { Container, StyleProvider, Icon } from 'native-base';
import {Router, Scene, Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';

import getTheme from '../../assets/themes/components';
import tbThemes from '../../assets/themes/variables/tbThemes';

import DashboardFooter from './dashboardFooter';
import AButton from './actionButton';

import Beranda from './beranda/beranda';
import Laporan from './laporan/laporan';
import Piutang from './piUtang/piutang';
import Lainnya from './lainnya/lainnya';

export default class DashboardWalkthrough extends Component {

    state = {
        modal1Visible: true,
        modal2Visible: false,
    }

    setModal1Visible(visible) {
        this.setState({modal1Visible: visible});
    }

    setModal2Visible(visible) {
        this.setState({modal2Visible: visible});
    }

    render() {
        return (
            <StyleProvider style={getTheme(tbThemes)}>
                <Container>
                    {/*Modal Ke-1*/}
                    <Modal
                        animationType={"slide"}
                        transparent={true}
                        visible={this.state.modal1Visible}
                        onRequestClose={() => {alert("Modal has been closed.")}}>
                        <View style={{marginTop: 22, backgroundColor: 'skyblue'}}>
                            <View style={{}}>
                                <Text>Hello World!</Text>
                                {/*Modal Ke-2*/}
                                <Modal
                                    animationType={"slide"}
                                    transparent={true}
                                    visible={this.state.modal2Visible}
                                    onRequestClose={() => {alert("Modal 2 has been closed.")}}>
                                    <View style={{marginTop: 52, backgroundColor: 'red'}}>
                                        <View style={{}}>
                                            <Text>There's Modal 2!</Text>

                                            <TouchableHighlight onPress={() => {
                                                this.setModal2Visible(!this.state.modal2Visible)
                                            }}>
                                                <Text>Hide Modal 2</Text>
                                            </TouchableHighlight>

                                        </View>
                                    </View>
                                </Modal>
                                <TouchableHighlight onPress={() => {this.setModal2Visible(true)}}>
                                    <Text>Show Modal - 2</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => {
                                    this.setModal1Visible(!this.state.modal1Visible)
                                }}>
                                    <Text>Hide Modal - 1</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </Modal>
                    {/*<TouchableHighlight onPress={() => {this.setModal1Visible(true)}}>*/}
                        {/*<Text>Show Modal</Text>*/}
                    {/*</TouchableHighlight>*/}
                    <Router>
                        <Scene key="beranda" component={Beranda} title="Beranda" hideNavBar={true}/>
                        <Scene key="laporan" component={Laporan} title="Laporan"/>
                        <Scene key="piutang" component={Piutang} title="PiUtang"/>
                        <Scene key="lainnya" component={Lainnya} title="Lainnya"/>
                    </Router>

                    <DashboardFooter/>
                    <ActionButton buttonColor='#00AE9C' position="center" offsetY={50} spacing={10}>
                        <ActionButton.Item buttonColor='#fff' title="Pemasukan" onPress={() => console.log("notes tapped!")}>
                            <Icon name="md-create" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#fff' title="Pengeluaran" onPress={() => {}}>
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