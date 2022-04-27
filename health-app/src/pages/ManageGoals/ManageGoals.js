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
            [

                { text: 'OK', onPress: () => props.navigation.navigate('Home') },
            ]
        );

    let [name, setName] = useState("");
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");
    const [modalVisible, setModalVisible] = useState(false);


    console.log("Built differently!");
    console.log(props.user.uid);


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
                <Text style={styles._title}>Push Ups:</Text>
                <View style={styles._input_main}>
                    <TextInput
                        style={styles._textinput}
                        placeholder=""
                        placeholderTextColor="#000"
                        value={name}
                        onChangeText={name => setName(name)}
                        secureTextEntry={false}
                    />
                </View>
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
                                    placeholder=""
                                />
                            </View>
                            <View style={{ borderColor: 'black', borderWidth: 1, height: 30, width: 55, marginLeft: 175, marginTop: -30 }}>
                                <TextInput
                                    placeholder=""
                                />
                            </View>
                            <TouchableOpacity style={styles._btn} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles._btn_text}> Save New Goal! </Text>
                            </TouchableOpacity>
                            <TouchableOpacity type="submit" style={styles._btn1} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles._btn_text}> Cancel </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={styles._btn} onPress={() => showAlert()}>
                    <Text style={styles._btn_text}> Update Goals </Text>
                </TouchableOpacity>
                <View style={{ paddingBottom: 20 }} />


            </ScrollView>




        </View>
    );

}