import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {db, authentication, handleSignOut} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";
import { createStackNavigator } from '@react-navigation/stack'
import Update from '../updateProgress/updateProgress';

import styles from './styles';


const onViewProgressPress = () => {
    console.log("Pressed!");
    //props.navigation.navigate('Update');
}

const Stack = createStackNavigator();


export default function HomeScreen(props) {
    //console.log(props.user.email);
    console.log(props.user);
    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">

            <View
            style={{ flex: 1, width: '100%', flexDirection: "row" }}>
                <Text style={styles.title}>Welcome, USER!</Text>

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
                onPress={() => props.navigaton.navigate('Update')}>
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