import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from 'react-native-line-chart'
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,
    waitForPendingWrites, where, query
} from "firebase/firestore";
import {db} from "../../firebase/config";
import {Dimensions} from "react-native"
import RNPickerSelect from 'react-native-picker-select';


import styles from './styles';


 
export default function ViewProgress(props) {

    console.log("Inside Progress");
    console.log(props.user.uid);



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
     

      const docRef = doc(db,'users', String(props.user.uid));
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
        <View style={styles.container}>
        <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
      <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles._heading}>View Progress</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._progess_heading_main}>
        <RNPickerSelect value={selectedProgressType}
              onValueChange={(value) => {setSelectedProgressType(value); getChartData();}}
              items={progressTypes}
              style={styles.pickerSelectStyles}
        />    
        </View>
        <View style={styles._chart}>

       
        <LineChart
    data={
      data
    }
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#C4C4C4',
      backgroundGradientFrom: '#000',
      backgroundGradientTo: '#fff',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
   </View>
   <TouchableOpacity style={styles._btn} onPress={() => props.navigation.navigate('Update')}>
      <Text style={styles._btn_text}> Update/Add Progress </Text>
    </TouchableOpacity>

    
   <View style={{ paddingBottom: 20 }} />
   </ScrollView>
   </View>



       
  );
    
}