import {
  StatusBar,
} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../screens/auth/LoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import BottomTab from './BottomTab';
import DetailScreen from '../screens/main/DetailScreen';

const Root = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={LoadingScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          <Stack.Screen name="Detail" component={DetailScreen}/>
          <Stack.Screen name="BottomTab" component={BottomTab}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Root