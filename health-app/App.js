import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import NavigationMain from "./src/config/navigation";
let App = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor={"#fff"}
          translucent={false}
          barStyle="dark-content"
        />
        <NavigationMain />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
