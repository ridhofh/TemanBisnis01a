import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './loginForm';


export default class LoginOld extends Component{
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/src/img/Octocat.png')}
                    />
                    <Text style={styles.logoTitle}> Login ke TemanBisnis2.0! </Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        width: 100,
        height: 82
    },
    logoTitle:{
        marginTop: 10,
        color: '#FFF',
        width: 175,
        textAlign: 'center',
        opacity: 0.9
    }
});