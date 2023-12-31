import {
  Text,
  Box,
  ScrollView,
  FlatList,
  Image,
  IconButton,
  Center
} from 'native-base'
import {
  StyleSheet,
  ImageBackground,
  useWindowDimensions
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import CommentData from '../../data/CommentData'
import Comment, { CommentProps } from '../../components/Comment'


const gradientHeight: number = 100;
const backgroundWidth: number = 650;

const InfoCard = () => {
  const styles = useStyle();

  return (
    <Box backgroundColor="gray.50" style={styles.info_card}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-evenly" width={62} >
        <Image source={require("../../../assets/Star.png")} style={{ width: 16, height: 16 }} alt="star" />
        <Text style={styles.average_rating} color="gray.900" fontWeight={600}>
          {4.8}
        </Text>
        <Text style={styles.max_rating} color="gray.300" fontWeight={600}>/5</Text>
      </Box>

      <Box borderWidth={0.5} borderColor="gray.200" bgColor="gray.200" height={8} />

      <Box flexDirection="row" alignItems="center" justifyContent="space-evenly" width={62} >
        <Image source={require("../../../assets/Eye.png")} style={{ width: 16, height: 16 }} alt="eye" />
        <Text style={styles.average_rating} color="gray.900" fontWeight={600}>
          {4.2}k
        </Text>
      </Box>
    </Box>
  );
}

const renderComment = (item: CommentProps) => {
  return (
    <Comment
      user={item.user}
      time_ago={item.time_ago}
      rating={item.rating}
      comment={item.comment}
    />
  );
}

const DetailScreen = () => {
  const screenWidth = useWindowDimensions().width;

  const styles = useStyle();
  const navigation = useNavigation();

  // negative
  const backgroundOffset = (screenWidth - backgroundWidth) / 2;

  return (
    <Center safeAreaX bgColor="white" flex={1}>
      <Box style={styles.top_bar}>
        <Box style={{ flex: 1 }}>
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

        <Box flex={1} alignItems="flex-end">
          <IconButton
            size={9}
            borderRadius="full"
            onPress={() => {}}
            icon={
              <Image
                source={require("../../../assets/Favorite.png")}
                alt="favorite_icon"
                style={{ width: "65%", height: "65%" }}
              />
            }
          />
        </Box>
      </Box>

      <ScrollView style={{ marginTop: -90 }}>
        <LinearGradient colors={["white", "transparent"]} style={{ ...styles.gradient, zIndex: 1, marginBottom: -gradientHeight }} />

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
              alt="book_cover"
            />
          </Box>
        </ImageBackground>

        <LinearGradient colors={["transparent", "white"]} style={{ ...styles.gradient, marginTop: -gradientHeight }} />

        <Box alignItems="center" width={screenWidth}>
          <InfoCard />

          <Text style={{ width: 345, marginTop: 26, lineHeight: 22 }} fontWeight={100}>
            Lorem ipsum dolor sit amet consectetur. Lacus amet orci arcu vel tristique in erat. Id egestas a lectus vitae. Eget condimentum magna proin eget nibh amet turpis nunc. Tempus eget tincidunt semper amet tortor.
          </Text>

          {/* Dash */}
          <Box
            borderWidth={0.4}
            width={345}
            marginTop={26}
            backgroundColor="gray.100"
            borderColor="gray.100"
          />

          <FlatList
            data={CommentData["b1"]}
            renderItem={({ item }) => renderComment(item)}
            scrollEnabled={false}
            style={{ marginBottom: 20 }}
          />
        </Box>
      </ScrollView>
    </Center>
  )
}

const useStyle = () => {
  const screenWidth = useWindowDimensions().width;

  const styles = StyleSheet.create({
    container_bookcover: {
      backgroundColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
      width: backgroundWidth,
      height: 450,
    },

    top_bar: {
      zIndex: 2,
      flexDirection: "row",
      marginTop: 45,
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

    average_rating: {
      marginHorizontal: 4,
      fontSize: 16,
      lineHeight: 24
    },

    max_rating: {
      fontSize: 16,
      lineHeight: 24
    }
  })

  return styles;
}

export default DetailScreen