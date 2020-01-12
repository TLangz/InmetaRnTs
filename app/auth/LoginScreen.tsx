import React from 'react';
import { View, StyleSheet, StatusBar, Text, Alert, TouchableOpacity } from 'react-native';
import { Button, Headline, Paragraph, TextInput, Snackbar, Portal } from 'react-native-paper';

const LoginScreen: React.FC<any> = () => {
    return (
        <View style={ styles.container }>
            <>
            <StatusBar backgroundColor="#ffffff" />
            </>
            <View style={ styles.header }>
                <Headline style={ styles.appTitle }>
                    Todo's
                </Headline>
                <Paragraph style={styles.appDesc}>Keep track of your task's!</Paragraph>
            </View>
            <>
                <View style={ styles.divider }></View>
                <TextInput onChange={() => {}} label="Username" theme={ inputTheme }/>
            </>
            <>
                <View style={ styles.divider }></View>
                <TextInput onChange={() => {}} label="Password" theme={ inputTheme }secureTextEntry/>
            </>
            <>
                <View style={ styles.divider }></View>
                <Button disabled={false}
                    style={styles.btn} mode="contained"
                    onPress={() => { }}>Login</Button>
                <View style={styles.divider} />
                <View style={styles.divider} />
            </>
            <>
                <Portal>
                    <Snackbar visible={false} onDismiss={() => { }}>
                        Error
                    </Snackbar>
                </Portal>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#233237',
    },
    divider: {
        height: 16,
    },
    headline: {
        fontSize: 30,
    },
    appDesc: {
        textAlign: 'center',
        color: '#EAC67A'

    },
    header: {
        padding: 32,
    },
    appTitle: {
        textAlign: 'center',
        fontSize: 35,
        lineHeight: 35,
        fontWeight: '700',
        color: '#984B43' 
    },
    btn: {
        height: 50,
        paddingTop: 6,
        backgroundColor: '#984B43',
    }
})

const inputTheme = {
    dark: false,
    colors: {
      primary: '#984B43',
      background: 'rgb(242, 242, 242)',
      card: '#18121E',
      text: '#000',
      border: 'rgb(199, 199, 204)',
    },
  };

const loginFunc = () => {
    Alert.alert("Logging in")
}

const registerFunc = () => {
    Alert.alert("Register new account")
}

const forgottenPassFunc = () => {
    Alert.alert("Retrieve password")
}

export default LoginScreen;