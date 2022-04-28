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
    marginLeft: 10,
  },
  _heading: {
    color: "#000",
    fontSize: 36,
    fontFamily: "Comfortaa-Regular",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10
  },
  _progess_heading_main: {
    backgroundColor: "#C4C4C4",
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  _centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    /*textAlign: "left"*/
    fontFamily: 'Comfortaa-Regular',
    fontSize: 15,
    marginLeft: 10,
    marginTop: -16,
  },
  modalText1: {
    /*textAlign: "left"*/
    fontFamily: 'Comfortaa-Regular',
    fontSize: 15,
    marginLeft: 95,
    marginTop: -16
  },
  modalText2: {
    /*textAlign: "left"*/
    fontFamily: 'Comfortaa-Regular',
    fontSize: 15,
    marginLeft: 190,
    marginTop: -16

  },
  modalView: {
    margin: 40,
    marginTop: 70,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  _btn: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  _btn_text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Comfortaa-Regular",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  _leftButton: {
    width: 85,
    height: 80,
  },
  _btn1: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  _btn2: {
    backgroundColor: "red",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
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