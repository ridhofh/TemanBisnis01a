import React, { Component } from 'react';
import {
    Image, View
} from 'react-native';
import {Content, Title, Container, Body} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';

export default class RegD extends Component {
    render() {
        return (
            <View>
                <RegHeader/>

            </View>
        );
    }
}

module.exports = RegD;

