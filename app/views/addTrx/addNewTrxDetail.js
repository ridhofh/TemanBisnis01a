import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Alert, Image, Animated, TouchableHighlight } from 'react-native';
import { Container, Form, Item, Label, Input, Picker, Radio, Text, ListItem} from 'native-base';
import Reactotron from 'reactotron-react-native';
import Hr from 'react-native-hr';

export default class AddNewTrxDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title       : props.title,
            expanded    : false,
            animation   : new Animated.Value()
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
                <View onLayout={this._setMinHeight.bind(this)}>
                    <Text>{this.state.title}</Text>
                    <TouchableHighlight
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image source={icon}/>
                    </TouchableHighlight>
                </View>
                <View onLayout={this._setMaxHeight.bind(this)}>
                    <Text>Ini teks isinya form detail nanti</Text>
                    <Form>
                        <Item></Item>
                    </Form>
                </View>
            </Animated.View>
        );
    }

}

const styles = StyleSheet.create({

});

