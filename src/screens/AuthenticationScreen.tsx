import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../constants/colors';
// import { types } from '@babel/core';

const AuthenticationScreen = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View>

            </View>
            <View>

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
        justifyContent: "flex-end"
    },
    footer: {
        flex: 3,
        backgroundColor:colors.whiteColor
    }
})

export default AuthenticationScreen;