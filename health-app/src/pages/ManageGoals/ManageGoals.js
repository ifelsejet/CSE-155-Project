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



export default function ManageGoals(props) {
    const showAlert = () => {
        var db_update = {}
        var currDate = new Date(Date.now())
        currDate = currDate.toString();
        inputList.forEach((val) => {
            if(val.amount == "")
                return;
            var titleName = val.title;
            if(val.title == "Weight")
                titleName = "weight"
            db_update["Goals."+titleName.replace("\n", " ")+'.'+currDate] = parseInt(val.amount)
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

                var temp = ele
                temp = temp[0].toUpperCase() + temp.substring(1);

                goalList[index] = {title: temp, amount: docData["Goals"][ele][key].toString()}
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

    // console.log(inputList);


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles._back} onPress={() => props.navigation.goBack()}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles._heading}>Manage Goals</Text>
            <Text style={{
                marginLeft: 10, fontFamily: 'Comfortaa-Regular',
                fontSize: 13,
            }}>Below you can view your current daily goals. {"\n"}Update the daily goals as you wish.</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                {inputList.map((element, index) => {
                    return (
                        <View key = {index}>
                            <TextInput name="title" value={element.title} placeholder="" onChangeText={e => handleChange("title",e, index)}
                                style={styles._input_main1} placeholderTextColor="#000"
                                secureTextEntry={false} />
                            <TextInput
                                name="amount"
                                value={element.amount}
                                style={styles._input_main}
                                placeholder=""
                                onChangeText={e => handleChange("amount",e, index)}
                                placeholderTextColor="#000"
                                secureTextEntry={false}
                            />
                            <View style={styles._leftButton1}>

                                {inputList.length !== 0 && <TouchableOpacity style={styles._btn1}
                                    onPress={() => removeGoalFields(index)}>
                                    <Text style={styles._btn_text}> Remove </Text>
                                </TouchableOpacity>}
                            </View>
                        </View>
                    )
                })}

            </ScrollView>
            <View style={styles._leftButton}>
                <TouchableOpacity style={styles._btn} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles._btn_text}> New Goal </Text>
                </TouchableOpacity>
            </View>

            <View style={styles._centered_view}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Goal Title:</Text>
                        <Text style={styles.modalText1}>Goal Amount:</Text>

                        <View style={{ borderColor: 'black', borderWidth: 1, height: 30, width: 150 }}>
                            <TextInput
                                name="title"
                                placeholder=""
                                onChangeText={(userTitle) => setUserTitle(userTitle)}
                            />
                        </View>
                        <View style={{ borderColor: 'black', borderWidth: 1, height: 30, width: 55, marginLeft: 175, marginTop: -30 }}>
                            <TextInput
                                name="amount"
                                placeholder=""
                                onChangeText={userAmount => setUserAmount(userAmount)}
                            />
                        </View>
                        <TouchableOpacity style={styles._btn} onPress={onClick}>
                            <Text style={styles._btn_text} type="submit" > Save New Goal! </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._btn1} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles._btn_text}> Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
            <TouchableOpacity style={styles._btn} onPress={() => showAlert()}>
                <Text style={styles._btn_text}> Update Goals </Text>
            </TouchableOpacity>
            <View style={{ paddingBottom: 20 }} />
        </View>
    );

}