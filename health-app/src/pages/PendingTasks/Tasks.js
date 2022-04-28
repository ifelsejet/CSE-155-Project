import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


const Tasks = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <Image
                            style={styles.close}
                            source={require('../../../assets/close.png')}
                    />
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#000000',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    close: {
        width: 30,
        height: 30,
    },
    itemText: {
      maxWidth: '80%',
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
  
  });
export default Tasks;