import React, { Component } from 'react';
import {
    Image, View, Text
} from 'react-native';
import {Content, Container, Button, Item, Label, Form, Input} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <RegHeader headerTitle="Masuk" />
                <Content>
                    <Form style={{paddingRight: 15}}>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                            <Label>Kata Sandi</Label>
                            <Input secureTextEntry />
                        </Item>
                    </Form>
                    <Content style={{padding:10, marginTop:20}}>
                        <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={()=>Actions.index()}>
                            <Text style={{color:'#fff'}}>MASUK</Text>
                        </Button>
                        <Text style={{color:'#00AE9C', fontSize:14, textAlign: 'center', paddingTop: 20 }}>Atau masuk melalui</Text>
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
}

module.exports = Login;

