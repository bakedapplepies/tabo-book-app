import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton'
import { favoriteBooksData } from '../../data/BookData'
import BookDisplay, { BookDisplayProps } from '../components/BookDisplay'


const FavoriteScreen = () => {

  const renderBookFavorite = (data: BookDisplayProps) => {
    return (
      <View>
        <BookDisplay
          imgSrc={data.imgSrc}
          title={data.title}
          author={data.author}
        />
      </View>
    );
  }

  const renderBookFavorite2 = () => {
    let render = [];

    for (let i: number = 0; i < favoriteBooksData.length; i+=2)
    {
      let row: JSX.Element = (
        <View style={{ flexDirection: "row", marginBottom: 25 }}>
          <BookDisplay
            enlarge
            imgSrc={favoriteBooksData[i].imgSrc}
            title={favoriteBooksData[i].title}
            author={favoriteBooksData[i].author}
          />
          { (i + 1) < favoriteBooksData.length &&
            <BookDisplay
              enlarge
              imgSrc={favoriteBooksData[i + 1].imgSrc}
              title={favoriteBooksData[i + 1].title}
              author={favoriteBooksData[i + 1].author}
            />
          }
        </View>
      )
      render.push(row);
    }

    return render;
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
        data={[{}]}
        renderItem={() => (<View>{renderBookFavorite2()}</View>)}
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