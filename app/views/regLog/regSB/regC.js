import React, { Component } from 'react';
import {
    Image, View, Text, Alert, AsyncStorage
} from 'react-native';
import {Content, Container, Button, Item, Label, Form, Input} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';
import uuid from 'react-native-uuid';

export default class RegC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInitCap:"",
            userId: this.props.userId,
            userFn: this.props.userFn,
            userEmail: this.props.userEmail,
            userPhone: this.props.userPhone,
            userPassword: this.props.userPassword,
            userCreatedAt: this.props.userCreatedAt,
            userBizname : this.props.userBizname,
            userBiztype : this.props.userBiztype,
            userDataArray: [],
            userInitTrx: [],
        }
    }
    render() {
        return (
            <Container>
                <RegHeader headerTitle="Profil Bisnis" />
                <Content>
                    <Form style={{paddingRight: 15}}>
                        <Item floatingLabel>
                            <Label style={{fontSize: 14}} >Berapa Jumlah Kas Bisnismu Saat Ini?</Label>
                            <Input onChangeText={(userInitCap) => this.setState({userInitCap})}
                                   value={this.state.userInitCap}/>
                        </Item>


                    </Form>
                    <Content style={{padding:10, marginTop:20}}>
                        <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={this.regC.bind(this)}>
                            <Text style={{color:'#fff'}}>LANJUTKAN</Text>
                        </Button>
                    </Content>
                </Content>
            </Container>
        );
    }

    regC(){
        if(this.state.userInitCap){
            let d = new Date();
            let idUser = uuid.v1();
            this.state.userDataArray.push({
                "userId": idUser,
                "userCreatedAt": d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                "userFn": this.state.userFn,
                "userEmail": this.state.userEmail,
                "userPhone": this.state.userPhone,
                "userPassword": this.state.userPassword,
                "userBizname" : this.state.userBizname,
                "userBiztype" : this.state.userBiztype,
                "userInitCap" : this.state.userInitCap});
            this.setState({userDataArray: this.state.userDataArray, });
            this.state.userInitTrx.push({
                "trxUserId": idUser,
                "trxType": 1,
                "trxQty": 1,
                "trxPrice": this.state.userInitCap,
                "trxTotalPrice": this.state.userInitCap,
                "trxCat": "Modal",
                "trxDesc": "Kas Awal Bulan Ini",
                "trxIconImg": require('../../../assets/src/img/icon_trx/Ikon_CashOut.png'),
                "trxDate": d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                "trxPaymentType":2});
            this.setState({userInitTrx: this.state.userInitTrx});
        }
        Reactotron.log("CEK RegNewUser Perdana");
        Reactotron.log(JSON.stringify(this.state.userDataArray));
        AsyncStorage.setItem('userdata', JSON.stringify(this.state.userDataArray));

        Reactotron.log("CEK ASYNC TRX Perdana");
        Reactotron.log(JSON.stringify(this.state.userInitTrx));
        AsyncStorage.setItem('transaction', JSON.stringify(this.state.userInitTrx));


        Actions.index({userInitCap: this.state.userInitCap});
    }
}

module.exports = RegC;

