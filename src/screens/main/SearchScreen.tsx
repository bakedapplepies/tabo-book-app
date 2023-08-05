import {
  FlatList,
  Text,
  Box,
  Image,
} from 'native-base'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import IconButton from '../../components/IconButton'
import Input from '../../components/Input'
import BookData, { topBookSearchData } from '../../data/BookData'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigation/config'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './DetailScreen'


type NavigationProps = NativeStackScreenProps<RootStackParams, "Detail">;

const SearchScreen = () => {
  const navigation = useNavigation<NavigationProps["navigation"]>();

  const renderTopBookSearch = ({ imgSrc, title, author }: BookData) => {
    return (
      <Box style={styles.entry_style}>

        <TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
          <Image source={imgSrc} style={styles.book_icon} alt='book_icon' />
        </TouchableOpacity>

        <Box style={{ width: 120 }}>
          <TouchableOpacity>
            <Text numberOfLines={1} style={styles.title}  fontWeight={400}>{title}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text numberOfLines={1} style={styles.author}  fontWeight={100}>{author}</Text>
          </TouchableOpacity>
        </Box>

      </Box>
    );
  }

  return (
    <Box style={styles.container} safeAreaTop>
      {/* top bar */}
      <Box style={styles.top_bar}>
        <Box style={{ flex: 1 }}>
          <IconButton
            imgSrc={require("../../../assets/ArrowBack.png")}
            style={styles.back_button}
            onPress={() => { navigation.goBack() }}
          />
        </Box>
      </Box>

      <Input
        icon={require("../../../assets/Search.png")}
        placeholder="Search title, topics or authors"
        placeholderTextColor="#B3B3B3"
      />

      <Text style={styles.top_book_search} color="primary.main"  fontWeight={600}>
        Top book search
      </Text>

      <FlatList
        style={{ width: 345, marginTop: 10 }}
        data={topBookSearchData}
        renderItem={({ item }) => renderTopBookSearch(item)}
        numColumns={2}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  top_bar: {
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

  top_book_search: {
    width: 345,
    fontSize: 17,
    marginVertical: 5,
  },

  entry_style: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  book_icon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 10,
  },

  title: {
    width: "90%",
    fontSize: 14,
    marginBottom: 4
  },

  author: {
    width: "90%",
    fontSize: 12
  }
})

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search" screenOptions={{
      headerShown: false
    }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Detail" component={DetailScreen} />
    </SearchStack.Navigator>
  );
}

export default SearchStackScreen