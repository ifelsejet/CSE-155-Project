import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
let Input = (props) => {
  return (
    <View style={styles._input_main}>
      <TextInput
        style={styles._textinput}
        placeholder={props.placeholder}
        placeholderTextColor="#000"
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
let styles = StyleSheet.create({
  _input_main: {
    borderWidth: 1.5,
    borderColor: "#000",
    marginTop: 20,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  _textinput: {
    color: "#000",
    fontFamily: "Comfortaa-Regular",
    fontSize: 16,
    flex: 1,
  },
});
export default Input;
