import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import {useAuth, authentication} from "../../../src/firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Input, Button } from "./../../components";

let Login = (props) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const onLoginPress = () => {

    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
      console.log('Signed in');
      props.navigation.navigate('ManageGoals');
      console.log('Navigated');

      })
      .catch((error) => {
      console.log(error)
      });
}

  return (
    <SafeAreaView style={styles._container}>
      <Text style={styles._heading}>Log in</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          placeholder="Email Address"
          value={email}
          onChangeText={(email) => setEmail(email)}
          secureTextEntry={false}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <Button
          ButtonText="Log in"
          onPress={() => onLoginPress()}
        />
        <Button
          ButtonText="Register a New account"
          onPress={() => props.navigation.navigate("Register")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  _heading: {
    color: "#000",
    fontSize: 36,
    fontFamily: "Comfortaa-Regular",
    marginTop: 30,
    marginBottom: 20,
  },
});
export default Login;
