import React, { useState, useEffect } from 'react'
import { ScrollView, Modal, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth, authentication } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import styles from './styles';
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,
    waitForPendingWrites, where, query
} from "firebase/firestore";
import {db} from "../../firebase/config";



export default function PendingTasks(props) {
    const showAlert = () => {
        var db_update = {}
        var currDate = new Date(Date.now())
        currDate = currDate.toString();
        inputList.forEach((val) => {
            if(val.amount == "")
                return;

            db_update["Goals."+val.title.replace("\n", " ")+'.'+currDate] = parseInt(val.amount)
        })
        const docRef = doc(db,'users', String(props.user.uid));
        updateDoc(docRef, db_update);

        Alert.alert(
            'Manage Goals',
            'Goals were successfuly updated!',
            [

                { text: 'OK', onPress: () => props.navigation.navigate('Home') },
            ]
        );
    }

    const [modalVisible, setModalVisible] = useState(false);

    const [userTitle, setUserTitle] = useState("");
    const [userAmount, setUserAmount] = useState("")

    const [inputList, setInputList] = useState([]);

    useEffect(() => {
        const docRef = doc(db,'users', String(props.user.uid));
        getDoc(docRef)
          .then((doc) => {
            var docData = doc.data()
            var goalList = Object.keys(docData["Goals"])
            goalList.forEach((ele, index)=>{
                var dates = Object.keys(docData["Goals"][ele])
                dates.forEach(function(part, index) {
                    this[index] = new Date(this[index]);
                  }, dates);
                const indices = Array.from(dates.keys())
                indices.sort( (a,b) => dates[a] -  dates[b])
                var key = Object.keys(docData["Goals"][ele])[indices.slice(-1)]

                goalList[index] = {title: ele, amount: docData["Goals"][ele][key].toString()}
            })
            setInputList(goalList)
        })
    }, []);

    const addGoalFields = () => {
        let newFields = { title: userTitle, amount: userAmount }
        setInputList([...inputList, newFields])
    }

    const removeGoalFields = (i) => {
        const list = [...inputList];
        list.splice(i, 1);
        setInputList(list);
    }

    const handleChange = (name, e, i) => {
        // const { name, value } = e;
        const list = [...inputList];
        list[i][name] = e;
        setInputList(list);
        // console.log(e)
    }

    const onClick = () => {
        setModalVisible(!modalVisible);
        addGoalFields();
    }

    var [userName, setUserName] = useState("User");
    useEffect(() => {
        const docRef = doc(db,'users', String(props.user.uid));
        getDoc(docRef)
          .then((doc) => {
            var docData = doc.data()
            setUserName(docData["data"]["name"])
        })
    }, []);

    // console.log(inputList);


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles._heading}>View Pending Tasks</Text>
            <Text style={{
                marginLeft: 10, fontFamily: 'Comfortaa-Regular',
                fontSize: 13,
            }}> Hi {userName}, here are your pending tasks for Today!</Text>

            
            <View style={{ paddingBottom: 20 }} />
        </View>
    );

}