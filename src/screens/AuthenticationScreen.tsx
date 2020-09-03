import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import { types } from '@babel/core';

const AuthenticationScreen = ({navigation}) => {
    return (
        <View style={styles.screen} >
        <Text>This is the user authentication screen</Text>
        <Button title="SignIn" onPress={() => navigation.navigate('CallScheduler')} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AuthenticationScreen;