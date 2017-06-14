import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Alert, Image, Animated, TouchableHighlight } from 'react-native';
import { Container, Form, Item, Label, Icon, Input, Picker, Radio, Text, ListItem} from 'native-base';
import Reactotron from 'reactotron-react-native';
import DatePicker from 'react-native-datepicker';
import Hr from 'react-native-hr';

export default class AddNewTrxDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title           : props.title,
            expanded        : true,
            animation       : new Animated.Value(),
            trxOwnerDueDate : "",
            trxOwnerId      : "",
            trxOwnerName    : "",
            trxOwnerAddress : "",
            trxOwnerPhone   : "",
            trxOwnerEmail   : "",
            trxOwnerRek     : ""
        };

        this.icons = {
            'up'    : require('../../assets/src/img/icon_trx/arrow-up.png'),
            'down'  : require('../../assets/src/img/icon_trx/arrow-down.png')
        }
    }

    toggle(){
        //Step 1
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();  //Step 5
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    render(){
        Reactotron.log("CEK TITLE");
        Reactotron.log(this.state.title);

        let icon = this.icons['down'];
        if(this.state.expanded) {
            icon = this.icons['up'];
        }

        return(
            <Animated.View style={[{height: this.state.animation}]}>
                <View style={{flexDirection:'row'}} onLayout={this._setMinHeight.bind(this)}>
                    <Text >{this.state.title}</Text>
                    <TouchableHighlight
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image source={icon}/>
                    </TouchableHighlight>
                </View>
                <View onLayout={this._setMaxHeight.bind(this)}>
                    <Form>
                        <Item>
                            <Image
                                source={require('../../assets/src/img/icon_trx/Ikon_Nama.png')}
                                style={{width: 24, height: 24}}/>
                            <Input  placeholder='Nama Pemasok'
                                    onChangeText={(trxOwnerName) => this.setState({trxOwnerName})}
                                    value={this.state.trxOwnerName}/>
                        </Item>
                        <Item>
                            <Image
                                source={require('../../assets/src/img/icon_trx/Ikon_Alamat.png')}
                                style={{width: 24, height: 24}}/>
                            <Input  placeholder='Alamat Pemasok'
                                    onChangeText={(trxOwnerAddress) => this.setState({trxOwnerAddress})}
                                    value={this.state.trxOwnerAddress}/>
                        </Item>
                        <Item>
                            <Image
                                source={require('../../assets/src/img/icon_trx/Ikon_Telepon.png')}
                                style={{width: 24, height: 24}}/>
                            <Input  placeholder='Telepon'
                                    onChangeText={(trxOwnerPhone) => this.setState({trxOwnerPhone})}
                                    value={this.state.trxOwnerPhone}/>
                        </Item>
                        <Item>
                            <Image
                                source={require('../../assets/src/img/icon_trx/Ikon_Email.png')}
                                style={{width: 24, height: 24}}/>
                            <Input  placeholder='Email'
                                    onChangeText={(trxOwnerEmail) => this.setState({trxOwnerEmail})}
                                    value={this.state.trxOwnerEmail}/>
                        </Item>
                        <Item>
                            <Image
                                source={require('../../assets/src/img/icon_trx/Ikon_NoRekening.png')}
                                style={{width: 24, height: 24}}/>
                            <Input  placeholder='No. Rekening'
                                    onChangeText={(trxOwnerRek) => this.setState({trxOwnerRek})}
                                    value={this.state.trxOwnerRek}/>
                        </Item>
                        <Item>
                            <Image
                                source={require('../../assets/src/img/icon_trx/Ikon_JatuhTempo.png')}
                                style={{width: 24, height: 24}}/>
                            <DatePicker
                                style={{width: 200, borderWidth: 0}}
                                date={this.state.trxOwnerDueDate}
                                mode="date"
                                placeholder="Jatuh Tempo Penagihan"
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
                                onDateChange={(date) => {this.setState({trxOwnerDueDate: date})}}

                            />
                        </Item>
                    </Form>
                </View>
            </Animated.View>
        );
    }

}

const styles = StyleSheet.create({

});

