import React from 'react';
import { View, StyleSheet, StatusBar, Text, TextInput, Alert, TouchableOpacity } from 'react-native';

const Login = () => {
    return (<View style={styles.container}>
                <TextInput style={ styles.input } placeholder="Username"></TextInput>
                <TextInput style={ styles.input } placeholder="Password"></TextInput>
                <View style={styles.login}>
                    <TouchableOpacity
                        style={ styles.loginButton }
                        activeOpacity = { .5 }
                        onPress={ loginFunc }
                    >
                            <Text style={ styles.loginText }> Enter </Text>
                    </TouchableOpacity>
                </View>
            </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#233237',
        alignItems: 'center'
    },
    text: {
        color: '#C3073F'
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 5,
        marginBottom: 10
    },
    login: {
        width: '80%',
    },
    loginButton: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor: '#984B43',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#EAC67A',
        alignItems: 'center',
    },
    loginText: {
        color: '#fff'
    }
})

const loginFunc = () => {
    Alert.alert("Login in")
}

export default Login;