import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'


const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top_bar}>
        <View style={{ flex: 1 }}>
          <IconButton
            imgSrc={require("../../assets/ArrowBack.png")}
            style={styles.left_topbar_button}
            onPress={() => { navigation.goBack() }}
          />
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <IconButton imgSrc={require("../../assets/Favorite.png")} style={styles.right_topbar_button} />
        </View>
      </View>

      <ScrollView style={{ marginTop: -80 }}>
        <View style={styles.container_bookcover}>
          <Image
            source={require("../../assets/BookCover.png")}
            style={{ opacity: 0.2, width: "100%", height: "100%", position: "absolute", left: "-20%" }}
          />

          <LinearGradient colors={["rgba(255, 255, 255, 0.87)", "transparent"]} style={{marginTop: -100}} />
          {/* <Image
              source={require("../../assets/BookCover.png")}
              style={{ width: 159, height: 212 }}
            /> */}

        </View>
      </ScrollView>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  container_bookcover: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 650,
    height: 450,
  },

  top_bar: {
    flex: 0,
    zIndex: 2,
    flexDirection: "row",
    marginTop: 35,
    marginBottom: 25,
    width: 345,
    justifyContent: "center",
    alignItems: "center",
  },

  left_topbar_button: {
    width: 19,
    height: 19,
  },

  right_topbar_button: {
    width: 20,
    height: 20,
  },
})