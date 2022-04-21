import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Input, Button, BackHeader } from "./../../components";
let Register = (props) => {
  let [email, setEmail] = useState("johndoe@example.com");
  let [password, setPassword] = useState("544564565");
  return (
    <SafeAreaView style={styles._container}>
        <BackHeader BackHandler={() => props.navigation.goBack()} />
        <Text style={styles._heading}>Register</Text>
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
          ButtonText="Register"
          onPress={() => props.navigation.navigate("PersonalInformation")}
        />
        <Button
          ButtonText="log in"
          onPress={() => props.navigation.navigate("Login")}
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
    marginTop: 10,
    marginBottom: 20,
  },
});
export default Register;
