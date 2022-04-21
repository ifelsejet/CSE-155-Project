import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
let Button = (props) => {
  return (
    <TouchableOpacity style={styles._btn} onPress={props.onPress}>
      <Text style={styles._btn_text}>{props.ButtonText}</Text>
    </TouchableOpacity>
  );
};
let styles = StyleSheet.create({
  _btn: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  _btn_text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Comfortaa-Regular",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default Button;
