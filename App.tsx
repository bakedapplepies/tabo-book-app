import { Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import HomeStackScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import SearchStackScreen from './src/screens/SearchScreen';
import SignupScreen from './src/screens/SignupScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator()

  return (
    <NavigationContainer>
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
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottom_tab_icon: {
    width: 30,
    height: 30,
    // backgroundColor: "red"
  },

  bottom_tab: {
    height: 70,
    paddingBottom: 12,
    justifyContent: "space-between"
  },
});
