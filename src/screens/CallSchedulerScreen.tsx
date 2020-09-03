import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const CallSchedulerScreen: any = () => {
    return (
        <View style={styles.screen}>
            <Text> This is the call scheduler Screen</Text>
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

export default CallSchedulerScreen