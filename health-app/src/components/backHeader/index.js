import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
let BackHeader = (props) => {
  return (
    <TouchableOpacity style={styles._back} onPress={props.BackHandler}>
      <AntDesign name="back" size={24} color="black" />
    </TouchableOpacity>
  );
};
let styles = StyleSheet.create({
  _back: {
    // width: 50,
    // height: 50,
    // borderRadius: 50 / 2,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
  },
});
export default BackHeader;
