import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    _container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      },
      input: {
        borderWidth: 1.5,
        borderColor: "#000",
        marginTop: 20,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: "#000",
        fontFamily: "Comfortaa-Regular",
        fontSize: 16,
        flex: 1,
        marginLeft: 10,
        marginRight:10,

        
        /*
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
        */
    },
    _signOutbtn:{
        backgroundColor: "red",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
      _back: {
        // width: 50,
        // height: 50,
        // borderRadius: 50 / 2,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 40,
        marginLeft: 10,
      },
      _btn: {
        backgroundColor: "#000",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
      },
      _btn_text: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Comfortaa-Regular",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      _heading: {
        color: "#000",
        fontSize: 25,
        fontFamily: "Comfortaa-Regular",
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10
      },
      _title: {
        color: "#000",
        fontSize: 15,
        fontFamily: "Comfortaa-Regular",
        marginBottom: -10,
        marginTop: 10,
        marginLeft: 10,
      },
      _title_main:{
        color: "#000",
        fontSize: 15,
        fontFamily: "Comfortaa-Regular",
        marginTop: 10,
        marginLeft: 10
      }
})