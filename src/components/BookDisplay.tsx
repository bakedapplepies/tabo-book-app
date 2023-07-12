import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'


export interface BookDisplayProps {
  imgSrc: ImageSourcePropType;
  title: string;
  author: string;
}

const BookDisplay = (props: BookDisplayProps) => {
  return (
    <>
      {/* Book cover */}
      <TouchableOpacity style={styles.book_cover_view}>
        <Image source={props.imgSrc} style={styles.book_cover} />
      </TouchableOpacity>

      {/* Title */}
      <TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
      </TouchableOpacity>

      {/* Author */}
      <TouchableOpacity>
        <Text style={styles.author} numberOfLines={1}>{props.author}</Text>
      </TouchableOpacity>
    </>
  )
}

export default BookDisplay

const styles = StyleSheet.create({
  book_cover_view: {
    width: 139,
    height: 175,
    // backgroundColor: "red",
    paddingRight: 34,
  },

  book_cover: {
    marginTop: -20,
    width: "123%",
    height: "123%",
  },

  title: {
    width: 129,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12
  },

  author: {
    width: 129,
    color: "#808080",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 2,
  }
})