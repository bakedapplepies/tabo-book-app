import {
  FlatList,
  Text,
  Box,
  IconButton,
  Image,
  Center
} from 'native-base'
import {
  StyleSheet
} from 'react-native'
import React from 'react'
import BookData, { favoriteBooksData } from '../../data/BookData'
import BookDisplay from '../../components/BookDisplay'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './DetailScreen'


const FavoriteScreen = () => {

  const navigation = useNavigation();

  const renderBookFavorite = ({ imgSrc, title, author }: BookData) => {
    return (
      <BookDisplay
        enlarge
        style={{ marginHorizontal: 6, marginBottom: 22 }}
        imgSrc={imgSrc}
        title={title}
        author={author}
      />
    );
  }

  return (
    <Center bgColor="white" flex={1}>
      {/* top bar */}
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

        <Box style={{ flex: 1 }}>
          <Text style={styles.title} color="primary.main"  fontWeight={600}>
            Favorite
          </Text>
        </Box>

        <Box style={{ flex: 1 }} />
      </Box>

      <FlatList
        style={styles.flatlist_style}
        data={favoriteBooksData}
        renderItem={({ item }) => renderBookFavorite(item)}
        numColumns={2}
      />

    </Center>
  )
}

const styles = StyleSheet.create({
  top_bar: {
    flex: 0,
    flexDirection: "row",
    marginTop: 45,
    marginBottom: 25,
    width: 345,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 16,
    textAlign: "center",
  },

  flatlist_style: {
    width: 345,
  }
})

const FavoriteStack = createNativeStackNavigator();

const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator initialRouteName="Favorite" screenOptions={{
      headerShown: false
    }}>
      <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
      <FavoriteStack.Screen name="Detail" component={DetailScreen} />
    </FavoriteStack.Navigator>
  );
}

export default FavoriteStackScreen