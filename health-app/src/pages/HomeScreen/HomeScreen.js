import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {db, authentication, handleSignOut} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { collection, getDoc,updateDoc,onSnapshot,deleteDoc,doc,setDoc, waitForPendingWrites} from "firebase/firestore";
import { createStackNavigator } from '@react-navigation/stack'
import UpdateProgress from '../updateProgress/UpdateProgress';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';


const onViewProgressPress = () => {
    console.log("Pressed!");
    navigation.navigate('Update');
}

const Stack = createStackNavigator();
//const navigation = useNavigation();



export default function HomeScreen(props) {
    //const navigation = useNavigation();

    //console.log(props.user.email);
    console.log(props.user);
    console.log("AHHHHHH");
    console.log(props);
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
                    onPress={() => props.navigation.navigate('Profile')}>
                    <Text style={styles.buttonTitle}>View Profile</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.info}>
                Some stuff about the app and the services we offer.
                Stuff about how to navigate the app.
            </Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Update')}>
                    <Text style={styles.buttonTitle}>Update Progress</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('View')}>
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