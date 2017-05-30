import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Icon, Card, CardItem, Right, Thumbnail, Body, List, ListItem} from 'native-base';

//import DataTrx from '../../../addTrx/dataTrx';
import DataTrx from './dataTrx';

export default class AddNewTrx extends Component{

    state = {
        trxCat: '',
        trxDesc: '',
        trxAmount: '',
        trxTotal: '',
        trxIconImg: '',
        trxArray: [''],
    }

    render(){

        let transaction = this.state.trxArray.map((val,key) => {
            return <DataTrx key={key} keyval={key} val={val} />
        });

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
        if(this.state.trxCat){
            var d = new Date();
            this.state.trxArray.push({'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                'cat': this.state.trxCat,
                'desc': this.state.trxDesc,
                'total': this.state.trxTotal});
            this.setState({trxArray: this.state.trxArray});
            this.setState({trxCat: ''});
            this.setState({trxDesc: ''});
            this.setState({trxTotal:''});
        }
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

