import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    _container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      },
      _back: {
        // width: 50,
        // height: 50,
        // borderRadius: 50 / 2,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 40,
      },
      _heading: {
        color: "#000",
        fontSize: 36,
        fontFamily: "Comfortaa-Regular",
        marginTop: 10,
        marginBottom: 20,
      },
      _progess_heading_main: {
        backgroundColor: "#C4C4C4",
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
      },
      _btn: {
        backgroundColor: "#000",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
      },
      _btn_text: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Comfortaa-Regular",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      _progess_heading: {
        color: "#000",
        fontSize: 20,
        fontFamily: "Comfortaa-Regular",
        fontWeight: "bold",
      },
      _chart: {
        marginTop: 20,
        alignItems: "center",
        width: 250, 
        height: 250, 
        backgroundColor: 'powderblue'
      },
      
      pickerSelectStyles: {
            fontSize: 20,
            fontFamily: "Comfortaa-Regular",
            fontWeight: "bold",
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 0,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30 // to ensure the text is never behind the icon
        },
      
})