import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import {db, authentication, handleSignOut} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";

export default function HomeScreen(props) {
    console.log(props.user.email);
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity
                    onPress={() => handleSignOut()}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
        </View>
    )
}