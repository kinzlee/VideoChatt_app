import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SvgThree from '../assets/img/svgThree.svg';
import colors from '../constants/colors';


const LandingScreen: any = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.svgContainer}>
            <SvgThree height={400} width={300} />
            <View style={styles.headTextContainer}>
                <View style={styles.headerContainer}>
                <Text style={styles.headerTextStyle}>Hey</Text>
                <Text style={styles.headerTextStyle}>There</Text>

            </View>
            <View style={styles.subContainer}>
                <Text style={styles.textStyle}>Welcome </Text>
                <Text style={styles.textStyle}>     To </Text>
                <Text style={styles.textStyle}>VideoChatt</Text>


            </View>
            </View>
            
            </View>
            <Text style={styles.textStyle}> This is the  Landing Screen</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Authentication')} ><Text style={styles.btnText}>SignIn</Text></TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryColor
    },
    svgContainer: {
        flexDirection: "row",
        paddingBottom: 50,
        paddingRight: 15
    },
    headerContainer: {
        paddingTop: 65
    },
    headTextContainer: {
        flexDirection: "column",
        paddingRight: 20        
    },
    headerTextStyle: {
        color: colors.whiteColor,
        fontSize: 42,
        fontWeight: "bold"
    },
    subContainer: {
        paddingTop: 60,
    },
    textStyle: {
        color: colors.whiteColor,
        fontSize: 24
    },
    btnContainer: {
        backgroundColor: colors.accentColor,
        borderRadius: 5,
        elevation: 4, 
        padding: 15,
        marginTop: 20

    },
    btnText: {
        color: colors.whiteColor,
        fontSize: 16
    }
})

export default LandingScreen