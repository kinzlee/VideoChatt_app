import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import SvgOne from '../assets/img/svgOne.svg';
import SvgTwo from '../assets/img/svgTwo.svg';

const LandingScreenTwo: any = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.contentContainer}>
            <View style={styles.svgContainer}>
                <View style={{paddingLeft: 20}}>
                <SvgOne height={360} width={250} />
                </View>
                <View style={{paddingRight: 20, paddingTop: 40 }}>
                <SvgTwo height={250} width={150} />
                </View>
            </View>
                <View style={{paddingTop: 20, margin: 25}}>
                    <Text style={styles.textStyle}>This is the Vide Chatt React Native Mobile Application</Text>
                </View>
            </View>
            <Text style={{color:colors.accentColor}}>Swipe Left >></Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: colors.primaryColor
    },
    contentContainer: {
        flexDirection: "column",
        paddingBottom: 80
    },
    svgContainer: {
        flexDirection: "row",
        // paddingBottom: 8s0
    },
    textStyle: {
        color: colors.whiteColor,
        fontSize: 24,
        fontWeight: "bold"
    }
})

export default LandingScreenTwo;