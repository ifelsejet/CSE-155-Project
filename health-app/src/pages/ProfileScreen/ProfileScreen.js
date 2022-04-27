import React, { useState } from 'react'
import { Image, Alert, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication, handleSignOut} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";



import styles from './styles';


export default function ProfileScreen(props) {
  function signOut () {
    console.log("Ok, should be logging out..");
   // handleSignOut();
   // props.navigation.navigate('Login');
   //TODO: Handle Sign out and go back to login Screen @ Yash

  }
  const showAlert = () =>  
  Alert.alert(
    "Sign Out?",
    "Are you sure you want to sign out of your account?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => signOut() }
    ],
    {
      cancelable: true,
    }
  );
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");
    let [height, setHeight] = useState("");
    let [fitness, setFitness] = useState("");
    console.log("Built differently");
   
      

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
      <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles._heading}>Profile</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._title_main}>Update any or all of the following</Text>
        <Text style={styles._title}>Weight:</Text>
        <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(weight) => setWeight(weight)}
                    value={weight}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
        />
         <Text style={styles._title}>Age:</Text>
        <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(age) => setAge(age)}
                    value={age}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
         <Text style={styles._title}>Height:</Text>
        <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(height) => setHeight(height)}
                    value={height}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

        <Text style={styles._title}>Water (or any other task):</Text>
        <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(fitness) => setFitness(fitness)}
                    value={fitness}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
         <TouchableOpacity style={styles._btn} onPress={() => props.navigation.navigate('Home')}>
      <Text style={styles._btn_text}> Update User Profile </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles._signOutbtn} onPress={() => showAlert()}>
      <Text style={styles._btn_text}> Sign Out </Text>
    </TouchableOpacity>
        <View style={{ paddingBottom: 20 }} />
        </ScrollView>



       
       
    </View>
  );
    
}