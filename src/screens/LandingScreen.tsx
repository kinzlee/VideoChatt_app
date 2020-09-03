import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const LandingScreen: any = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text> This is the  Landing Screen</Text>
            <Button title="GoToAuthentication" onPress={()=>navigation.navigate('Authentication')} />
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