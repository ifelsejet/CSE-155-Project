import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register, PersonalInformation,Progess,Update } from "./../../screens";
import {authentication} from "../../../src/firebase/config";
import {getAuth, onAuthStateChanged,signOut} from "firebase/auth";
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import UpdateProgress from "../../screens/updateProgress";
import ManageGoals from "../../screens/manageGoals";
//import {getAuth, onAuthStateChanged,signOut} from "firebase/auth";


const Stack = createNativeStackNavigator();



let NavigationMain = () => {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}>
            
          </Stack.Screen>
        
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Progress"
          component={Progess}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Update"
          component={Update}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="UpdateProgress"
          component={UpdateProgress}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ManageGoals"
          component={ManageGoals}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationMain;
