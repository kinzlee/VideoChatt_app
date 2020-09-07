import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../constants/colors';
// import { types } from '@babel/core';

const AuthenticationScreen = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.primaryColor
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 50,
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.whiteColor,
        fontSize: 30,
        fontWeight: "bold"
    },
    footer: {
        flex: 3,
        backgroundColor:colors.whiteColor,
        paddingVertical: 45,
        paddingHorizontal: 60,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})

export default AuthenticationScreen;