import {
  ImageSourcePropType,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native'
import {
  Box,
  Text,
  Image
} from 'native-base'
import React from 'react'


interface InputProps extends TextInputProps {
  label?: string;
  icon?: ImageSourcePropType
}

const Input = (props: InputProps) => {
  return (
    <>
      {props.label &&
        <Text style={styles.field_header}  fontWeight={100}>
          {props.label}
        </Text>
      }
      <Box style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: props.icon ? 16 : 0
      }}>
        {props.icon &&
          <Image source={props.icon} style={styles.icon} alt="icon" />
        }
        <TextInput
          style={[props.icon ? styles.input_field_icon : styles.input_field, props.style]}
          placeholder={props.placeholder}
          placeholderTextColor="#B3B3B3"
          secureTextEntry={props.secureTextEntry}
          underlineColorAndroid="transparent"
        />
      </Box>
    </>
  )
}

export default Input

const styles = StyleSheet.create({
  icon: {
    zIndex: 1,
    width: 14,
    height: 14,
    marginTop: -16,
    marginRight: -30
  },

  field_header: {
    marginBottom: 6,
    color: "#B3B3B3",
  },

  input_field_icon: {
    marginBottom: 18,
    backgroundColor: "#F2F2F2",
    width: 345,
    height: 36,
    borderRadius: 6,
    paddingHorizontal: 40,
    fontFamily: "WixMadeforDisplay"
  },

  input_field: {
    marginBottom: 18,
    backgroundColor: "#F2F2F2",
    width: 345,
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 13,
    fontFamily: "WixMadeforDisplay"
  }
})