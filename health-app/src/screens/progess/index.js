import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Button, BackHeader, Chart } from "./../../components";
let Progess = (props) => {
  return (
    <SafeAreaView style={styles._container}>
      <BackHeader BackHandler={() => props.navigation.goBack()} />
      <Text style={styles._heading}>View Progress</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._progess_heading_main}>
          <Text style={styles._progess_heading}>Weight Progress</Text>
        </View>
        <View style={styles._chart}>
          <Chart />
        </View>
        <Button
          ButtonText="Update/add progress"
          onPress={() => props.navigation.navigate("Update")}
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
    fontSize: 36,
    fontFamily: "Comfortaa-Regular",
    marginTop: 10,
    marginBottom: 20,
  },
  _progess_heading_main: {
    backgroundColor: "#C4C4C4",
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  _progess_heading: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Comfortaa-Regular",
    fontWeight: "bold",
  },
  _chart: {
    marginTop: 20,
  },
});
export default Progess;
