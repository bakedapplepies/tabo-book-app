import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React from 'react'
import Input from '../components/Input'
import IconButton from '../components/IconButton'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top_bar}>
        <View style={{ flex: 1 }}>
          <IconButton
          imgSrc={require("../../assets/ArrowBack.png")}
          style={styles.back_button}
          onPress={() => { navigation.goBack() }}
        />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            Edit Profile
          </Text>
        </View>
        
        <View style={{ flex: 1 }} />
      </View>

      <ScrollView style={{ flex: 0, }}>
        <View style={{ flex: 1, alignItems: "center", marginBottom: 40 }}>
          <Image source={require("../../assets/Avatar.png")} style={styles.pfp_icon} />
          <TouchableOpacity style={{ marginTop: -15, ...styles.camera_icon }}>
            <Image source={require("../../assets/Camera.png")} style={styles.camera_icon_img} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.profile_name}>
            Marcus Curtis
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Input label="NAME" placeholder="Name" />
          <Input label="EMAIL" placeholder="Email" />
          <Input label="MOBILE NUMBER" placeholder="Mobile number" />
          <Input label="PASSWORD" placeholder="Password" secureTextEntry />
          <Input label="NEW PASSWORD" placeholder="New Password" secureTextEntry />

          <TouchableOpacity style={styles.update_button}>
            <Image source={require("../../assets/Refresh.png")} style={styles.update_icon} />
            <Text style={styles.update_text}>
              Update
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ flex: 1, marginTop: 30, marginBottom: 20 }}>
          <Text style={styles.signout_text}>
            Sign out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

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
    alignItems: "center",
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

  pfp_icon: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },

  camera_icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center"
  },

  camera_icon_img: {
    width: 18,
    height: 18
  },

  profile_name: {
    fontWeight: "700",
    fontSize: 24
  },

  update_button: {
    backgroundColor: "#F58216",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 345,
    height: 48,
    borderRadius: 8
  },

  update_icon: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },

  update_text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginHorizontal: 5,
  },

  signout_text: {
    color: "#808080",
    textAlign: "center",
  },
})