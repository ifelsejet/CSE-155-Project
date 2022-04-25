import React, { useState } from 'react'
import { ScrollView, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";



import styles from './styles';



export default function UpdateProgress(props) {
    const showAlert = () =>  
    Alert.alert(  
        'Update Progress',  
        'Progress was successfuly updated!',  
        [  
            
            {text: 'OK', onPress: () => props.navigation.navigate('Home')},  
        ]  
    );  

    let [name, setName] = useState("");
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");

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
        <Text style={styles._title}>Push Ups!:</Text>
        <View style={styles._input_main}>
            <TextInput
                style={styles._textinput}
                placeholder=""
                placeholderTextColor="#000"
                value={name}
                onChangeText={name => setName(name)}
                secureTextEntry={false}
            />
        </View>
        <Text style={styles._title}>Jumping {"\n"} Jacks:</Text>
        <View style={styles._input_main}>
            <TextInput
                style={styles._textinput}
                placeholder=""
                placeholderTextColor="#000"
                value={weight}
                onChangeText={weight => setWeight(weight)}
                secureTextEntry={false}
            />
        </View>
        <Text style={styles._title}>Squats</Text>
        <View style={styles._input_main}>
            <TextInput
                style={styles._textinput}
                placeholder=""
                placeholderTextColor="#000"
                value={age}
                onChangeText={age => setAge(age)}
                secureTextEntry={false}
            />
            </View>
         <View style={styles._leftButton}>
            <TouchableOpacity style={styles._btn} onPress={() => console.log(props.user.uid)}>
            <Text style={styles._btn_text}> Add a New Goal </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles._btn} onPress={() =>  showAlert()}>
            <Text style={styles._btn_text}> Update Progress </Text>
        </TouchableOpacity>
        <View style={{ paddingBottom: 20 }} />

        
        </ScrollView>


       
       
    </View>
  );
    
}