import React, {Component} from 'react';
import {
    View, ListView
} from 'react-native';

import { Container, Content, Text, Icon, Card, CardItem, Right, Thumbnail, Body, List, ListItem} from 'native-base';

class HomeTabmFN extends Component{

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {cat:'Biaya Kirim', desc:'Ongkir Ke Depok', amount:1, total:10000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashOut.png')},
                {cat:'Penjualan', desc:'T-Shirt A01', amount:2, total:200000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashIn.png')},
                {cat:'Persediaan', desc:'T-Shirt A01', amount:5, total:160000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashOut.png')},
                {cat:'Modal', desc:'Uang Kas Awal', amount:0, total:500000, img_src:require('../../../../assets/src/img/icon_trx/Ikon_CashIn.png')}
            ])
        };
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
                <List dataArray={transactions} style={{flex:2}}
                      renderRow={(trx) =>
                          <ListItem style={{flex: 1, flexDirection: 'row'}}>
                              <Thumbnail style={{flex: 1, width: 24, height: 24}} square size={10} source={trx.img_src} />
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