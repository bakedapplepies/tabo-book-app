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


const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top_bar}>
        <View style={{ flex: 1 }}>
          <IconButton
            imgSrc={require("../../assets/ArrowBack.png")}
            style={styles.left_topbar_button}
            onPress={() => {navigation.goBack()}}
          />
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <IconButton imgSrc={require("../../assets/Favorite.png")} style={styles.right_topbar_button} />
        </View>
      </View>

      <ScrollView style={{marginTop: -80}}>
        <View style={styles.container}>
          {/* <Image source={require("../../assets/BookCover.png")} style={styles.book_cover_grayscale} /> */}
          {/* Top bar */}

          <ImageBackground
            source={require("../../assets/BookCover.png")}
            style={{...styles.container, opacity: 0.05, width: 400, height: 450}}
          >
            <Image
              source={require("../../assets/BookCover.png")}
              style={{width: "100%", height: "100%"}}
            />
          </ImageBackground>

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