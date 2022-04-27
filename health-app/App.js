import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import UpdateProgress from './src/pages/updateProgress/UpdateProgress'
import RegistrationScreen from './src/pages/RegistrationScreen/RegistrationScreen';
import {decode, encode} from 'base-64';
import {getAuth, onAuthStateChanged,signOut} from "firebase/auth";
import { authentication } from './src/firebase/config';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import ViewProgress from './src/pages/viewProgress/ViewProgress';
import ProfileScreen from './src/pages/ProfileScreen/ProfileScreen';
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";
import {db} from "../health-app/src/firebase/config"
import ManageGoals from './src/pages/ManageGoals/ManageGoals';
import MoreInfo from './src/pages/MoreInfo/MoreInfo';
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
    const unsub = onAuthStateChanged(authentication, user => {
     // const docRef = collection(doc(db, "users"));
     // const docSnap = getDoc(docRef);
      /*
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }  

    setUser(docSnap.data());  
    */
    
    const userCol = collection(db,'users');
    const snap =  getDoc(doc(userCol,user.uid));
    // console.log(snap.data());
     //setUser(snap.data());
     setUser(user);
     
    });
    return unsub;
  }, [])
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (<>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {props => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Profile" options={{ headerShown: false }}>
            {props => <ProfileScreen {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="View" options={{ headerShown: false }}>
            {props => <ViewProgress {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Update" options={{ headerShown: false }}>
            {props => <UpdateProgress {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Manage" options={{ headerShown: false }}>
            {props => <ManageGoals {...props} user={user} />}
          </Stack.Screen>
          </>
          
        ) 
        
        : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="More" component={MoreInfo} options={{ headerShown: false }}/> 

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
};