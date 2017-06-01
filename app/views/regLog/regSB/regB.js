import React, { Component } from 'react';
import {
    Image, View, Text
} from 'react-native';
import {Content, Container, Button, Item, Label, Form, Input} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';

// const Item = Picker.Item;

export default class RegB extends Component {
    // constructor (props) {
    //     super (props);
    //     this.state = {
    //         selectedItem: undefined,
    //         selected1:
    //     }
    // }

    render() {
        return (
            <Container>
                <RegHeader headerTitle="Profil Bisnis" />
                <Content>
                    <Form style={{paddingRight: 15}}>
                        <Item floatingLabel>
                            <Label>Apa Nama Bisnismu?</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Apa Kategori Bisnismu?</Label>
                            <Input />
                        </Item>

                    </Form>
                    <Content style={{padding:10, marginTop:20}}>
                        <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={()=>Actions.regC()}>
                            <Text style={{color:'#fff'}}>LANJUTKAN</Text>
                        </Button>
                    </Content>
                </Content>
            </Container>
        );
    }
}

module.exports = RegB;