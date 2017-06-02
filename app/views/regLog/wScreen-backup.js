import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Button, View, DeckSwiper, Card, CardItem, Content, Text, Left, Body } from 'native-base';
import FitImage from 'react-native-fit-image';
import {Actions} from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';

const cards = [
    {
        desc: 'Membantumu dalam mencatat keuangan bisnis secara realtime dan mudah',
        image: require('../../assets/src/img/regLogin/ws1.jpg'),
    },
    {
        desc: 'Memberikan gambaran kondisi keuangan bisnis secara komprehensif',
        image: require('../../assets/src/img/regLogin/ws2.jpg'),
    },
    {
        desc: 'Memudahkan pengambilan keputusan untuk pengembangan bisnis',
        image: require('../../assets/src/img/regLogin/ws3.jpg'),
    },
];

export default class WelcomeScreen extends Component {
    render() {
        return (
            <Container>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{flex: 5, height: 400}}>
                        <DeckSwiper
                            dataSource={cards}
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>

                                    <CardItem cardBody>
                                        <Body>
                                            <FitImage style={{width:330, height:270 }} source={item.image} />
                                            <Text style={{textAlign: 'center', padding:10, paddingTop: 10, paddingBottom: 40, backgroundColor:'#00AE9C', color:'#fff', fontSize:12}}>{item.desc}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            }
                        />

                    </View>
                    <View style={{flex: 2}}>
                        <Content style={{padding:10, marginTop:20}}>
                            <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={()=>Actions.regA()}>
                                <Text>DAFTAR AKUN BARU</Text>
                            </Button>
                            <Text style={{color:'#00AE9C', fontSize:12, textAlign: 'center', paddingTop: 15  }} onPress={()=>Actions.login()}>Sudah Punya Akun ?</Text>
                        </Content>
                    </View>
                </View>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    fitImage: {
        borderRadius: 20,
    },
    fitImageWithSize: {
        height: 100,
        width: 30,
    },
});