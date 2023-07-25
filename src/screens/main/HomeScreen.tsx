import { StyleSheet } from 'react-native';
import {
  FlatList,
  ScrollView,
  Box,
  Text
} from 'native-base'
import React from 'react'
import ProfileIcon from '../../components/ProfileIcon';
import BookDisplay, { BookDisplayProps } from '../../components/BookDisplay';
import {
  favoriteBooksData
} from '../../data/BookData';


const HomeScreen = () => {
  const accountName: string = "Marcus Curtis";

  // callback for flatlist
  const renderBookHome = (data: BookDisplayProps) => {
    return (
      <Box style={{ marginHorizontal: 10 }}>
        <BookDisplay
          imgSrc={data.imgSrc}
          title={data.title}
          author={data.author}
        />
      </Box>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Box style={styles.container}>
        <Box style={styles.backdrop} bg="primary.main">
          <Text style={styles.title}>Hello, {accountName}!</Text>
          <Text style={styles.subtitle}>Which book suits your current mood?</Text>
        </Box>

        <Box style={styles.foredrop}>

          <Box style={{ flexDirection: "row", alignItems: "center" }}>
            <ProfileIcon
              source={require("../../../assets/Avatar.png")}
              sidelen={64}
              style={{ margin: 18 }}
            />
            <Text style={styles.account_name}>{accountName}</Text>
          </Box>
          <Text style={styles.account_desc}>
            Lorem ipsum dolor sit amet consectetur. At vulputate vulputate id suscipit morbi. Tristique dolor dictum convallis nisl
          </Text>

        </Box>

        <Text style={styles.category_title} color="primary.main">Favorites</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        <Text style={styles.category_title} color="primary.main">Most Popular</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        <Text style={styles.category_title} color="primary.main">Top Rating</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        <Text style={styles.category_title} color="primary.main">Categories</Text>
        <FlatList
          style={styles.flatlist_style}
          data={favoriteBooksData}
          renderItem={({ item }) => renderBookHome(item)}
          horizontal
        />

        {/* Replace with BottomTab */}
        <Box style={{ marginVertical: 20 }} />

      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },

  backdrop: {
    paddingBottom: 42,
    width: 359,
    height: 259,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    lineHeight: 36,
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    lineHeight: 24,
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    width: 168,
    height: 48,
    marginTop: 5,
  },

  foredrop: {
    marginTop: -80,
    backgroundColor: "white",
    width: 327,
    height: 188,
    borderRadius: 8,
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  account_name: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 36
  },

  account_desc: {
    marginHorizontal: 18,
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 22
  },

  category_title: {
    marginTop: 30,
    fontWeight: "700",
    width: 327,
  },

  flatlist_style: {
    marginHorizontal: 32,
    marginTop: 12
  },
})

export default HomeScreen