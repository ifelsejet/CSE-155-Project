import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { handleSignOut } from "../../firebase/config";
import styles from './styles';


export default function HomeScreen(props) {
    console.log(props.user.email);
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                <View
                style={{ flex: 1,  width: '100%', flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Welcome, USER!</Text>

                    <TouchableOpacity
                    onPress={() => onLoginPress()}>
                        <Image
                            style={styles.profile}
                            source={require('../../../assets/profile.png')}
                        />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                        style={styles.button}
                        onPress={() => onLoginPress()}>
                        <Text style={styles.buttonTitle}>Update Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>View Progress</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSignOut()}>
                    <Text style={styles.buttonTitle}>Manage Goals</Text>
                </TouchableOpacity>
 
            </KeyboardAwareScrollView>
        </View>
    )
}