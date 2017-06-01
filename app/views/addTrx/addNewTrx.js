import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Icon, Card, CardItem, Right, Thumbnail, Body, List, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';

import DataTrx from './dataTrx';

var StorageKey = 'transaction';

export default class AddNewTrx extends Component{


    constructor(props) {
        super(props)
        this.state = {
            trxId: "",
            trxCat: "",
            trxDesc: "",
            trxAmount: "",
            trxTotal: "",
            trxIconImg: "",
            trxArray: [],
        }
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

        return(
            <Container style={{flex:1}}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.addTrx.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textInput}
                               onChangeText={(trxCat) => this.setState({trxCat})}
                               value={this.state.trxCat}
                               placeholder='> Input: Kategori Trx' placeholderTextColor='white' underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput style={styles.textInput}
                               onChangeText={(trxDesc) => this.setState({trxDesc})}
                               value={this.state.trxDesc}
                               placeholder='> Input: Deskripsi Trx' placeholderTextColor='white' underlineColorAndroid='transparent'>
                    </TextInput>
                    <TextInput style={styles.textInput}
                               onChangeText={(trxTotal) => this.setState({trxTotal})}
                               value={this.state.trxTotal}
                               placeholder='> Input: Total Trx' placeholderTextColor='white' underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
            </Container>
        );
    }

    addTrx(){
        Alert.alert("Add transaction")
        if(this.state.trxCat){
            var d = new Date();
            var last_item = this.state.trxArray[this.state.trxArray.length - 1]
            Reactotron.log('cek isi last item')
            Reactotron.log(last_item)
            var last_item_id = last_item.trxId;
                // while (last_item_id == null){
                //     return last_item_id = 0;
                // }

            this.state.trxArray.push({'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                'cat': this.state.trxCat,
                'desc': this.state.trxDesc,
                'total': this.state.trxTotal,
                'id': last_item_id + 1 });
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
    container:{
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 10,
    },

    headerText:{
        color: 'white',
        fontSize: 18,
        padding: 26,
    },

    scrollContainer:{
        flex: 1,
        marginBottom:100,
    },

    footer:{
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    },

    addButton:{
        backgroundColor: '#E91E63',
        width:90,
        height:90,
        borderRadius:50,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        marginBottom: -45,
        zIndex: 10,
    },
    addButtonText:{
        color: '#fff',
        fontSize: 24,
    },
    textInput:{
        alignSelf: 'stretch',
        color: '#fff',
        padding: 10,
        paddingTop: 26,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    }
});

