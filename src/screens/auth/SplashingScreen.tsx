import {
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native'
import React from 'react'


const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<Image source={require("../../../assets/BookWhite.png")} style={styles.logo} />
			<Text style={styles.title}>T A B O</Text>
		</View>
	)
}

export default SplashScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F58216',
		alignItems: 'center',
		justifyContent: 'center',
	},

	logo: {
		width: 115,
		height: 87,
	},

	title: {
		marginTop: 10,
		color: "white",
		fontSize: 40,
		fontWeight: "600",
	}
})