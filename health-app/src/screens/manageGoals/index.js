import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View, Modal } from "react-native";
import { Input, Button, BackHeader } from "./../../components";
import InputSmall from "./../../components/inputSmall/index"
let ManageGoals = (props) => {
    let [name, setName] = useState("");
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");
    let [height, setHeight] = useState("");
    let [fitness, setFitness] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles._container}>
            <BackHeader BackHandler={() => props.navigation.goBack()} />
            <Text style={styles._heading}>Manage Goals</Text>
            <Text style={styles._subheading}>Below you can view your current daily goals. {"\n"}Update the daily goals as you wish.</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles._title}>PushUps:</Text>
                <InputSmall
                    placeholder=""
                    value={name}
                    onChangeText={(name) => setName(name)}
                    secureTextEntry={false}
                />
                <Text style={styles._title}>Jumping {"\n"} Jacks:</Text>
                <InputSmall
                    placeholder=""
                    value={weight}
                    onChangeText={(weight) => setWeight(weight)}
                    secureTextEntry={false}
                />
                <Text style={styles._title}>Squats:</Text>
                <InputSmall
                    placeholder=""
                    value={age}
                    onChangeText={(age) => setAge(age)}
                    secureTextEntry={false}
                />
                <View style={styles._leftButton}>
                    <Button
                        ButtonText="Add a New Goal"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
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
                            <Text style={styles.modalText}>Title:</Text>
                            <Input
                                placeholder=""
                            />
                            <Button
                                ButtonText="Save"
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                            </Button>
                        </View>
                    </Modal>
                </View>
                <Button
                    ButtonText="Update Goals"
                    onPress={() => props.navigation.navigate("Progess")}
                />
                <View style={{ paddingBottom: 20 }} />
            </ScrollView>
        </SafeAreaView >
    );
};
let styles = StyleSheet.create({
    _container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    _heading: {
        color: "#000",
        fontSize: 23,
        fontFamily: "Comfortaa-Regular",
        marginTop: 10,
        marginBottom: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        textAlign: "center"
    },
    _subheading: {
        color: '#000',
        fontFamily: 'Comfortaa-Regular',
        fontSize: 13,
    },
    _leftButton: {
        width: 85,
        height: 80,
    },
    _title: {
        color: "#000",
        fontSize: 15,
        fontFamily: "Comfortaa-Regular",
        marginBottom: -50,
        marginTop: 50,
    },
});
export default ManageGoals;