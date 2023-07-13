import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import React from 'react'
import BookData from '../../data/BookData';


export interface BookDisplayProps extends BookData {
  style?: ViewStyle
  enlarge?: boolean;
}

const BookDisplay = (props: BookDisplayProps) => {
  return (
    <View style={{ ...props.style, flexDirection: "column" }}>
      {/* Book cover */}
      <TouchableOpacity
        style={props.enlarge ? styles.book_cover_view_enlarge : styles.book_cover_view}
      >
        <ImageBackground source={props.imgSrc} style={styles.book_cover} resizeMode="cover" resizeMethod="scale"/>
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