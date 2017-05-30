import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class DashboardWalkthrough extends Component {

    state = {
        modal1Visible: true,
        modal2Visible: false,
    }

    setModal1Visible(visible) {
        this.setState({modal1Visible: visible});
    }

    setModal2Visible(visible) {
        this.setState({modal2Visible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22, backgroundColor: 'skyblue'}}>
            {/*Modal Ke-1*/}
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modal1Visible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                    <View style={{marginTop: 22, backgroundColor: 'skyblue'}}>
                        <View style={{}}>
                            <Text>Hello World!</Text>
                                {/*Modal Ke-2*/}
                                <Modal
                                    animationType={"slide"}
                                    transparent={true}
                                    visible={this.state.modal2Visible}
                                    onRequestClose={() => {alert("Modal 2 has been closed.")}}>
                                    <View style={{marginTop: 52, backgroundColor: 'red'}}>
                                        <View style={{}}>
                                            <Text>There's Modal 2!</Text>

                                            <TouchableHighlight onPress={() => {
                                                this.setModal2Visible(!this.state.modal2Visible)
                                            }}>
                                                <Text>Hide Modal 2</Text>
                                            </TouchableHighlight>

                                        </View>
                                    </View>
                                </Modal>
                                <TouchableHighlight onPress={() => {this.setModal2Visible(true)}}>
                                    <Text>Show Modal - 2</Text>
                                </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                this.setModal1Visible(!this.state.modal1Visible)
                            }}>
                                <Text>Hide Modal - 1</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => {this.setModal1Visible(true)}}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>



            </View>
        );
    }
}