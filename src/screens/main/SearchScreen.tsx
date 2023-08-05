import {
  FlatList,
  Text,
  Box,
  Image,
  IconButton,
  Input,
  Center,
} from 'native-base'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React from 'react'
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
            <Text numberOfLines={1} style={styles.title} fontWeight={400}>{title}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text numberOfLines={1} style={styles.author} fontWeight={100}>{author}</Text>
          </TouchableOpacity>
        </Box>

      </Box>
    );
  }

  return (
    <Center safeAreaTop bgColor="white" flex={1}>
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
      </Box>

      <Input
        // icon={require("../../../assets/Search.png")}
        InputLeftElement={
          <Image
            alt="search"
            source={require("../../../assets/Search.png")}
            width={4}
            height={4}
            ml={3}
            tintColor="gray.300"
          />
        }
        placeholder="Search title, topics or authors"
        placeholderTextColor="gray.300"
        borderColor="gray.50"
        bgColor="gray.50"
        borderRadius={8}
        width={345}
        height={35}
      />

      <Text style={styles.top_book_search} color="primary.main" fontWeight={600}>
        Top book search
      </Text>

      <FlatList
        style={{ width: 345, marginTop: 10 }}
        data={topBookSearchData}
        renderItem={({ item }) => renderTopBookSearch(item)}
        numColumns={2}
      />
    </Center>
  )
}

const styles = StyleSheet.create({
  top_bar: {
    flexDirection: "row",
    marginTop: 35,
    marginBottom: 10,
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
    marginTop: 30,
    marginBottom: 10
  },

  entry_style: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
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