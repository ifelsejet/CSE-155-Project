import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
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
    //console.log(props.user);

    
    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">

            <View
            style={{ flex: 1, width: '100%', flexDirection: "row", justifyContent: 'space-between' }}>
                <Text style={styles.title}>Welcome, USER!</Text>

                <TouchableOpacity
                    style={styles.profile}
                    onPress={() => props.navigation.navigate('Profile')}>

                    <Image
                            style={styles.profile}
                            source={require('../../../assets/profile.png')}
                    />
                </TouchableOpacity>
            </View>

        
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
                onPress={() => props.navigation.navigate('Manage')}
                >
                <Text style={styles.buttonTitle}>Manage Goals</Text>
               
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    </View>
    )
}