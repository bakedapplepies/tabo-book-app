import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
  TouchableOpacityProps
} from 'react-native'
import React from 'react'
import BookData from '../data/BookData';
import { NavigationProp } from '@react-navigation/native';


export interface BookDisplayProps extends BookData, TouchableOpacityProps {
  style?: ViewStyle;
  enlarge?: boolean;
  navigation?: NavigationProp<ReactNavigation.RootParamList>;
}

interface RatingProps extends ViewProps {
  label: string
}

const Rating = (props: RatingProps) => {
  return (
    <View style={props.style}>
      <Image source={require("../../assets/Star.png")} style={{ width: 8, height: 8 }} />
      <Text style={styles.rating_text}>
        {props.label}
      </Text>
      <Text style={styles.max_rating_text}>/5</Text>
    </View>
  );
}

const BookDisplay = (props: BookDisplayProps) => {
  return (
    <View style={{ ...props.style, flexDirection: "column" }}>
      {/* Book cover */}
      <TouchableOpacity
        style={props.enlarge ? styles.book_cover_view_enlarge : styles.book_cover_view}
        onPress={() => { props.navigation?.navigate("Detail") }}
      >
        <ImageBackground source={props.imgSrc} style={styles.book_cover} resizeMode="cover" resizeMethod="scale">
          <Rating
            style={styles.rating_view}
            label="4,8"
          />
        </ImageBackground>
      </TouchableOpacity>

      {/* Title */}
      <TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
      </TouchableOpacity>

      {/* Author */}
      <TouchableOpacity>
        <Text style={styles.author} numberOfLines={1}>{props.author}</Text>
      </TouchableOpacity>
    </View>
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
  },

  max_rating_text: {
    fontWeight: "700",
    fontSize: 8,
    color: "#B3B3B3"
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
    fontWeight: "600",
    marginTop: 8
  },

  author: {
    width: 129,
    color: "#808080",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 2,
  }
})