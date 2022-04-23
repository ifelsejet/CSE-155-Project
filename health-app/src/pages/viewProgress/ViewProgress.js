import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from 'react-native-line-chart'
import {Dimensions} from "react-native"



import styles from './styles';


export default function ViewProgress(props) {
    console.log("Inside View");
    console.log(props);
       

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
      <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles._heading}>View Progress</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._progess_heading_main}>
          <Text style={styles._progess_heading}>Weight Progress</Text>
        </View>
        <View style={styles._chart}>

       
        <LineChart
    data={{
      labels: [""],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
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