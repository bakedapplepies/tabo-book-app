import {
    StyleSheet,
    Image,
} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/main/SearchScreen';
import FavoriteScreen from '../screens/main/FavoriteScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F58216"
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Home.png")}
              style={[styles.bottom_tab_icon, { marginLeft: 100, tintColor: focused ? color : "black" }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Search.png")}
              style={[styles.bottom_tab_icon, { marginLeft: 35, tintColor: focused ? color : "black"  }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Favorite.png")}
              style={[styles.bottom_tab_icon, { marginRight: 35, tintColor: focused ? color : "black"  }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/Profile.png")}
              style={[styles.bottom_tab_icon, { marginRight: 100, tintColor: focused ? color : "black"  }]}
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
    paddingBottom: 12,
    justifyContent: "space-between"
  },
})