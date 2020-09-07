import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import { types } from '@babel/core';

const AuthenticationScreen = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.fieldHeader}>Email</Text>
                <View style={styles.fieldcontainer}>
                    <FontAwesome 
                        name="envelope"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                    placeholder="Your Email Address"
                    style={styles.inputField}
                    autoCapitalize="none"
                     />
                     <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                     />
                </View>
                <Text style={styles.fieldHeader}>Password</Text>
                <View style={styles.fieldcontainer}>
                    <FontAwesome 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                    placeholder="Your Password"
                    secureTextEntry={true}
                    style={styles.inputField}
                    autoCapitalize="none"
                     />

                     <Feather 
                        name="eye-off"
                        color="#2d2d2d"
                        size={20}
                     />
                </View>
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
    },
    fieldHeader: {
        color: '#2d2d2d',
        fontSize: 18
    },
    fieldcontainer: {
        borderBottomWidth: 1,
        paddingTop: 10,
        flexDirection: "row",
        paddingBottom: 2, 
        borderBottomColor: '#c9cccb',
        marginBottom: 20
    },
    inputField: {
        flex: 1,
        paddingLeft: 10,
        marginTop: -12,
        color: '#05375a'
    }
})

export default AuthenticationScreen;