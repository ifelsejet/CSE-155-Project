import React from 'react';
import { LineChart } from 'react-native-chart-kit'
import {Dimensions} from "react-native"
let Chart = (props)=>{
  return (<LineChart
    data={props.datainput}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#C4C4C4',
      backgroundGradientFrom: '#222',
      backgroundGradientTo: '#222',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  /> )
}
export default Chart