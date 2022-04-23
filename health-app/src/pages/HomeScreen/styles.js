import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        margin: 16,
        fontSize: 30,
        alignSelf: "flex-start",
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    info: {
        flex: 1,
        alignSelf: "center",
        margin: 24,
        textAlign: "center",
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        //backgroundColor: '#788eec',
        marginLeft: 60,
        marginRight: 60,
        marginTop: 20,
        height: 80,
        borderRadius: 5,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: 'center'
    },
    profile: {
        //backgroundColor: '#788eec',
        margin: 16,
        height: 80,
        width: 80,
        borderRadius: 5,
        alignSelf: "flex-end",
    },
    buttonTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
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
    }
})