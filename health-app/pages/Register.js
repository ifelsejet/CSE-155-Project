import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
      
    <View style={styles.container}>
      <Text>Register!</Text>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#000000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
    
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Register!</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width: 200,
    height: 200
  },
 
  inputView: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  
 
  loginBtn: {
    width: "80%",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});