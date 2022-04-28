import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
      
    },
    heading: {
        color: "#000",
        fontSize: 36,
        fontFamily: "Comfortaa-Regular",
        marginTop: 30,
        marginBottom: 20,
      },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
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
    button: {
        backgroundColor: "#000",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        /*
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
        */
    },
    buttonTitle: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Comfortaa-Regular",
        textTransform: "uppercase",
        fontWeight: "bold",
        /*
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
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
    profile: {
        height: 25, 
        width: 25,
        marginTop: 32,
        alignContent: 'center',
        marginRight: 5,
    },
    lock: {
        height: 25, 
        width: 25,
        marginTop: 32,
        alignContent: 'center',
        marginRight: 5,
        
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})