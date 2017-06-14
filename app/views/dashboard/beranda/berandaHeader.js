import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import {Header, Title, Body} from 'native-base';

export default class BHeader extends Component {
    render() {
        return (
            <Header>
                <Body style={{flexDirection:'row'}}>
                    <Image source={require('../../../assets/src/img/beranda/Ikon_Dompet.png')} style={{width:36, height:36}} />
                    <Title>      Rp {this.props.userBalance}</Title>
                </Body>
            </Header>
        );
    }
}

module.export = BHeader;