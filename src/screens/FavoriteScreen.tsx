import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton'


const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_bar}>
        <View style={{ flex: 1 }}>
          <IconButton imgSrc={require("../../assets/ArrowBack.png")} style={styles.back_button} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            Edit Profile
          </Text>
        </View>
        
        <View style={{ flex: 1 }} />
      </View>
      
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  top_bar: {
    flex: 0,
    flexDirection: "row",
    marginTop: 35,
    marginBottom: 25,
    width: 345,
    justifyContent: "center",
    alignItems: "center"
  },

  back_button: {
    width: 19,
    height: 19,
  },

  title: {
    color: "#F58216",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
})