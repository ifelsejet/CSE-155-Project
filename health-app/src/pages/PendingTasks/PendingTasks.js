import React, { useState, useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, FlatList, Modal, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth, authentication } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import styles from './styles';
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,
    waitForPendingWrites, where, query
} from "firebase/firestore";
import {db} from "../../firebase/config";
import Tasks from "./Tasks";



export default function PendingTasks(props) {
    // const [modalVisible, setModalVisible] = useState(false);

    // const [userTitle, setUserTitle] = useState("");
    // const [userAmount, setUserAmount] = useState("")

    const [inputList, setInputList] = useState([]);
    var [userName, setUserName] = useState("User");

    useEffect(() => {
        const docRef = doc(db,'users', String(props.user.uid));
        getDoc(docRef)
          .then((doc) => {
            var docData = doc.data()
            setUserName(docData["data"]["name"])

            var currDate = new Date(Date.now()).toISOString().split('T')[0];
            // currDate = '"' + currDate + '"'

            var goalList = Object.keys(docData["Goals"])
            var tempList = []
            goalList.forEach((ele, index)=>{
                var dates = Object.keys(docData["Goals"][ele])
                var datesFormatted = Object.keys(docData["data"][ele])

                datesFormatted.forEach(function(part, index) {
                    datesFormatted[index] = new Date(this[index]).toISOString().split('T')[0];

                }, datesFormatted);

                if(datesFormatted.includes(currDate)){
                    return;
                }

                dates.forEach(function(part, index) {
                    this[index] = new Date(this[index]);

                }, dates);
                const indices = Array.from(dates.keys())
                indices.sort( (a,b) => dates[a] -  dates[b])
                var key = Object.keys(docData["Goals"][ele])[indices.slice(-1)]

                tempList.push({title: ele, amount: docData["Goals"][ele][key].toString()})
            })
            // console.log(goalList)
            setInputList(tempList)
        })
    }, []);


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles._heading}>View Pending Tasks</Text>
            <Text style={{
                marginLeft: 10, fontFamily: 'Comfortaa-Regular',
                fontSize: 13,
            }}> Hi {userName}, here are your pending tasks for Today!
            </Text>

            <View style={styles.items}>
            {
            inputList.map((item, index) => {
            return(
                <TouchableOpacity key={index}>
                    <Tasks text={item}/>
                </TouchableOpacity>
            )})
            }
    </View>
    </View>
    );

}