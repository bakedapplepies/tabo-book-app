import {
  Text,
  Box,
  ScrollView
} from 'native-base'
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  useWindowDimensions
} from 'react-native'
import React from 'react'
import IconButton from '../../components/IconButton'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'


const gradientHeight: number = 100;
const backgroundWidth: number = 650;

const InfoCard = () => {
  const styles = useStyle();

  return (
    <Box backgroundColor="gray.50" style={styles.info_card}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-evenly" width={62} >
        <Image source={require("../../../assets/Star.png")} style={{ width: 16, height: 16 }} />
        <Text style={styles.rating} color="gray.900">
          {4.8}
        </Text>
        <Text style={styles.max_rating} color="gray.300">/5</Text>
      </Box>

      <Box borderWidth={0.5} borderColor="gray.200" bgColor="gray.200" height={8} />

      <Box flexDirection="row" alignItems="center" justifyContent="space-evenly" width={62} >
        <Image source={require("../../../assets/Eye.png")} style={{ width: 16, height: 16 }} />
        <Text style={styles.rating} color="gray.900">
          {4.2}k
        </Text>
      </Box>
    </Box>
  );
}

const DetailScreen = () => {
  const screenWidth = useWindowDimensions().width;

  const styles = useStyle();
  const navigation = useNavigation();

  // negative
  const backgroundOffset = (screenWidth - backgroundWidth) / 2;

  return (
    <Box style={styles.container} safeAreaTop safeAreaX>
      <Box style={styles.top_bar}>
        <Box style={{ flex: 1 }}>
          <IconButton
            imgSrc={require("../../../assets/ArrowBack.png")}
            style={styles.left_topbar_button}
            onPress={() => { navigation.goBack() }}
          />
        </Box>

        <Box style={{ flex: 1, alignItems: "flex-end" }}>
          <IconButton imgSrc={require("../../../assets/Favorite.png")} style={styles.right_topbar_button} />
        </Box>
      </Box>

      <ScrollView style={{ marginTop: -80 }}>
        <LinearGradient colors={["rgba(255, 255, 255, 1)", "transparent"]} style={{ ...styles.gradient, zIndex: 1, marginBottom: -gradientHeight }} />

        <ImageBackground
          source={require("../../../assets/BookCover.png")}
          style={{ ...styles.container_bookcover, left: backgroundOffset }}
          imageStyle={{ opacity: 0.2 }}
          alt="cover"
        >
          <Box style={{ elevation: 8 }}>
            <Image
              source={require("../../../assets/BookCover.png")}
              style={{ width: 167, height: 223 }}
            />
          </Box>
        </ImageBackground>

        <LinearGradient colors={["transparent", "rgba(255, 255, 255, 1)"]} style={{ ...styles.gradient, marginTop: -gradientHeight }} />

        <Box alignItems="center" width={screenWidth}>
          <InfoCard />
        </Box>

        <Text>
          Lorem ipsum dolor sit amet consectetur. Lacus amet orci arcu vel tristique in erat. Id egestas a lectus vitae. Eget condimentum magna proin eget nibh amet turpis nunc. Tempus eget tincidunt semper amet tortor.
        </Text>
      </ScrollView>
    </Box>
  )
}

export default DetailScreen

const useStyle = () => {
  const screenWidth = useWindowDimensions().width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },

    container_bookcover: {
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      width: backgroundWidth,
      height: 450,
    },

    top_bar: {
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

    gradient: {
      width: screenWidth,
      height: gradientHeight,
    },

    info_card: {
      width: 204,
      height: 56,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: -45
    },

    rating: {
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 24
    },

    max_rating: {
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 24
    }
  })

  return styles;
}