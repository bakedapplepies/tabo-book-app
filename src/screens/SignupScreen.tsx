import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React from 'react'


const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Book.png")} style={styles.book_logo} />

      <Text style={styles.title}>
        Sign up
      </Text>
      <Text style={styles.subtitle}>
        Please enter your details to sign in
      </Text>

      <TextInput placeholder="Name" style={styles.input_field} placeholderTextColor="#B3B3B3" />
      <TextInput placeholder="Email" style={styles.input_field} placeholderTextColor="#B3B3B3" />
      <TextInput
        placeholder="Password"
        style={styles.input_field}
        placeholderTextColor="#B3B3B3"
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm
        Password"
        style={styles.input_field}
        placeholderTextColor="#B3B3B3"
        secureTextEntry
      />

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <View style={{ flex: 2, }} />
        <TouchableOpacity style={styles.forgot_pass_button}>
          <Text style={{ textAlign: "right", color: "#015CC8" }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.sign_button}>
        <Text style={styles.sign_text}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  book_logo: {
    marginBottom: 18,
    width: 115,
    height: 87,
  },

  title: {
    marginBottom: 2,
    "fontSize": 20,
    "fontWeight": "600",
  },

  subtitle: {
    marginBottom: 22,
    "color": "#808080"
  },

  input_field: {
    marginTop: 10,
    width: 345,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 13
  },

  forgot_pass_button: {
    flex: 1,
    marginVertical: 16,
    marginRight: 26,
  },

  sign_button: {
    marginBottom: 8,
    width: 345,
    height: 48,
    backgroundColor: "#F58216",
    borderWidth: 1,
    borderColor: "#F58216",
    borderRadius: 8,
    justifyContent: "center"
  },

  sign_text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "600"
  },
})