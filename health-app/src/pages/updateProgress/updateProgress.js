import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";



import styles from './styles';

export default function UpdateProgress({navigation}) {
    
       

    return (
        
        <View >
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
            <Text>Update Progress</Text>
            <Text>Update Progress</Text>
            <Text>Update Progress</Text>

            </KeyboardAwareScrollView>
        </View>
    )
}