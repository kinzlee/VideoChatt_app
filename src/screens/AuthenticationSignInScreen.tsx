import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

// import { types } from '@babel/core';

const AuthenticationSignInScreen = ({navigation}) => {
    const [flow, setFlow] = useState({
        email: '',
        Password: '',
        validated: false,
        inputChangeText: false,
        textHidden: true
    })

    const onChangeTextHandler = (value) => {
        if(value.length !== 0) {
            setFlow({
                ...flow,
                email: value,
                inputChangeText: true
            })
        } else {
            setFlow({
                ...flow,
                email: value,
                inputChangeText: false
            })
        }
    }

    const onChangePasswordHandler = (value) => {
        setFlow({
            ...flow,
            Password: value
        })
    }

    const onConfirmEmailHandler = (value) => {
        if(value.length >= 5) {
            setFlow({
                ...flow,
                validated: true
            })
        }else {
            setFlow({
                ...flow,
                validated: false
            })
        }
    }

    const onTextHiddenHandler = () => {
        setFlow({
            ...flow,
            textHidden: !flow.textHidden
        })
    } 

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Animatable.Text animation="fadeInRight"
        direction="normal"
        easing="ease-in-out" style={styles.headerText}>Welcome!</Animatable.Text>
            </View>
            <Animatable.View animation="fadeInUp"
        direction="normal"
        easing="ease-in-out" style={styles.footer}>
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
                    onChangeText={(text) => onChangeTextHandler(text)}
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
                    secureTextEntry={flow.textHidden ? true : false}
                    style={styles.inputField}
                    autoCapitalize="none"
                    onChangeText={(psswrd) => onChangePasswordHandler(psswrd)}
                     />
                    <TouchableOpacity onPress={onTextHiddenHandler}>
                        {flow.textHidden ?(
                            <Feather 
                        name="eye-off"
                        color="#2d2d2d"
                        size={20}
                     />
                        ): (
                            <Feather 
                        name="eye"
                        color="#2d2d2d"
                        size={20}
                     />
                        )}
                    </TouchableOpacity>
                     
                </View>
                <Animatable.View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('VideoCall')
                    }} >
                        <Text>Sign In</Text>
                    </TouchableOpacity>
                </Animatable.View>
                <Animatable.View>
                    <Text>Sign Up</Text>
                </Animatable.View>

            </Animatable.View>
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
        paddingBottom: 1, 
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

export default AuthenticationSignInScreen;