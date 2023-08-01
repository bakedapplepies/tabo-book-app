import {
	Image,
	StyleSheet,
	ImageSourcePropType,
	ImageStyle
} from 'react-native'
import React from 'react'


interface ProfileIconProps {
	source: ImageSourcePropType;
	sidelen: number;
	style?: ImageStyle;
}

const ProfileIcon = (props: ProfileIconProps) => {
	return (
		<Image source={props.source} style={{
			...props.style,
			width: props.sidelen,
			height: props.sidelen,
			borderRadius: props.sidelen / 2,
		}} />
	)
}

export default ProfileIcon

const styles = StyleSheet.create({

})