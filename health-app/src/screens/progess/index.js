import React, {useEffect, useState} from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Button, BackHeader, Chart } from "./../../components";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,
        waitForPendingWrites, where, query
    } from "firebase/firestore";
import {db} from "../../firebase/config";

let Progess = (props) => {
  var docData;
  var data;
  var [weight, setWeight] = useState([0]);
  var [weightDates, setWeightDates] = useState([0]);

  useEffect(() => {
    const docRef = doc(db,'users', "1VKT54jAuaTOzxbqOWIebmwryAD3");
    getDoc(docRef)
      .then((doc) => {
        docData = doc.data()
        var tempValues = Object.values(docData["data"]["weight"])
        var tempKeys = Object.keys(docData["data"]["weight"])
        var indices = Array.from(tempKeys.keys())
                     .sort( (a,b) => tempKeys[a].localeCompare(tempKeys[b]) ),
        tempValues = indices.map(i => tempValues[i]),
        tempKeys = indices.map(i => tempKeys[i])
        tempKeys.forEach(function(part, index) {
          this[index] = new Date(this[index]);
          this[index] = this[index].getDay();
        }, tempKeys); // use arr as this
        setWeight(tempValues)
        setWeightDates(tempKeys)
      })
  }, []);
  data={
    labels: weightDates,
    datasets: [{
      data: weight
    }]
  }
  
  return (
    <SafeAreaView style={styles._container}>
      <BackHeader BackHandler={() => props.navigation.goBack()} />
      <Text style={styles._heading}>View Progress</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._progess_heading_main}>
          <Text style={styles._progess_heading}>Weight Progress</Text>
        </View>
        <View style={styles._chart}>
          <Chart datainput = {data} />
        </View>
        <Button
          ButtonText="Update/add progress"
          onPress={() => props.navigation.navigate("Update")}
        />
        <View style={{ paddingBottom: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  _heading: {
    color: "#000",
    fontSize: 36,
    fontFamily: "Comfortaa-Regular",
    marginTop: 10,
    marginBottom: 20,
  },
  _progess_heading_main: {
    backgroundColor: "#C4C4C4",
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  _progess_heading: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Comfortaa-Regular",
    fontWeight: "bold",
  },
  _chart: {
    marginTop: 20,
  },
});

export default Progess;


// import React, { useState } from 'react'
// import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import styles from './styles';
// import {db, authentication, handleSignOut} from "../../firebase/config";
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth";
// import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";


// export default function RegistrationScreen({navigation}) {
//     const [fullName, setFullName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')

//     const onFooterLinkPress = () => {
//         navigation.navigate('Login')
//     }
//     //call handleSignOut on button press to sign out

//     const onRegisterPress = () => {
//         var data;
//         const auth = getAuth();
//         createUserWithEmailAndPassword(auth,email, password)
//         .then((response) => {
//             const uid = response.user.uid
//              data = {
//                name: fullName,
//                email: email,
//                weight: 30, //change


//             };
//             const categoryCol = collection(db,'users');
//             setDoc(doc(categoryCol, uid), {data}).then((err) => console.log(err));





//         }
       
//             //const usersRef = firebase.firestore().collection('users')

//           //usersRef.doc(uid).set(data).catch((error) => { alert("error")});



//         )
//         }
    
        

//     return (
//         <View style={styles.container}>
//             <KeyboardAwareScrollView
//                 style={{ flex: 1, width: '100%' }}
//                 keyboardShouldPersistTaps="always">
//                 <Image
//                     style={styles.logo}
//                     source={require('../../../assets/icon.png')}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder='Full Name'
//                     placeholderTextColor="#aaaaaa"
//                     onChangeText={(text) => setFullName(text)}
//                     value={fullName}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder='E-mail'
//                     placeholderTextColor="#aaaaaa"
//                     onChangeText={(text) => setEmail(text)}
//                     value={email}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholderTextColor="#aaaaaa"
//                     secureTextEntry
//                     placeholder='Password'
//                     onChangeText={(text) => setPassword(text)}
//                     value={password}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholderTextColor="#aaaaaa"
//                     secureTextEntry
//                     placeholder='Confirm Password'
//                     onChangeText={(text) => setConfirmPassword(text)}
//                     value={confirmPassword}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />
//                 <TouchableOpacity
//                     style={styles.button}
//                     onPress={() => onRegisterPress()}>
//                     <Text style={styles.buttonTitle}>Create account</Text>
//                 </TouchableOpacity>
//                 <View style={styles.footerView}>
//                     <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
//                 </View>
//             </KeyboardAwareScrollView>
//         </View>
//     )
// }