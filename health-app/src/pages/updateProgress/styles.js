import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {db, authentication, handleSignOut} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";
import styles from './styles';


const onViewProgressPress = () => {
    console.log("Pressed!");
    navigation.navigate('Update');
}


export default function HomeScreen(props) {
    console.log(props.user.email);
    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">

            <View
            style={{ flex: 1, width: '100%', flexDirection: "row" }}>
                <Text style={styles.title}>Welcome to view progress!</Text>

                <TouchableOpacity
                    style={styles.profile}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>View Profile</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.info}>
                Some stuff about the app and the services we offer.
                Stuff about how to navigate the app.
            </Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Update Progress</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => onViewProgressPress()}>
                <Text style={styles.buttonTitle}>View Progress</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                >
                <Text style={styles.buttonTitle}>Manage Goals!</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    </View>
    )
}