import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Input, Button } from "./../../components";
let Login = (props) => {
  let [email, setEmail] = useState("johndoe@example.com");
  let [password, setPassword] = useState("544564565");
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
          onChangeText={(password) => setPassword(email)}
          secureTextEntry={true}
        />
        <Button
          ButtonText="Log in"
          onPress={() => props.navigation.navigate("Progess")}
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
