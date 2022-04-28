import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {db, authentication, handleSignOut} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";


export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    let [name, setName] = useState("");
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");
    let [height, setHeight] = useState("");

    const onFooterLinkPress = () => {
        navigation.goBack();
        //navigation.navigate('Login')
    }
    //call handleSignOut on button press to sign out
    

    const onRegisterPress = () => {
        var data;
        const auth = getAuth();
        var currDate = new Date(Date.now())
        currDate = currDate.toString();
        createUserWithEmailAndPassword(auth,email, password)
        .then((response) => {
            const uid = response.user.uid
            data = {
                Goals: {
                  weight: {}
                },
                data: {
                  name: name,
                  email: email,
                  weight: {},
                  height: height,  //change
                }
              };
              console.log("YAAAAAAAAAAAASH");
              data["weight"][currDate] = weight;
            const categoryCol = collection(db,'users');
            console.log("ayo????");
            setDoc(doc(categoryCol, uid), {data}).then(() => console.log("insideSetDoc"));
            console.log("literal pain");





        }
       
            //const usersRef = firebase.firestore().collection('users')

          //usersRef.doc(uid).set(data).catch((error) => { alert("error")});



        )
        }
        const onButtonPress = () => {
            onRegisterPress();
            console.log("Should have created new user!");
          //  navigation.navigate('More');
        }

        const checkPassWords = () => {
            if(email.length < 1){
                console.log("Please enter a valid email!"); 
                Alert.alert(
                    "Confirm Email Address",
                    "Please enter a valid email!",
                    [
                     
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                      
                    ],
                    {
                        cancelable: true,
                    }
                    
                  );
            }
            console.log(password);
            console.log(confirmPassword);
            if(password === confirmPassword && password.length > 1){ //passwords match, not empty
                console.log("Passwords match!, Good to go!");
                onRegisterPress();
                //make user -> navigate to MoreInfo

            }
            
            else{ //Valid email, bad passwords
                
                Alert.alert(
                    "Confirm Passwords",
                    "Password and confirm password should be same!",
                    [
                     
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                      
                    ],
                    {
                        cancelable: true,
                    }
                    
                  );
            }
        }
    
    
        

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
               <Text style={styles._heading}> Register</Text>
              
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Weight'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setWeight(text)}
                    value={weight}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Age'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAge(text)}
                    value={age}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Height'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setHeight(text)}
                    value={height}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles._btn}
                    onPress={() => checkPassWords()}>
                    <Text style={styles._btn_text}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in!</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}