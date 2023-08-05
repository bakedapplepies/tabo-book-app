import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  Text,
  Box,
  Image,
  ScrollView,
  IconButton,
  FormControl,
  Input,
  VStack,
  Center,
} from 'native-base'
import React from 'react'
import tabo_theme from '../../theme'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './DetailScreen'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigation/config'

type NavigationProps = NativeStackScreenProps<RootStackParams>;

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProps["navigation"]>();
  return (
    <Center bgColor="white" flex={1}>
      {/* Top bar */}
      <Box style={styles.top_bar}>
        <Box flex={1}>
          <IconButton
            size={9}
            paddingLeft={1.5}
            borderRadius="full"
            onPress={() => { navigation.goBack(); }}
            icon={
              <Image
                source={require("../../../assets/ArrowBack.png")}
                width="65%"
                height="65%"
                alt="back"
              />
            }
          />

        </Box>

        <Box flex={1}>
          <Text style={styles.title} color="primary.main" fontWeight={600}>
            Edit Profile
          </Text>
        </Box>

        <Box flex={1} />
      </Box>

      <ScrollView>
        <Box style={{ flex: 1, alignItems: "center", marginBottom: 40 }}>
          <Image source={require("../../../assets/Avatar.png")} style={styles.pfp_icon} alt='pfp' />
          <TouchableOpacity style={{ marginTop: -15, ...styles.camera_icon }}>
            <Image source={require("../../../assets/Camera.png")} style={styles.camera_icon_img} alt='camera' />
          </TouchableOpacity>
          <Text style={styles.profile_name} fontWeight={600}>
            Marcus Curtis
          </Text>
        </Box>

        <Box style={{ flex: 1 }}>
          {/* Form controls */}
          <VStack space={4} marginBottom={8}>
            <FormControl>
              <FormControl.Label _text={{
                color: "gray.300",
                fontWeight: 600
              }}>NAME</FormControl.Label>
              <Input
                fontWeight={100}
                fontSize={16}
                placeholder="Name"
                bgColor="gray.50"
                borderColor="gray.50"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                color: "gray.300",
                fontWeight: 600
              }}>EMAIL</FormControl.Label>
              <Input
                fontWeight={100}
                fontSize={16}
                placeholder="Email"
                bgColor="gray.50"
                borderColor="gray.50"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                color: "gray.300",
                fontWeight: 600
              }}>MOBILE NUMBER</FormControl.Label>
              <Input
                fontWeight={100}
                fontSize={16}
                placeholder="Mobile
              number"
                bgColor="gray.50"
                borderColor="gray.50"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                color: "gray.300",
                fontWeight: 600
              }}>PASSWORD</FormControl.Label>
              <Input
                fontWeight={100}
                fontSize={16}
                placeholder="Password"
                bgColor="gray.50"
                borderColor="gray.50"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                color: "gray.300",
                fontWeight: 600
              }}>NEW PASSWORD</FormControl.Label>
              <Input
                fontWeight={100}
                fontSize={16}
                placeholder="New Password"
                bgColor="gray.50"
                borderColor="gray.50"
              />
            </FormControl>
          </VStack>

          <TouchableOpacity style={styles.update_button}>
            <Image source={require("../../../assets/Refresh.png")} style={styles.update_icon} alt="refresh" tintColor="white" />
            <Text style={styles.update_text} fontWeight={600}>
              Update
            </Text>
          </TouchableOpacity>
        </Box>

        <TouchableOpacity style={{ flex: 1, marginTop: 30, marginBottom: 25 }}>
          <Text fontWeight={100} textAlign="center" color="gray.500">
            Sign out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Center>
  )
}

const styles = StyleSheet.create({
  top_bar: {
    flexDirection: "row",
    marginTop: 45,
    marginBottom: 25,
    width: 345,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
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
    width: 22,
    height: 22,
  },

  update_text: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 5,
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