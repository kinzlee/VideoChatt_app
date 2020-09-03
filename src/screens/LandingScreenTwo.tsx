import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandingScreenTwo: any = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the First landing screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})

export default LandingScreenTwo;