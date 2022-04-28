import React, { useEffect, useState } from 'react'
import { ScrollView, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth, authentication } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,
    waitForPendingWrites, where, query
} from "firebase/firestore";
import {db} from "../../firebase/config";


import styles from './styles';



export default function UpdateProgress(props) {
    let [taskNames, setTaskNames] = useState([{title: "", amount: ""}]);

    const showAlert = () => { 
        var db_update = {}
        var currDate = new Date(Date.now())
        currDate = currDate.toString();
        taskNames.forEach((val) => {
            if(val.amount == "")
                return;

            db_update["data."+val.title.replace("\n", " ")+'.'+currDate] = val.amount
        })
        const docRef = doc(db,'users', String(props.user.uid));
        updateDoc(docRef, db_update);

        Alert.alert(
            'Update Progress',
            'Progress was successfuly updated!',
            [

                { text: 'OK', onPress: () => props.navigation.navigate('View') },
            ]
        );
    }

    const handleChange = (e, i) => {
        const list = [...taskNames];
        list[i].amount = e;
        setTaskNames(list);
    }

    useEffect(() => {
        const docRef = doc(db,'users', String(props.user.uid));
        getDoc(docRef)
          .then((doc) => {
            var docData = doc.data()
            var goalList = Object.keys(docData["Goals"])
            goalList.forEach((ele, index)=>{
                goalList[index] = {title: ele.replace(" ", "\n"), amount: ""}
            })
            setTaskNames(goalList)
        })
    }, []);


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles._heading}>Update Progress</Text>
            <Text style={{
                marginLeft: 10, fontFamily: 'Comfortaa-Regular',
                fontSize: 13,
            }}>Update any or all of the following progress for today.</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {taskNames.map((task, index) => {
                    return(
                    <View key = {index}>
                        <Text style={styles._title}>{task.title} :</Text>
                        <View style={styles._input_main}>
                            <TextInput
                                style={styles._textinput}
                                placeholder=""
                                placeholderTextColor="#000"
                                secureTextEntry={false}
                                value = {task.amount}
                                onChangeText = {(e) => handleChange(e, index)}
                            />
                        </View>
                    </View>
                    );  
                })}
                

                <TouchableOpacity style={styles._btn} onPress={() => showAlert()}>
                    <Text style={styles._btn_text}> Update and View Progress </Text>
                </TouchableOpacity>
                <View style={{ paddingBottom: 20 }} />


            </ScrollView>




        </View>
    );

}