import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { types } from '@babel/core';

const AuthenticationScreen = () => {
    return (
        <View style={styles.screen} >
        <Text>This is the user authentication screen</Text>
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