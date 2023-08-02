import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../screens/main/HomeScreen';
import SearchStackScreen from '../screens/main/SearchScreen';
import FavoriteStackScreen from '../screens/main/FavoriteScreen';
import ProfileStackScreen from '../screens/main/ProfileScreen';
import tabo_theme from '../theme';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  const mainColor = tabo_theme.colors.primary.main;

  return (
    <Tab.Navigator initialRouteName="HomeStack" screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: mainColor,
    }}>

      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Home.png")}
              style={[styles.bottom_tab_icon, { tintColor: focused ? color : "black" }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <Tab.Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Search.png")}
              style={[styles.bottom_tab_icon, { tintColor: focused ? color : "black" }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Favorite.png")}
              style={[styles.bottom_tab_icon, { tintColor: focused ? color : "black" }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Profile.png")}
              style={[styles.bottom_tab_icon, { tintColor: focused ? color : "black" }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  bottom_tab_icon: {
    width: 30,
    height: 30,
  },

  bottom_tab: {
    height: 70,
    paddingBottom: 8,
    justifyContent: "space-between"
  },
})