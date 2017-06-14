import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Alert, AsyncStorage, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Container, Form, Item, Label, Input, Picker, Radio, Text, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';
import uuid from 'react-native-uuid';
import AddTrxHeader from './addTrxHeader';
import Hr from 'react-native-hr';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import AddNewTrxDetail from './addNewTrxDetail';

export default class AddNewTrx extends Component{

    constructor(props) {
        super(props);
        this._onValueChange = this._onValueChange.bind(this);
        this.state = {
            trxId: "",
            trxUserId: "",
            trxType: this.props.trxType,
            trxQty: 1,
            trxPrice: "",
            trxTotalPrice: "",
            trxCat: "",
            trxDesc: "",
            trxIconImg: "",
            trxDate: this.cek_date(),
            trxPaymentType: 0,
            trxArray: [],
            trxOwner: [],

            expanded: true
            };

        this.icons = {
            'up'    : require('../../assets/src/img/icon_trx/arrow-up.png'),
            'down'  : require('../../assets/src/img/icon_trx/arrow-down.png')
        }
    }

    cek_date(){
        let d = new Date();
        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    }

    _onValueChange(value: string) {
        this.setState({
            trxCat: value
        });
    }

    componentWillMount() {
        AsyncStorage.getItem('transaction').then((transaction) => {
            Reactotron.log("DID MOUNT TRANSACTION")
            Reactotron.log(JSON.parse(transaction))
            this.setState({
                trxArray: JSON.parse(transaction)
            })
        })
    }


    render(){
        Reactotron.log("CEK DATE");
        Reactotron.log(this.state.trxDate);

        let icon = this.icons['down'];
        if(this.state.expanded) {
            icon = this.icons['up'];
        }

        var radio_props = [
            {label: 'Tunai/Transfer     ', value:0},
            {label: 'Utang', value:1}];
        return(
            <Container style={{flex:1}}>
                <AddTrxHeader headerTitle={this.state.trxType} />
                <Form style={{paddingRight:15}}>
                    <Item inlineLabel>
                        <Label style={{paddingRight: 5}}>Rp.</Label>
                        <Input onChangeText={(trxTotalPrice) => this.setState({trxTotalPrice})}
                               placeholder="0 ,-"
                               value={this.state.trxTotalPrice}/>
                    </Item>
                    <Item>
                        <Label style={{width: 35, paddingRight:0, marginRight:0, fontSize:16 }}>Qty.</Label>
                        <TextInput onChangeText={(trxQty) => this.setState({trxQty})}
                               placeholder="1"
                               style={{width: 25, marginRight:10, fontSize:16, textAlign:'center' }}
                               value={this.state.trxQty}/>

                        <Label style={{paddingRight: 5}} >@Rp.</Label>
                        <Input onChangeText={(trxPrice) => this.setState({trxPrice})}
                               placeholder="0 ,-"
                               value={this.state.trxPrice}/>
                    </Item>
                    {/*next: https://github.com/d-a-n/react-native-modal-picker*/}
                    <Form style={{paddingLeft: 10, paddingRight: 15}}>
                        <Picker
                            supportedOrientations={['portrait','landscape']}
                            mode="dropdown"
                            selectedValue={this.state.trxCat}
                            onValueChange={this._onValueChange}>
                            <Picker.Item label="Kategori" value="" disabled/>
                            <Picker.Item label="Penjualan" value="0" />
                            <Picker.Item label="Pinjaman" value="1" />
                            <Picker.Item label="Pembelian Persediaan" value="2" />
                            <Picker.Item label="Ongkos Kirim" value="3" />
                            <Picker.Item label="Pembayaran Hutang" value="4" />
                        </Picker>
                        <Hr lineColor="#d6d1d1" />
                    </Form>
                    <Item>

                        <Input style={{paddingLeft:0}}onChangeText={(trxDesc) => this.setState({trxDesc})}
                               placeholder="Deskripsi"
                               value={this.state.trxDesc}/>
                    </Item>
                    <Item inlineLabel>
                        <Label >Tanggal</Label>
                        <DatePicker
                            style={{width: 200, borderWidth: 0}}
                            date={this.state.trxDate}
                            mode="date"
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate="01-05-2010"
                            maxDate="01-05-2021"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            label="Pilih"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    marginLeft: 10,
                                    borderWidth: 0
                                },

                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({trxDate: date})}}

                        />
                    </Item>
                    <Item>
                        <Form>
                        <Label style={{paddingBottom: 5}}>Pembayaran Melalui</Label>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            buttonColor={'#00AE9C'}
                            formHorizontal={true}
                            buttonSize={14}
                            labelWrapStyle={{marginLeft: 10}}
                            onPress={(value) => {this.setState({trxPaymentType:value})}}
                        />
                    </Form>
                    </Item>
                    <ScrollView style={{padding:15}}>
                        <AddNewTrxDetail title="Buka data pemasok"/>
                    </ScrollView>
                </Form>

            </Container>
        );
    }

    addTrx(){
        Alert.alert("Add transaction")
        if(this.state.trxCat){

            let trxId = uuid.v1();

            this.state.trxArray.push({'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                'cat': this.state.trxCat,
                'desc': this.state.trxDesc,
                'total': this.state.trxTotal,
                'id': trxId });
            this.setState({trxArray: this.state.trxArray});
            this.setState({trxCat: ''});
            this.setState({trxDesc: ''});
            this.setState({trxTotal:''});
        }

        Reactotron.log("ADD TRX");
        Reactotron.log(JSON.stringify(this.state.trxArray));
        AsyncStorage.setItem('transaction', JSON.stringify(this.state.trxArray)).then(() => {
            Actions.beranda();
        });

    }

}

const styles = StyleSheet.create({

});

