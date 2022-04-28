import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tasks = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.itemText}>{props.text.title}</Text>
          <Text style={styles.itemText1}>{props.text.amount}</Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  item: {
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
    color: '#000',
    fontFamily: 'Comfortaa-Regular',
    fontSize: 15,
    marginLeft: 10,
  },
  itemText1: {
    color: '#000',
    fontFamily: 'Comfortaa-Regular',
    fontSize: 15,
    marginLeft: 160,
    marginTop: -56,
    paddingTop: 40,
    paddingBottom: 40,
    textAlignVertical: "center"
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