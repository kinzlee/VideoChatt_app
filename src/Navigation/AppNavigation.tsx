import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Starter from '../screens/LandingScreen';
import StarterOne from '../screens/LandingScreenTwo';
import CallScheduler from '../screens/CallSchedulerScreen';
import Authentication from '../screens/AuthenticationScreen';
import VideoCall from '../screens/VideoCallScreen';
import colors from '../constants/colors';

type StackParamList =  {
    Authentication: undefined,
    CallScheduler: undefined, 
    VideoCall: undefined
}

type StackParamListOne = {
    StarterOne: undefined    
}

const Stack = createStackNavigator<StackParamList>();


const MainNavigation = () => {
    return (
        <Stack.Navigator headerMode="none">
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="VideoCall" component={VideoCall} />
        <Stack.Screen name="CallScheduler" component={CallScheduler} />
        </Stack.Navigator>
    )
}

const StackOne = createStackNavigator<StackParamListOne>();

const FirstNavigation = () => {
    return (
        <StackOne.Navigator headerMode="none">
            <StackOne.Screen name="StarterOne" component={StarterOne} />
        </StackOne.Navigator>
    )
}

type StackParamListTwo = {
    Starter: undefined    
}

const StackTwo = createStackNavigator<StackParamListTwo>();


const SecondNavigation = () => {
    return (
        <StackTwo.Navigator headerMode="none">
            <StackTwo.Screen name="Starter" component={Starter} />
        </StackTwo.Navigator>
    )
}



const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
            <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{backgroundColor: colors.primaryColor, height: 0},
            }}
            >
                <Tab.Screen name="StarterOne" component={FirstNavigation} options={{tabBarLabel: 'ddd'}} />
                <Tab.Screen name="Starter" component={SecondNavigation} />
            </Tab.Navigator>
    )
}

const Main = createStackNavigator();

const AppNavigation = () => {
    return (
            <NavigationContainer>
                <Main.Navigator headerMode="none">
                    <Main.Screen name="StarterOne" component={TabNavigation} />
                    <Main.Screen name="Authentication" component={MainNavigation} />
                </Main.Navigator>
            </NavigationContainer>
    )
}

export default AppNavigation;