import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'

import ProfileIcon from '../components/ProfileIcon';
import BookDisplay, { BookDisplayProps } from '../components/BookDisplay';
import {
  favoriteBooksData
} from '../../data/BookData';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import DetailScreen from './DetailScreen';


const HomeScreen = () => {
  const accountName: string = "Marcus Curtis";

  const navigation = useNavigation();

  // callback for flatlist
  const renderBookHome = (data: BookDisplayProps) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <BookDisplay
          imgSrc={data.imgSrc}
          title={data.title}
          author={data.author}
          navigation={navigation}
        />
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.backdrop}>
          <Text style={styles.title}>Hello, {accountName}!</Text>
          <Text style={styles.subtitle}>Which book suits your current mood?</Text>
        </View>

        <View style={styles.foredrop}>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ProfileIcon
              source={require("../../assets/Avatar.png")}
              sidelen={64}
              style={{ margin: 18 }}
            />
            <Text style={styles.account_name}>{accountName}</Text>
          </View>
          <Text style={styles.account_desc}>
            Lorem ipsum dolor sit amet consectetur. At vulputate vulputate id suscipit morbi. Tristique dolor dictum convallis nisl
          </Text>

        </View>

        <Text style={styles.category_title}>Favorites</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        <Text style={styles.category_title}>Most Popular</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        <Text style={styles.category_title}>Top Rating</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        <Text style={styles.category_title}>Categories</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        {/* Replace with BottomTab */}
        <View style={{marginVertical: 20}}/> 

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },

  backdrop: {
    paddingBottom: 42,
    width: 359,
    height: 259,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "column",
    backgroundColor: "#F58216",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    width: 168,
    height: 48
  },

  foredrop: {
    marginTop: -80,
    backgroundColor: "white",
    width: 327,
    height: 178,
    borderRadius: 8,
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  account_name: {
    fontWeight: "700",
    fontSize: 24,
  },

  account_desc: {
    marginHorizontal: 18,
    fontWeight: "300",
    fontSize: 14
  },

  category_title: {
    marginTop: 30,
    color: "#F58216",
    fontWeight: "700",
    width: 327,
  },

  flatlist_style: {
    marginHorizontal: 23,
    marginTop: 12
  },
})

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Detail" component={DetailScreen}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen