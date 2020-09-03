import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Starter from '../screens/LandingScreen';
import StarterOne from '../screens/LandingScreenTwo';
import CallScheduler from '../screens/CallSchedulerScreen';
import Authentication from '../screens/AuthenticationScreen';

type StackParamList =  {
    Authentication: undefined,
    CallScheduler: undefined,
    Starter: undefined
}

type StackParamListOne = {
    StarterOne: undefined    
}

const Stack = createStackNavigator<StackParamList>();


const mainNavigation = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="CallScheduler" component={CallScheduler} />
        <Stack.Screen name="Authentication" component={Authentication} />
        </Stack.Navigator>
    )
}

const StackOne = createStackNavigator<StackParamListOne>();

const FirstNavigation = () => {
    return (
        <StackOne.Navigator>
            <StackOne.Screen name="StarterOne" component={StarterOne} />
        </StackOne.Navigator>
    )
}

const Tab = createMaterialTopTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="StarterOne" component={FirstNavigation} />
                <Tab.Screen name="Starter" component={mainNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;