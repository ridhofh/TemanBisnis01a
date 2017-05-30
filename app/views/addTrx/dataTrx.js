import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Icon, Card, CardItem, Right, Thumbnail, Body, List, ListItem} from 'native-base';

export default class DataTrx extends Component {
    render(){
        return(
            <ListItem style={{flex: 1, flexDirection: 'row'}}>
                <Thumbnail style={{flex: 1, width: 24, height: 24}} square size={10} source={require('../../assets/src/img/icon_trx/Ikon_CashIn.png')} />
                <Body style={{flex: 7}}>
                 <Text>{this.props.val.cat}</Text>
                <Text note>{this.props.val.desc}</Text>
                </Body>
                <Text style={{flex: 4}}>Rp {this.props.val.total}</Text>
            </ListItem>
        )
    }
}