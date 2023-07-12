import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'


export interface BookDisplayProps {
  enlarge?: boolean;
  imgSrc: ImageSourcePropType;
  title: string;
  author: string;
}

const BookDisplay = (props: BookDisplayProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      {/* Book cover */}
      <TouchableOpacity
        style={props.enlarge ? styles.book_cover_view_enlarge : styles.book_cover_view}
      >
        <ImageBackground source={props.imgSrc} style={styles.book_cover} resizeMode="cover"/>
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
  book_cover_view: {
    width: 139,
    height: 175,
    // backgroundColor: "red",
    backgroundColor: "transparent",
    paddingRight: 34,
  },

  book_cover_view_enlarge: {
    // width: 173,
    // height: 216,
    // backgroundColor: "red",
    backgroundColor: "transparent",
    // paddingRight: 34,
  },

  book_cover: {
    marginTop: -25,
    marginLeft: -13,
    // width: 190,
    // height: 246,
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