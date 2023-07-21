import {
    StyleSheet,
    Image,
} from 'react-native'
import React from 'react'

const BottomTab = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F58216"
      }}
    >

      {/* <BottomTab.Screen name="Load" component={LoadingScreen} />
      <BottomTab.Screen name="Login" component={LoginScreen} />
      <BottomTab.Screen name="Signup" component={SignupScreen} /> */}

      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("./assets/Home.png")}
              style={[styles.bottom_tab_icon, { marginLeft: 100, tintColor: focused ? color : "black" }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("./assets/Search.png")}
              style={[styles.bottom_tab_icon, { marginLeft: 35, tintColor: focused ? color : "black"  }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <BottomTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("./assets/Favorite.png")}
              style={[styles.bottom_tab_icon, { marginRight: 35, tintColor: focused ? color : "black"  }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("./assets/Profile.png")}
              style={[styles.bottom_tab_icon, { marginRight: 100, tintColor: focused ? color : "black"  }]}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: styles.bottom_tab,
        }}
      />

      {/* <BottomTab.Screen name="Detail" component={DetailScreen} /> */}

    </BottomTab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})