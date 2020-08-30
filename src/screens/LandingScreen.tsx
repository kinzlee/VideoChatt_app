import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const LandingScreen: any = () => {
    return (
        <View style={styles.screen}>
            <Text> This is the  Landing Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LandingScreen