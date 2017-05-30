import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import {Header, Title, Body, Left, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class RegHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor:'#00AE9C'}}>
                <Left>
                    <Button transparent onPress={()=>Actions.welcome()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.headerTitle}</Title>
                </Body>
            </Header>

        );
    }
}

module.export = RegHeader;