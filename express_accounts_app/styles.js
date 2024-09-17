import { StyleSheet } from 'react-native';


export const logoStyles = StyleSheet.create({
  
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: "#8F093E",
      height: "100%"
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
     width: "95%", 
      borderRadius: 100,
      flex:0.02,
      //flexDirection:"row"
    },

    logoLogin: {
      marginTop: 60,
     width: "95%", 
      borderRadius: 100,
      // flex:0.25,
      //flexDirection:"row"
    },

    logoCreate: {
      marginTop: 20,
     width: 280, 
     height: 80,
      borderRadius: 100,
      // flex:0.1                          
      //flexDirection:"row"
    },

    here: {
        color: "#8F093E",
        fontWeight: 'bold'
      },
  
    signInMessage: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.78)',
      borderRadius: 100,
      width: "80%",
    },


  
  
  });
  
  export const boxStyle = StyleSheet.create({
  
    box: {
      flex: 0.32,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.55)',
      borderRadius: 45,
      width: "86%", 
      // justifyContent: 'space-around',
      
    },
  
    textSignIn: {
      color: "white",
      fontSize: 16,
      padding: 1
    },
  
    buttonLogIn: {
      flex: 0.33,
      backgroundColor: "#312e74",
      borderColor: "#a60d49",
      borderWidth: 5,
      width: "82%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 37,
      marginBottom:25
    },

    buttonLogIn2: {
      flex: 0.2,
      backgroundColor: "#312e74",
      borderColor: "#a60d49",
      borderWidth: 5,
      width: "82%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 37,
      marginBottom:25
    },

    create_account: {
        color: "#312e74",
        fontSize: 25,
        padding: 1,
        fontWeight: 'bold'
    
      },
  
    textButton: {
      color: "white",
      fontSize: 30,
    },
  
    buttonSignUp: {
      flex: 0.33,
      backgroundColor: "#a60d49",
      borderColor: "#312e74",
      borderWidth: 5,
      width: "82%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 37,
    },
  
    boxBottom: {
      flex: 0.26,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(255,255,255,0.55)',
      borderRadius: 45,
      width: "86%", 
      marginBottom: 37
    },

    boxEnterAttrs: {
        // flex: 0.35,
        flexDirection: "column",
        // alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(255,255,255,0.78)',
        borderRadius: 37,
        width: "90%", 
        marginBottom: 10,
        padding: 20
      },
  
    federatedTextLogIn: {
      textDecorationLine: 'underline',
      fontSize: 15,
      marginTop:3,
      marginBottom:3,
    },
  
    federatedInnerBox: {
      flex: 10, 
      flexDirection: "vertical", 
      justifyContent: 'space-around', 
      width: "100%", 
      alignItems: "center"
      
    

    },
  
    federatedButton: {
      flex: 0.46,
      flexDirection: "row",
      borderColor: "#312e74",
      backgroundColor: "white",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 37,
      marginBottom:12
    },

    federatedButtonMicrosoft: {
      flex: 0.46,
      flexDirection: "row",
      borderColor: "#312e74",
      backgroundColor: "white",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 37,
      marginBottom:12,
    },
  
    federatedText: {
      marginLeft: "18%",
      color: "black",
      fontSize: 25
  
    },

    federatedTextMicrosoft: {
      marginLeft: "13.5%",
      color: "black",
      fontSize: 25
  
    },
  
    iconFederated: {
      marginLeft: 18,
      height: 30,
      width: 30,
      // flex: 1
    },

    signUpTextAttr: {
        // textDecorationLine: 'underline',
        fontSize: 17,
        marginBottom:3
        
      },
    
    signUpInputBox: {
        backgroundColor: "#c3c9c6",
        fontSize: 17,
        borderRadius: 5,
        borderWidth: 0.25,
        padding: 3,
        paddingVertical: 5,
        color: "black"
    },

    signUpItems: {
        marginBottom: 10
    },

    passwordMessage: {
      // marginHorizontal: 20,
      // alignSelf: 'center',
      color: "#312e74",
      fontStyle: 'italic'

    },
    passwordCorrect: {
      // marginHorizontal: 20,
      // alignSelf: 'center',
      color: 'green',
      fontStyle: 'italic'

    },

    passwordBox: {
      marginBottom: 5

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
      flexDirection: "row",
      marginTop: 40,
      flex: 32,
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
      // flex: 1, 
      width: "25%",
      height: 200,       
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