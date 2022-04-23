import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
        <TouchableOpacity style={styles._back} onPress={() => props.navigation.navigate.goBack()}>
      <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
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
  <Text> View Progress</Text>
  <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate.goBack()}>
                    <Text style={styles.buttonTitle}>Wow</Text>
                </TouchableOpacity>
       
    </View>
  );
    
}