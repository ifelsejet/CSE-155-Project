import React, { useState } from 'react'
import { ScrollView, Modal, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth, authentication } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import styles from './styles';



export default function ManageGoals(props) {
    const showAlert = () =>
        Alert.alert(
            'Manage Goals',
            'Goals were successfuly updated!',
            // [

            //     { text: 'OK', onPress: () => props.navigation.navigate('Home') },
            // ]
        );

    const [modalVisible, setModalVisible] = useState(false);

    const [userTitle, setUserTitle] = useState("");
    const [userAmount, setUserAmount] = useState("")

    const [inputList, setInputList] = useState([]);

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
        console.log(e)
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
                        <>
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
                        </>
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
                                value={userTitle}
                                onChangeText={(userTitle) => setUserTitle(userTitle)}
                            />
                        </View>
                        <View style={{ borderColor: 'black', borderWidth: 1, height: 30, width: 55, marginLeft: 175, marginTop: -30 }}>
                            <TextInput
                                name="amount"
                                placeholder=""
                                value={userAmount}
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