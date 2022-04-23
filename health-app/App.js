import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import RegistrationScreen from './src/pages/RegistrationScreen/RegistrationScreen';
import {decode, encode} from 'base-64';
import {getAuth, onAuthStateChanged,signOut} from "firebase/auth";
import { authentication } from './src/firebase/config';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

/*
let [fontsLoaded] = useFonts({
  "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf"),
});
*/


const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf"),
  });


  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, user => setUser(user));
    return unsub;
  }, [])
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {props => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}
 />
            <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }}/> 
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
};