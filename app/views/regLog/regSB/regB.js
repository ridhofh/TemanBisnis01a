import React, { Component } from 'react';
import {
    Image, View, Text, Alert
} from 'react-native';
import {Content, Container, Button, Picker, Item, Label, Form, Input} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';

export default class RegB extends Component {
    constructor(props) {
        super (props);
        this._onValueChange = this._onValueChange.bind(this);
        this.state = {
            userBizname: "",
            selectedItem: undefined,
            userBiztype: '0',
            userFn: this.props.userFn,
            userEmail: this.props.userEmail,
            userPhone: this.props.userPhone,
            userPassword: this.props.userPassword,
            results: {
                items:[],
            }
        }
    }

    _onValueChange(value: string) {
        this.setState({
            userBiztype: value
        });
    }

    render() {
        return (
            <Container>
                <RegHeader headerTitle="Profil Bisnis" />
                <Content>
                    <Form style={{paddingRight: 15}}>
                        <Item floatingLabel>
                            <Label>Apa Nama Bisnismu?</Label>
                            <Input onChangeText={(userBizname) => this.setState({userBizname})}
                                   value={this.state.userBizname}/>
                        </Item>
                    </Form>
                    <Form style={{padding: 15}}>
                        <Label stackedLabel style={{fontSize: 15}}>Apa Kategori Bisnismu?</Label>
                        <Picker
                            headerComponent="Apa Kategori Bisnismu"
                            supportedOrientations={['portrait','landscape']}
                            mode="dropdown"
                            selectedValue={this.state.userBiztype}
                            onValueChange={this._onValueChange}>
                            <Picker.Item label="Retail/Online Shop" value="0" />
                            <Picker.Item label="Fashion" value="1" />
                            <Picker.Item label="Kuliner" value="2" />
                            <Picker.Item label="Jasa" value="3" />
                            <Picker.Item label="Logistik/Dropshipping" value="4" />
                            <Picker.Item label="Kreatif/Desain" value="5" />
                            <Picker.Item label="Manufaktur" value="6" />
                            <Picker.Item label="Pendidikan" value="7" />
                            <Picker.Item label="Lainnya" value="8" />
                        </Picker>
                    </Form>
                    <Content style={{padding:10, marginTop:20}}>
                        <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={this.regB.bind(this)}>
                            <Text style={{color:'#fff'}}>LANJUTKAN</Text>
                        </Button>
                    </Content>
                </Content>
            </Container>
        );
    }

    regB(){
        Actions.regC({
            userFn: this.state.userFn,
            userEmail: this.state.userEmail,
            userPhone: this.state.userPhone,
            userPassword: this.state.userPassword,
            userBizname : this.state.userBizname,
            userBiztype : this.state.userBiztype
        });
    }
}

module.exports = RegB;