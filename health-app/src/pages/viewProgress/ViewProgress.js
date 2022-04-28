import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from 'react-native-chart-kit'
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,
    waitForPendingWrites, where, query
} from "firebase/firestore";
import {db} from "../../firebase/config";
import {Dimensions} from "react-native"
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';

 
export default function ViewProgress(props) {
    // console.log("Inside Progress");
    // console.log(props.user.uid);

    var docData = {};
    data = {}
    var [data_for_charts, setData_for_charts] = useState([]);
    var [achievedData, setAchievedData] = useState([0]);
    var [chartDates, setCharttDates] = useState([0]);
    var [goalData, setGoalData] = useState([0]);
    var [goalsList, setGoalsList] = useState([]);
    const [modalVisibleList, setModalVisibleList] = useState([]);

    const [selectedProgressType, setSelectedProgressType] = useState("weight");
    const [progressTypes, setProgressTypes] = useState([
        { label: 'Weight Progress', value: 'weight' },
    ]);

    function getChartData(goalList){
      setData_for_charts([])
      var temp_data_for_charts = []
      goalList.forEach( (prog_type) => {
        if(!(prog_type in docData["data"])){
          temp_data_for_charts.push({
            labels: [0],
            datasets: [{
              data: [0],
              strokeWidth: 4,
              color: (opacity = 1) => `rgba(255, 0, 0, 1)` // optional
            },
            {
              data: [0],
              strokeWidth: 4,
              color: (opacity = 1) => `rgba(183,200,10, 0.75)` // optional
            }]
          });
          return
        }

        var dataKeys = Object.keys(docData["data"][prog_type])
        var goalKeys = Object.keys(docData["Goals"][prog_type])
        var mergedDates = [...new Set([...dataKeys, ...goalKeys])];
    
        var achievedValues = [0];
        var goalValues = [0];
        mergedDates.forEach((day, index) => {
          if(day in docData["data"][prog_type]){
            achievedValues.push(docData["data"][prog_type][day])
          }
          else{
            achievedValues.push(achievedValues.slice(-1))
          }
    
          if(day in docData["Goals"][prog_type]){
            goalValues.push(docData["Goals"][prog_type][day])
          }
          else{
            goalValues.push(goalValues.slice(-1))
          }
        })
        mergedDates.forEach(function(part, index) {
          this[index] = new Date(this[index]);
        }, mergedDates); // use arr as this
        achievedValues.shift()
        goalValues.shift()

        const indices = Array.from(mergedDates.keys())
        indices.sort( (a,b) => mergedDates[a] -  mergedDates[b])

        mergedDates = indices.map(i => mergedDates[i])

        mergedDates.forEach(function(part, index) {
          var dateObj = this[index];
          var month = dateObj.getUTCMonth() + 1; //months from 1-12
          var day = dateObj.getUTCDate();
          var year = dateObj.getUTCFullYear();

          var newdate =  month + "/" + day //+ "/" + year;
          this[index] = newdate;
        }, mergedDates); // use arr as this

        achievedValues = indices.map(i => achievedValues[i])
        goalValues = indices.map(i => goalValues[i])


        setAchievedData(achievedValues)
        setGoalData(goalValues)
        setCharttDates(mergedDates)

        temp_data_for_charts.push({
          labels: mergedDates,
          datasets: [{
            data: achievedValues,
            strokeWidth: 4,
            color: (opacity = 1) => `rgba(255, 0, 0, 1)` // optional
          },
          {
            data: goalValues,
            strokeWidth: 4,
            color: (opacity = 1) => `rgba(183,200,10, 0.75)` // optional
          }]
        });
      });
      setData_for_charts(temp_data_for_charts)
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
          getChartData(goalList)
          setGoalsList(goalList)

          var temp_modal_visibleList = new Array(goalList.length).fill('none')
          temp_modal_visibleList[goalList.indexOf("weight")] = 'block'
          setModalVisibleList(temp_modal_visibleList)
      })
  }, []);



  // data = {
  //   labels: chartDates,
  //   datasets: [{
  //     data: achievedData,
  //     strokeWidth: 4,
  //     color: (opacity = 1) => `rgba(134, 0, 0, 1)` // optional
  //   },
  //   {
  //     data: goalData,
  //     strokeWidth: 4,
  //     color: (opacity = 1) => `rgba(0, 0, 100, 1)` // optional
  //   }]
  // }
    
       
  return (
      <View style={styles.container}>
      <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
      <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles._heading}>View Progress</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles._progess_heading_main}>
      <RNPickerSelect value={selectedProgressType}
            onValueChange={(value) => {
              setSelectedProgressType(value);
              var temp_modal_visibleList = new Array(goalsList.length).fill('none')
              temp_modal_visibleList[goalsList.indexOf(value)] = 'block'
              setModalVisibleList(temp_modal_visibleList)
            }}
            items={progressTypes}
            style={styles.pickerSelectStyles}
      />    
      </View>
      {data_for_charts.map((task, index) => {
        return(
          <View key = {index} style={{marginTop: 20, alignItems: "center", display: modalVisibleList[index]}} >
        <LineChart
          key = {index}
          data={task}
          width={Dimensions.get('window').width - 10} // from react-native
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#202020',
            backgroundGradientTo: '#202020',
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
        </View>);
      })}
      
      <TouchableOpacity style={styles._btn} onPress={() => props.navigation.navigate('Update')}>
        <Text style={styles._btn_text}> Update/Add Progress </Text>
      </TouchableOpacity>
        
      <View style={{ paddingBottom: 20 }} />
      </ScrollView>
      </View>
  );
   
}