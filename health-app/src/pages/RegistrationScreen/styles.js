import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
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
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    _signOutbtn:{
        backgroundColor: "#d32f2f",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
    },
      _back: {
        // width: 50,
        // height: 50,
        // borderRadius: 50 / 2,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 40,
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
      _heading: {
        color: "#000",
        fontSize: 25,
        fontFamily: "Comfortaa-Regular",
        marginTop: 30,
        paddingBottom: 10,
      },
      _title: {
        color: "#000",
        fontSize: 15,
        fontFamily: "Comfortaa-Regular",
        marginBottom: -10,
        marginTop: 10,
      },
      _title_main:{
        color: "#000",
        fontSize: 15,
        fontFamily: "Comfortaa-Regular",
        marginTop: 10,
      }
})