import React, { Component } from 'react';
import {
    Image, View, Text, Alert, AsyncStorage
} from 'react-native';
import {Content, Container, Button, Item, Label, Form, Input} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';
import uuid from 'react-native-uuid';

export default class RegA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id:"",
            user_fn: "",
            user_email: "",
            user_phone: "",
            user_password: "",
            user_created_at: "",
            userDataArray: [],
        }
    }

    render() {
        return (
           <Container>
                <RegHeader headerTitle="Daftar Akun" />
                   <Content>
                       <Form style={{paddingRight: 15}}>
                           <Item floatingLabel>
                               <Label>Nama Lengkap</Label>
                               <Input onChangeText={(user_fn) => this.setState({user_fn})}
                                      value={this.state.user_fn}/>
                           </Item>
                           <Item floatingLabel>
                               <Label>Email</Label>
                               <Input onChangeText={(user_email) => this.setState({user_email})}
                                      value={this.state.user_email}/>
                           </Item>
                           <Item floatingLabel>
                               <Label>Nomor Telpon</Label>
                               <Input onChangeText={(user_phone) => this.setState({user_phone})}
                                      value={this.state.user_phone}/>
                           </Item>

                           <Item floatingLabel>
                               <Label>Kata Sandi</Label>
                               <Input onChangeText={(user_password) => this.setState({user_password})}
                                      value={this.state.user_password}
                                      secureTextEntry />
                           </Item>
                           <Item floatingLabel>
                               <Label>Ulangi Sandi</Label>
                               <Input secureTextEntry />
                           </Item>
                       </Form>
                       <Content style={{padding:10, marginTop:20}}>
                           <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={this.regNewUser.bind(this)}>
                               <Text style={{color:'#fff'}}>DAFTAR AKUN BARU</Text>
                           </Button>
                           <Text style={{color:'#00AE9C', fontSize:14, textAlign: 'center', paddingTop: 20 }}>Atau daftar melalui</Text>
                           <View style={{
                               flex: 1,
                               flexDirection: 'row',
                               justifyContent: 'center',
                               alignItems: 'center',
                               paddingTop: 20,
                                }}>
                               <Image source={require('../../../assets/src/img/regLogin/logo_fb.png')} style={{width: 48, height: 48, marginRight:10}}/>
                               <Image source={require('../../../assets/src/img/regLogin/logo_google.png')} style={{width: 48, height: 48, marginLeft:10}}/>
                           </View>
                       </Content>
                   </Content>
           </Container>
        );
    }

    regNewUser(){
        // Alert.alert("Simpen nih State Reg A")
        if(this.state.user_fn){
            var d = new Date();
            var id_user = uuid.v1();
            this.state.userDataArray.push({
                'user_created_at': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                'user_fn' : this.state.user_fn,
                'user_email' : this.state.user_email,
                'user_phone' : this.state.user_phone,
                'user_password' : this.state.user_password,
                'user_id' : id_user});
            this.setState({userDataArray: this.state.userDataArray});
        }

        Actions.regB({
            userFn: this.state.user_fn,
            userEmail: this.state.user_email,
            userPhone: this.state.user_phone,
            userPassword: this.state.user_password,
            });
        // AsyncStorage.setItem('reg_user_profile', JSON.stringify(this.state.userDataArray)).then(()=>{Actions.regB()})

    }
}

module.exports = RegA;

