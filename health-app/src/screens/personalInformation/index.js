import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Input, Button, BackHeader } from "./../../components";
let PersonalInformation = (props) => {
  let [name, setName] = useState("");
  let [weight, setWeight] = useState("");
  let [age, setAge] = useState("");
  let [height, setHeight] = useState("");
  let [fitness, setFitness] = useState("");
  return (
    <SafeAreaView style={styles._container}>
      <BackHeader BackHandler={() => props.navigation.goBack()} />
      <Text style={styles._heading}>Add Personal Information</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._title}>Name:</Text>
        <Input
          placeholder=""
          value={name}
          onChangeText={(name) => setName(name)}
          secureTextEntry={false}
        />
        <Text style={styles._title}>Weight:</Text>
        <Input
          placeholder=""
          value={weight}
          onChangeText={(weight) => setWeight(weight)}
          secureTextEntry={false}
        />
        <Text style={styles._title}>Age:</Text>
        <Input
          placeholder=""
          value={age}
          onChangeText={(age) => setAge(age)}
          secureTextEntry={false}
        />
        <Text style={styles._title}>Height:</Text>
        <Input
          placeholder="Height"
          value={height}
          onChangeText={(height) => setHeight(height)}
          secureTextEntry={false}
        />
        <Text style={styles._title}>Fitness Goal:</Text>
        <Input
          placeholder=""
          value={fitness}
          onChangeText={(fitness) => setFitness(fitness)}
          secureTextEntry={false}
        />
        <Button
          ButtonText="Register"
          onPress={() => props.navigation.navigate("Progess")}
        />
        <View style={{ paddingBottom: 20 }} />
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
    fontSize: 23,
    fontFamily: "Comfortaa-Regular",
    marginTop: 10,
    marginBottom: 20,
  },
  _title: {
    color: "#000",
    fontSize: 15,
    fontFamily: "Comfortaa-Regular",
    marginBottom: -10,
    marginTop: 10,
  },
});
export default PersonalInformation;
