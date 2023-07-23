import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native'
import React from 'react'
import IconButton from '../../components/IconButton'
import Input from '../../components/Input'
import BookData, { topBookSearchData } from '../../data/BookData'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigation/config'
import { NativeStackScreenProps } from '@react-navigation/native-stack'


type NavigationProps = NativeStackScreenProps<RootStackParams, "Detail">;

const SearchScreen = () => {
	const navigation = useNavigation<NavigationProps["navigation"]>();

	const renderTopBookSearch = ({ imgSrc, title, author }: BookData) => {
		return (
			<View style={styles.entry_style}>

				<TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
					<Image source={imgSrc} style={styles.book_icon} />
				</TouchableOpacity>

				<View style={{ flexDirection: "column", width: 120 }} >
					<TouchableOpacity>
						<Text numberOfLines={1} style={styles.title}>{title}</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text numberOfLines={1} style={styles.author}>{author}</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* top bar */}
			<View style={styles.top_bar}>
				<View style={{ flex: 1 }}>
					<IconButton
						imgSrc={require("../../../assets/ArrowBack.png")}
						style={styles.back_button}
						onPress={() => { navigation.goBack() }}
					/>
				</View>
			</View>

			<Input
				icon={require("../../../assets/Search.png")}
				placeholder="Search title, topics or authors"
				placeholderTextColor="#B3B3B3"
			/>

			<Text style={styles.top_book_search}>
				Top book search
			</Text>

			<FlatList
				style={{ width: 345, marginTop: 10 }}
				data={topBookSearchData}
				renderItem={({ item }) => renderTopBookSearch(item)}
				numColumns={2}
			/>
		</View>
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
		color: "#F58216",
		fontSize: 17,
		fontWeight: "700",
		marginVertical: 5,
	},

	entry_style: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 12,
	},

	book_icon: {
		width: 48,
		height: 48,
		borderRadius: 8,
		marginRight: 10,
	},

	title: {
		fontWeight: "600",
		fontSize: 14,
		marginBottom: 4
	},

	author: {
		fontWeight: "400",
		fontSize: 12
	}
})

export default SearchScreen