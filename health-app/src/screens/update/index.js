import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Input, Button, BackHeader } from "./../../components";
let Update = (props) => {
  let [weight, setWeight] = useState("");
  let [age, setAge] = useState("");
  let [height, setHeight] = useState("");
  let [fitness, setFitness] = useState("");
  return (
    <SafeAreaView style={styles._container}>
      <BackHeader BackHandler={() => props.navigation.goBack()} />
      <Text style={styles._heading}>Profile</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._title_main}>Update any or all of the following</Text>
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
          placeholder=""
          value={height}
          onChangeText={(height) => setHeight(height)}
          secureTextEntry={false}
        />
        <Text style={styles._title}>Water( or any other task):</Text>
        <Input
          placeholder=""
          value={fitness}
          onChangeText={(fitness) => setFitness(fitness)}
          secureTextEntry={false}
        />
        <Button
          ButtonText="Update and view progress"
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
    fontSize: 25,
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
  _title_main:{
    color: "#000",
    fontSize: 15,
    fontFamily: "Comfortaa-Regular",
    marginTop: 10,
  }
});
export default Update;
