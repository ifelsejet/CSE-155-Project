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


const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, user => setUser(user));
    return unsub;
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} /> 
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}