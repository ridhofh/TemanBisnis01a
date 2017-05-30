import React, { Component } from 'react';
import {
    Text, Image, StyleSheet, TouchableOpacity, View
} from 'react-native';
import {Footer, FooterTab, Icon, Button, Fab } from 'native-base';
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import AButton from './actionButton';

export default class DashboardFooter extends Component {
    constructor(){
        super();
        this.state={
            activeTabName: 'beranda',
            active: 'true'
        };
    }

    tabAction(tab){
        this.setState({activeTabName: tab})
        if(tab === 'beranda'){
            Actions.beranda();
        } else if (tab === 'laporan'){
            Actions.laporan();
        } else if (tab === 'piutang'){
            Actions.piutang();
        } else {
            Actions.lainnya();
        }
    }

    render() {
        return (

            <Footer >
                {/*nanti FAB pake ini aja : https://github.com/mastermoo/react-native-action-button*/}
                <FooterTab>
                    <Button active={(this.setState.activeTabName === 'beranda') ? true: ""} onPress={()=>{this.tabAction('beranda')}}>
                        <Image
                            source={require('../../assets/src/img/footer_icon/Logo_Home_Colored.png')}
                            style={{width: 24, height: 24}} color="black" />
                        <Text style={{fontSize: 12}}>Beranda</Text>
                    </Button>
                    <Button active={(this.setState.activeTabName === 'laporan') ? true: ""} onPress={()=>{this.tabAction('laporan')}}>
                        <Icon name="paper" />
                        <Text style={{fontSize: 12}}>Laporan</Text>
                    </Button>
                    <Button  active={(this.setState.activeTabName === 'piutang') ? true: ""} onPress={()=>{this.tabAction('piutang')}}>
                        <Icon active name="person" />
                        <Text style={{fontSize: 12}}>Pi/Utang</Text>
                    </Button>
                    <Button  active={(this.setState.activeTabName === 'lainnya') ? true: ""} onPress={()=>{this.tabAction('lainnya')}}>
                        <Icon active name="person" />
                        <Text style={{fontSize: 12}}>Lainnya</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

module.export = DashboardFooter;

