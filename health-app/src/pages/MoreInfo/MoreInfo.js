import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {db, authentication, handleSignOut} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";

import styles from './styles';

export default function MoreInfo({navigation}) {
    let [name, setName] = useState("");
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");
    let [height, setHeight] = useState("");
    let [fitness, setFitness] = useState("");
    console.log("off the grid");
    const onFooterLinkPress = () => {
        navigation.goBack();
        //navigation.navigate('Login')
    }

    const onButtonPress = () => {
        console.log("Pressed the button");
        navigation.navigate('MoreInfo');
    }
    //call handleSignOut on button press to sign out

    const onRegisterPress = () => {
        var data;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email, password)
        .then((response) => {
            const uid = response.user.uid
             data = {
               name: fullName,
               email: email,
               weight: 30, //change


            };
            const categoryCol = collection(db,'users');
            setDoc(doc(categoryCol, uid), {data}).then((err) => console.log(err));





        }
       
            //const usersRef = firebase.firestore().collection('users')

          //usersRef.doc(uid).set(data).catch((error) => { alert("error")});



        )
        }
    
        

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
               <Text style={styles._heading}>Add Personal Information</Text>
               <Text style={styles._title}>Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles._title}>Weight:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setWeight(text)}
                    value={weight}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles._title}>Age:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAge(text)}
                    value={age}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles._title}>Height:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setHeight(text)}
                    value={height}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles._title}>Fitness Goal:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFitness(text)}
                    value={fitness}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles._btn}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles._btn_text}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in!</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}