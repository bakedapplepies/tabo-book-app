import {
  Image,
  Text,
  Box,
} from 'native-base'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  TouchableOpacityProps
} from 'react-native'
import React from 'react'
import BookData from '../data/BookData';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/config';
import { useNavigation, useRoute } from '@react-navigation/native';


export interface BookDisplayProps extends BookData, TouchableOpacityProps {
  style?: ViewStyle;
  enlarge?: boolean;
}

interface RatingProps {
  label: string
}

const Rating = (props: RatingProps) => {
  return (
    <Box style={styles.rating_view}>
      <Image source={require("../../assets/Star.png")} style={{ width: 8, height: 8 }} alt="star" />
      <Text style={styles.rating_text} fontFamily="WixMadeforDisplayBold">
        {props.label}
      </Text>
      <Text style={styles.max_rating_text} fontFamily="WixMadeforDisplayBold">/5</Text>
    </Box>
  );
}

type BookDetailNavigationProps = NativeStackScreenProps<RootStackParams>

const BookDisplay = (props: BookDisplayProps) => {
  const navigation = useNavigation<BookDetailNavigationProps["navigation"]>();

  return (
    <Box style={{ ...props.style, flexDirection: "column" }}>
      {/* Book cover */}
      <TouchableOpacity
        style={props.enlarge ? styles.book_cover_view_enlarge : styles.book_cover_view}
        onPress={() => { navigation.navigate("Detail") }}
      >
        <ImageBackground
          source={props.imgSrc}
          style={styles.book_cover}
          resizeMode="cover"
          resizeMethod="scale"
          alt="background"
        >
          <Rating
            label="4,8"
          />
        </ImageBackground>
      </TouchableOpacity>

      {/* Title */}
      <TouchableOpacity
        onPress={() => { navigation.navigate("Detail") }}
      >
        <Text style={styles.title} numberOfLines={1} fontFamily="WixMadeforDisplaySemiBold">{props.title}</Text>
      </TouchableOpacity>

      {/* Author */}
      <TouchableOpacity
        onPress={() => { navigation.navigate("Detail") }}  // change to author detail
      >
        <Text style={styles.author} numberOfLines={1} fontFamily="WixMadeforDisplayRegular">{props.author}</Text>
      </TouchableOpacity>
    </Box>
  )
}

export default BookDisplay

const styles = StyleSheet.create({
  rating_view: {
    zIndex: 1,
    width: 47,
    height: 16,
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 8,
    marginLeft: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  rating_text: {
    fontWeight: "700",
    fontSize: 10,
    color: "#1A1A1A",
    marginHorizontal: 2,
    lineHeight: 15,
  },
  
  max_rating_text: {
    fontWeight: "700",
    fontSize: 8,
    color: "#B3B3B3",
    lineHeight: 15,
  },

  book_cover_view: {
    width: 129,
    height: 188,
  },

  book_cover_view_enlarge: {
    width: 160,
    height: 212,
    backgroundColor: "transparent",
  },

  book_cover: {
    width: "100%",
    height: "100%",
  },

  title: {
    width: 129,
    fontSize: 14,
    marginTop: 8
  },

  author: {
    width: 129,
    color: "#808080",
    fontSize: 12,
    marginTop: 2,
  }
})