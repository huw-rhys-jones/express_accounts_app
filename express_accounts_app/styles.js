import { StyleSheet } from 'react-native';


export const logoStyles = StyleSheet.create({
  
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: "blue"
    },
  
    backgroundImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    alreadyRegistered: {
        // flex: 3,
        flexDirection: 'row',
        padding: 10
      },
  
    logo: {
      marginTop: 60,
      width: "90%", 
      borderRadius: 100
    },

    here: {
        color: "#a60d49",
        fontWeight: 'bold'
      },
  
    signInMessage: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 100,
      width: "90%"
    }
  
  
  });
  
  export const boxStyle = StyleSheet.create({
  
    box: {
      flex: 0.35,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      width: "90%", 
      justifyContent: 'space-around',
    },
  
    textSignIn: {
      color: "#312e74",
      fontSize: 20.5,
      padding: 10
    },
  
    buttonLogIn: {
      flex: 0.3,
      backgroundColor: "#312e74",
      borderColor: "#a60d49",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },

    create_account: {
        color: "#312e74",
        fontSize: 25,
        padding: 10,
        fontWeight: 'bold'
    
      },
  
    textButton: {
      color: "white",
      fontSize: 30,
    },
  
    buttonSignUp: {
      flex: 0.3,
      backgroundColor: "#a60d49",
      borderColor: "#312e74",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
  
    boxBottom: {
      flex: 0.35,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      borderRadius: 30,
      width: "90%", 
      marginBottom: 20
    },

    boxEnterAttrs: {
        // flex: 0.35,
        flexDirection: "column",
        // alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 30,
        width: "90%", 
        marginBottom: 20,
        padding: 20
      },
  
    federatedTextLogIn: {
      textDecorationLine: 'underline',
      fontSize: 15
    },
  
    federatedInnerBox: {
      flex: 1, 
      flexDirection: "vertical", 
      justifyContent: 'space-around', 
      width: "100%", 
      alignItems: "center"
    },
  
    federatedButton: {
      flex: 0.35,
      flexDirection: "row",
      borderColor: "#312e74",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 10,
    },
  
    federatedText: {
      marginLeft: "22%",
      color: "black",
      fontSize: 25
  
    },
  
    iconFederated: {
      marginLeft: 10,
      height: 30,
      width: 30,
      // flex: 1
    },

    signUpTextAttr: {
        // textDecorationLine: 'underline',
        fontSize: 17,
        marginBottom:5
      },
    
    signUpInputBox: {
        backgroundColor: "#c3c9c6",
        fontSize: 17,
        borderRadius: 5,
        padding: 3,
        paddingVertical: 5,
        color: "black"
    },

    signUpItems: {
        marginBottom: 10
    }


  
  })

  export const receipt = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: "white",
      marginTop: 25
    },

    containerTitle: {
      // flex: 1,
      borderBottomColor: "black",
      borderBottomWidth: 2,
      borderTopColor: "black",
      borderTopWidth: 2,
      width: "100%",
      backgroundColor: "#3896e0"
    },

    textTitle: {
      color: "#312e74",
      fontSize: 20.5,
      padding: 10,
      // borderColor: "black",
      // borderWidth: 1,
      // width: "100%",
      textAlign: "center"
    },

    dataValuesPanel: {
      flex: 4,
      justifyContent: "flex-start",
      width: "75%",
    },

    dataValuesItem: {

      marginVertical: 15

    },

    itemTitle: {
      color: "#312e74",
      fontSize: 20.5,
      textAlign: "left",
      fontWeight: "bold"

    },

    moneyRow: {
      marginTop: 5,
      flexDirection: "row"
    },

    buttonsBottom: {
      flexDirection: "row",
      borderTopColor: "black",
      borderTopWidth: 2,
      width: "100%",
      justifyContent: "space-around"
    },

    receiptPanel: {
      flex: 4,
      justifyContent: "flex-start",
      width: "100%",
      borderTopColor: "black",
      borderTopWidth: 2
    },

    currencySelector: {
      backgroundColor: "black", 
      width: 50, 
      height: 40, 
      borderRadius: 5
    },

    amountInput: {
      backgroundColor: "#b3bac0", 
      flex: 0.75, 
      marginLeft: 5, 
      borderRadius: 5, 
      padding: 5
    },

    dateOuter: {
      backgroundColor: "#b3bac0", 
      flex: 0.75, 
      marginLeft: 5, 
      borderRadius: 5, 
      padding: 5, 
      height: 40
    },

    dateInner: {
      backgroundColor: "#b3bac0", 
      flex: 0.75, 
      marginLeft: 5, 
      borderRadius: 5, 
      // padding: 5, 
      textAlign: "center", 
      fontSize: 20
    },

    categoryDropdown: {
      backgroundColor: "black", 
      width: 200, 
      height: 40, 
      borderRadius: 5
    },

    categoryText: {
      color: "white"
    },

    receiptImageBox: {
      flex: 0.8, 
      width: "25%", 
      backgroundColor: "#d9d9d9", 
      margin: 10, 
      justifyContent: "center", 
      alignItems: "center"
    },

    receiptImageAdd: {
      backgroundColor: "grey", 
      padding: 5, 
      borderRadius: 20, 
      height: 30, 
      width: 30, 
      justifyContent: "center", 
      alignItems: "center" 
    },

    receiptImageIcon: {
      name: "plus",
      size: 15,
      color: "white"
    },

    button: {
      borderColor: "#312e74",
      borderRadius: 5,
      borderWidth: 2,
      backgroundColor: "#a60d49",
      width: "35%",
      marginVertical: 15,
      padding: 5
    },

    buttonText: {
      textAlign: "center",
      color: "white",
      fontSize: 25
    }

  })


  export const images = StyleSheet.create({

    imageButton: {
                // flex: 2,
                 backgroundColor: "#28BDC0", 
                 marginTop: 12,
                 margin: 5,
                 padding: 5,
                 borderRadius: 5
    },

    imageButtonText: {
                 color: "white",
                 fontSize: 25
    },

    saveButton: {
      // flex: 2,
       backgroundColor: "#369C31", 
       marginTop: 12,
       margin: 5,
       padding: 5,
       borderRadius: 5
    },

    detectBox: {
                 flexDirection: "row",
                 marginVertical: 5,
                 borderWidth: 1,
                 borderColor: "black",
                 padding: 5
    },

    detectText: {
                 fontSize: 15,
                 marginTop: 3,
                 borderWidth: 1,
                 padding: 3
    },

    deleteX: {
              fontSize: 20,
              marginTop: 3,
              // padding: 3,
              paddingHorizontal: 5,
              color: "red",
              borderWidth: 1,
              borderColor: "white"
              // textAlign: "center"
    },

    imageScroll: {

      borderTopWidth: 1

    }


  
  })