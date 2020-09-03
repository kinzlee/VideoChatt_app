import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import SvgOne from '../asseets/img/svgOne.svg';
import SvgTwo from '../asseets/img/svgTwo.svg';

const LandingScreenTwo: any = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.svgContainer}>
                <View style={{paddingLeft: 20}}>
                <SvgOne height={300} width={200} />
                </View>
                <View style={{paddingRight: 20}}>
                <SvgTwo height={300} width={200} />
                </View>
            </View>
            <Text>This is the Vide Chatt React Native Mobile Application</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: colors.secondaryColor
    },
    svgContainer: {
        flexDirection: "row",
        paddingBottom: 60
    }
})

export default LandingScreenTwo;