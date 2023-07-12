import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
} from 'react-native'
import React from 'react'


interface InputProps extends TextInputProps {
  label?: string;
}

const Input = (props: InputProps) => {
  return (
    <>
      { props.label &&
        <Text style={styles.field_header}>
          {props.label}
        </Text>
      }
      <TextInput
        style={styles.input_field}
        placeholder={props.placeholder}
        placeholderTextColor="#B3B3B3"
        secureTextEntry={props.secureTextEntry}
      />
    </>
  )
}

export default Input

const styles = StyleSheet.create({
  field_header: {
    marginBottom: 6,
    color: "#B3B3B3",
    fontWeight: "500"
  },

  input_field: {
    marginBottom: 18,
    backgroundColor: "#F2F2F2",
    width: 345,
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 13
  },
})