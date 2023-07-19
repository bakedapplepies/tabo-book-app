import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
  ImageStyle
} from 'react-native'
import React from 'react'


interface IconButtonProps extends TouchableOpacityProps {
  imgSrc: ImageSourcePropType;
  style?: ImageStyle;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={props.imgSrc} style={props.style} resizeMode="contain" />
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({})