import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useAuth, authentication} from "../../firebase/config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons'; 




import styles from './styles';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onRegistrationPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {

        signInWithEmailAndPassword(authentication, email, password)
  .then((re) => {
   console.log('Signed in')
  })
  .catch((error) => {
    console.log(error)
  });
    }
       
    
    return (
        
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
        <Text style={styles.heading}>Log in</Text>

         <View style={styles.passwordContainer}>         
            <Image
                            style={styles.profile}
                            source={require('../../../assets/profile.png')}
            />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  
                />
        </View>
        <View style={styles.passwordContainer}>         

                <Image
                            style={styles.lock}
                            source={require('../../../assets/lock.png')}
            />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
        </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegistrationPress()}>
                    <Text style={styles.buttonTitle}>Register a New Account</Text>
                </TouchableOpacity>
                
            </KeyboardAwareScrollView>
        </View>
    )
}