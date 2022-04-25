import React, { useState } from 'react'
import { ScrollView, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";



import styles from './styles';


export default function UpdateProgress(props) {
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");
    let [height, setHeight] = useState("");
    let [fitness, setFitness] = useState("");
    console.log("Built differently");
    console.log(props.user.uid);
       

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
      <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles._heading}>Update Progress</Text>
        <Text style={styles._subheading}>Update any or all of the following progress for today.</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._title}>Push Ups:</Text>
    
        </ScrollView>


       
       
    </View>
  );
    
}