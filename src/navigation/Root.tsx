import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/auth/SplashingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import BottomTab from './BottomTab';

const Root = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          
          <Stack.Screen name="BottomTab" component={BottomTab}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Root