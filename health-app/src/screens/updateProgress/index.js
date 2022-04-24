import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Input, Button, BackHeader } from "./../../components";
let UpdateProgress = (props) => {
    let [name, setName] = useState("");
    let [weight, setWeight] = useState("");
    let [age, setAge] = useState("");
    return (
        <SafeAreaView style={styles._container}>
            <BackHeader BackHandler={() => props.navigation.goBack()} />
            <Text style={styles._heading}>Update Progress</Text>
            <Text style={styles._subheading}>Update any or all of the following progress for today.</Text>
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
                        onPress={() => props.navigation.navigate("Progess")}
                    />
                </View>
                <Button
                    ButtonText="Update Goals"
                    onPress={() => props.navigation.navigate("Progess")}
                />
                <View style={{ paddingBottom: 20 }} />
            </ScrollView>
        </SafeAreaView>
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
export default UpdateProgress;