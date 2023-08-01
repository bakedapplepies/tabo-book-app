import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  Text,
  Box,
  Image,
  ScrollView
} from 'native-base'
import React from 'react'
import Input from '../../components/Input'
import IconButton from '../../components/IconButton'
import { useNavigation } from '@react-navigation/native'
import tabo_theme from '../../theme/tabo_theme'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './DetailScreen'


const ProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <Box style={styles.container}>
      <Box style={styles.top_bar}>
        <Box style={{ flex: 1 }}>
          <IconButton
            imgSrc={require("../../../assets/ArrowBack.png")}
            style={styles.back_button}
            onPress={() => { navigation.goBack() }}
          />
        </Box>

        <Box style={{ flex: 1 }}>
          <Text style={styles.title} color="primary.main" fontFamily="WixMadeforDisplay">
            Edit Profile
          </Text>
        </Box>

        <Box style={{ flex: 1 }} />
      </Box>

      <ScrollView>
        <Box style={{ flex: 1, alignItems: "center", marginBottom: 40 }}>
          <Image source={require("../../../assets/Avatar.png")} style={styles.pfp_icon} alt='pfp' />
          <TouchableOpacity style={{ marginTop: -15, ...styles.camera_icon }}>
            <Image source={require("../../../assets/Camera.png")} style={styles.camera_icon_img} alt='camera'/>
          </TouchableOpacity>
          <Text style={styles.profile_name} fontFamily="WixMadeforDisplay">
            Marcus Curtis
          </Text>
        </Box>

        <Box style={{ flex: 1 }}>
          <Input label="NAME" placeholder="Name" />
          <Input label="EMAIL" placeholder="Email" />
          <Input label="MOBILE NUMBER" placeholder="Mobile number" />
          <Input label="PASSWORD" placeholder="Password" secureTextEntry />
          <Input label="NEW PASSWORD" placeholder="New Password" secureTextEntry />

          <TouchableOpacity style={styles.update_button}>
            <Image source={require("../../../assets/Refresh.png")} style={styles.update_icon} alt='refresh' />
            <Text style={styles.update_text} fontFamily="WixMadeforDisplay">
              Update
            </Text>
          </TouchableOpacity>
        </Box>

        <TouchableOpacity style={{ flex: 1, marginTop: 30, marginBottom: 20 }}>
          <Text style={styles.signout_text} fontFamily="WixMadeforDisplay">
            Sign out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  top_bar: {
    flexDirection: "row",
    marginTop: 45,
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
    fontWeight: "700",
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
    fontSize: 24,
    lineHeight: 36,
    marginTop: 10,
    marginBottom: -10
  },

  update_button: {
    backgroundColor: tabo_theme.colors.primary.main,
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

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{
      headerShown: false
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Detail" component={DetailScreen} />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen