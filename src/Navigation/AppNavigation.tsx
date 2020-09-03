import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Starter from '../screens/LandingScreen';
import CallScheduler from '../screens/CallSchedulerScreen';
import Authentication from '../screens/AuthenticationScreen';

type StackParamList =  {
    Authentication: undefined,
    CallScheduler: undefined,
    Starter: undefined
}

const Stack = createStackNavigator<StackParamList>();


const AppNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="CallScheduler" component={CallScheduler} />
        <Stack.Screen name="Authentication" component={Authentication} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;