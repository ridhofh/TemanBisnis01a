import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Content, Text, Icon, Card, CardItem, Right, Thumbnail, Body, List, ListItem} from 'native-base';
import Reactotron from 'reactotron-react-native';

import Transaction from '../../../addTrx/addNewTrx';

class HomeTabmFN extends Component{

    constructor(props) {
        super(props)

        this.state = {
            transaction: []
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('transaction').then((transaction) => {
            Reactotron.log("DID MOUNT TRANSACTION")
            Reactotron.log(transaction)
            this.setState({
                transaction: JSON.parse(transaction).reverse()
            })
        })
    }


    render(){


        var transactions = [{cat:'Biaya Kirim', desc:'Ongkir Ke Depok', amount:1, total:10000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashOut.png')},
            {cat:'Penjualan', desc:'T-Shirt A01', amount:2, total:200000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashIn.png')},
            {cat:'Persediaan', desc:'T-Shirt A01', amount:5, total:160000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashOut.png')},
            {cat:'Modal', desc:'Uang Kas Awal', amount:0, total:500000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashIn.png')}];

        return(
            <Container style={{flex:1}}>
                <Content style={{flex:1, paddingBottom:15}}>
                    <Card>
                        <CardItem style={{flex: 1, flexDirection: 'row' }}>
                            <Text style={{flex: 3}}>Pemasukan</Text>
                            <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}><Text>Rp 0</Text><Icon name="arrow-forward" /></Right>
                        </CardItem>
                        <CardItem style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={{flex: 3}}>Pengeluaran</Text>
                            <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}><Text>Rp 0</Text><Icon name="arrow-forward" /></Right>
                        </CardItem>
                        <CardItem style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={{flex: 3}}>Piutang</Text>
                            <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}><Text>Rp 0</Text><Icon name="arrow-forward" /></Right>
                        </CardItem>
                        <CardItem style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={{flex: 3}}>Utang</Text>
                            <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}><Text>Rp 0</Text><Icon name="arrow-forward" /></Right>
                        </CardItem>
                    </Card>
                </Content>
                <List dataArray={this.state.transaction} style={{flex:2}}
                      renderRow={(trx) =>
                          <ListItem style={{flex: 1, flexDirection: 'row'}}>
                              <Thumbnail style={{flex: 1, width: 24, height: 24}} square size={10} source={require('../../../../assets/src/img/icon_trx/Ikon_CashOut.png')} />
                              <Body style={{flex: 7}}>
                              <Text>{trx.cat}</Text>
                              <Text note>{trx.desc}</Text>
                              </Body>
                              <Text style={{flex: 4}}>Rp {trx.total}</Text>
                          </ListItem>
                      }>
                </List>
            </Container>
        );
    }
}

module.exports = HomeTabmFN;
