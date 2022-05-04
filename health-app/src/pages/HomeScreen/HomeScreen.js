import React, { useEffect, useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { db, authentication, handleSignOut } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, getDoc, updateDoc, onSnapshot, deleteDoc, doc, setDoc, waitForPendingWrites } from "firebase/firestore";
import { createStackNavigator } from '@react-navigation/stack'
import UpdateProgress from '../updateProgress/UpdateProgress';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from "react-native"


import styles from './styles';


const onViewProgressPress = () => {
    console.log("Pressed!");
    navigation.navigate('Update');
}

const Stack = createStackNavigator();
//const navigation = useNavigation();



export default function HomeScreen(props) {
    //const navigation = useNavigation();

    const showButton = () => {
        var date = new Date(Date.now());
        var curr_time = date.getHours();
        console.log(curr_time);
        if (curr_time === 3) {
            return (
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_text} onPress={() => props.navigation.navigate('Pending')} >Remember to Complete Your Pending Tasks! </Text></TouchableOpacity>
            )
        }
    }

    var [data_for_charts, setData_for_charts] = useState({
        labels: [],
        datasets: [{
          data: [],
          strokeWidth: 4,
          color: (opacity = 1) => `rgba(0, 255, 255, 1)` // optional
        },
        {
          data: [],
          strokeWidth: 4,
          color: (opacity = 1) => `rgba(183,200,10, 0.75)` // optional
        }],
        legend: ["Progress", "Goal"]
      });
    var [userName, setUserName] = useState("User");
    useEffect(() => {
        const docRef = doc(db, 'users', String(props.user.uid));
        getDoc(docRef)
            .then((doc) => {
                var docData = doc.data()
                setUserName(docData["data"]["name"])
                var prog_type = "weight"
                if (!(prog_type in docData["data"])) {
                    temp_data_for_charts.push({
                      labels: [0],
                      datasets: [{
                        data: [0],
                        strokeWidth: 4,
                        color: (opacity = 1) => `rgba(0, 255, 255, 1)` // optional
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
                    if (day in docData["data"][prog_type]) {
                      achievedValues.push(docData["data"][prog_type][day])
                    }
                    else {
                      achievedValues.push(achievedValues.slice(-1))
                    }
            
                    if (day in docData["Goals"][prog_type]) {
                      goalValues.push(docData["Goals"][prog_type][day])
                    }
                    else {
                      goalValues.push(goalValues.slice(-1))
                    }
                  })
                  mergedDates.forEach(function (part, index) {
                    this[index] = new Date(this[index]);
                  }, mergedDates); // use arr as this
                  achievedValues.shift()
                  goalValues.shift()
            
                  const indices = Array.from(mergedDates.keys())
                  indices.sort((a, b) => mergedDates[a] - mergedDates[b])
            
                  mergedDates = indices.map(i => mergedDates[i])
            
                  mergedDates.forEach(function (part, index) {
                    var dateObj = this[index];
                    var month = dateObj.getUTCMonth() + 1; //months from 1-12
                    var day = dateObj.getUTCDate();
                    var year = dateObj.getUTCFullYear();
            
                    var newdate = month + "/" + day //+ "/" + year;
                    this[index] = newdate;
                  }, mergedDates); // use arr as this
            
                  achievedValues = indices.map(i => achievedValues[i])
                  goalValues = indices.map(i => goalValues[i])
            
            
                  setData_for_charts({
                    labels: mergedDates,
                    datasets: [{
                      data: achievedValues,
                      strokeWidth: 4,
                      color: (opacity = 1) => `rgba(0, 255, 255, 1)` // optional
                    },
                    {
                      data: goalValues,
                      strokeWidth: 4,
                      color: (opacity = 1) => `rgba(183,200,10, 0.75)` // optional
                    }],
                    legend: ["Progress", "Goal"]
                  });
            })
    }, []);
    console.log(props.user.uid);


    return (
        <View style={styles.container}>

            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                <View
                    style={{ flex: 1, width: '100%', flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Welcome, {userName}!</Text>

                    <TouchableOpacity
                        style={styles.profile}
                        onPress={() => props.navigation.navigate('Profile')}>

                        <Image
                            style={styles.profile}
                            source={require('../../../assets/profile.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    fontFamily: 'Comfortaa-Regular',
                    fontSize: 15
                }}>
                    {showButton()}
                </View>

                <View style={styles._progess_heading_main}>
                <Text style={styles.buttonTitle}>Weight Progress</Text>
                </View>

                <View style={{ marginTop: 20, alignItems: "center"}} >
                <LineChart
                    onDataPointClick={() => props.navigation.navigate('View')}
                    data={data_for_charts}
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
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Update')}>
                    <Text style={styles.buttonTitle}>Update Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('View')}>
                    <Text style={styles.buttonTitle}>View Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Manage')}
                >
                    <Text style={styles.buttonTitle}>Manage Goals</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Pending')}
                >
                    <Text style={styles.buttonTitle}>View Pending Tasks</Text>

                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}