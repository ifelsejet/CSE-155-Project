import React, {useEffect, useState} from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, BackHeader, Chart } from "./../../components";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,
        waitForPendingWrites, where, query
    } from "firebase/firestore";
import {db} from "../../firebase/config";

let Progess = (props) => {

  var docData = {};
  var data;
  var [achievedData, setAchievedData] = useState([0]);
  var [chartDates, setCharttDates] = useState([0]);
  var [goalData, setGoalData] = useState([0]);
  const [selectedProgressType, setSelectedProgressType] = useState("weight");
  const [progressTypes, setProgressTypes] = useState([
      { label: 'Weight Progress', value: 'weight' },
  ]);
  

  function getChartData(){
    if(Object.keys(docData).length == 0 || selectedProgressType == null)
      return
    var dataKeys = Object.keys(docData["data"][selectedProgressType])
    var goalKeys = Object.keys(docData["Goals"][selectedProgressType])
    var mergedDates = [...new Set([...dataKeys, ...goalKeys])];
    mergedDates.sort();
    
    var achievedValues = [0];
    var goalValues = [0];
    mergedDates.forEach((day, index) => {
      if(day in docData["data"][selectedProgressType]){
        achievedValues.push(docData["data"][selectedProgressType][day])
      }
      else{
        achievedValues.push(achievedValues.slice(-1))
      }

      if(day in docData["Goals"][selectedProgressType]){
        goalValues.push(docData["Goals"][selectedProgressType][day])
      }
      else{
        goalValues.push(goalValues.slice(-1))
      }
    })
    mergedDates.forEach(function(part, index) {
      this[index] = new Date(this[index]);
      this[index] = this[index].getDate();
    }, mergedDates); // use arr as this
    achievedValues.shift()
    goalValues.shift()
    setAchievedData(achievedValues)
    setGoalData(goalValues)
    setCharttDates(mergedDates)
  }

  useEffect(() => {
    const docRef = doc(db,'users', "1VKT54jAuaTOzxbqOWIebmwryAD3");
    getDoc(docRef)
      .then((doc) => {
        docData = doc.data()
        var goalList = Object.keys(docData["Goals"])
        var goalList = [...new Set([...goalList, "weight"])];
        var goalListFormatted = []
        goalList.forEach((g) => {
          goalListFormatted.push({ label: g+' Progress', value: g })
        })
        setProgressTypes(goalListFormatted)
        
        getChartData("weight")
      })
  }, []);



  data={
    labels: chartDates,
    datasets: [{
      data: achievedData,
      strokeWidth: 4,
      color: (opacity = 1) => `rgba(134, 0, 0, 1)` // optional
    },
    {
      data: goalData,
      strokeWidth: 4,
      color: (opacity = 1) => `rgba(0, 0, 100, 1)` // optional
    }]
  }
  
  return (
    <SafeAreaView style={styles._container}>
      <BackHeader BackHandler={() => props.navigation.goBack()} />
      <Text style={styles._heading}>View Progress</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._progess_heading_main}>
          <RNPickerSelect value={selectedProgressType}
              onValueChange={(value) => {setSelectedProgressType(value); getChartData();}}
              items={progressTypes}
              style={pickerSelectStyles}
          />
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 20,
      fontFamily: "Comfortaa-Regular",
      fontWeight: "bold",
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 0,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  },
});
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
    flex:1,
    alignItems: "center",
    justifyContent  : "center",
  },
  _progess_heading: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Comfortaa-Regular",
    fontWeight: "bold",
  },
  __progress_type: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Comfortaa-Regular",
    fontWeight: "bold",
    alignItems: 'center'
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