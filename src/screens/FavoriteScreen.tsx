import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton'
import BookData, { favoriteBooksData } from '../../data/BookData'
import BookDisplay from '../components/BookDisplay'


const FavoriteScreen = () => {

  const renderBookFavorite = ({ imgSrc, title, author }: BookData) => {
    return (
      <BookDisplay
        enlarge
        style={{marginHorizontal: 6, marginBottom: 22}}
        imgSrc={imgSrc}
        title={title}
        author={author}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.top_bar}>
        <View style={{ flex: 1 }}>
          <IconButton imgSrc={require("../../assets/ArrowBack.png")} style={styles.back_button} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            Favorite
          </Text>
        </View>

        <View style={{ flex: 1 }} />
      </View>

      <FlatList
        style={styles.flatlist_style}
        data={favoriteBooksData}
        renderItem={({ item }) => renderBookFavorite(item)}
        numColumns={2}
      />

    </View>
  )
}

export default FavoriteScreen

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
    alignItems: "center"
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

  flatlist_style: {
    width: 345,
  }
})