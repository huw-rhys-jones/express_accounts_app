import { StyleSheet } from 'react-native';


export const logoStyles = StyleSheet.create({
  
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: "#8F093E"
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
     // width: "100%", 
      borderRadius: 100,
      flex:0.19,
      //flexDirection:"row"

      

    },

    here: {
        color: "#8F093E",
        fontWeight: 'bold'
      },
  
    signInMessage: {
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#8F093E',
      borderRadius: 100,
      width: "90%",
     
      

    }
  
  
  });
  
  export const boxStyle = StyleSheet.create({
  
    box: {
      flex: 0.308,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.70)',
      borderRadius: 45,
      width: "87%", 
      // justifyContent: 'space-around',
      
    },
  
    textSignIn: {
      color: "white",
      fontSize: 16,
      padding: 1
    },
  
    buttonLogIn: {
      flex: 0.35,
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
      flex: 0.35,
      backgroundColor: "#a60d49",
      borderColor: "#312e74",
      borderWidth: 5,
      width: "82%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 37,
    },
  
    boxBottom: {
      flex: 0.282,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(255,255,255,0.70)',
      borderRadius: 45,
      width: "87%", 
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
        marginBottom: 20,
        padding: 20
      },
  
    federatedTextLogIn: {
      textDecorationLine: 'underline',
      fontSize: 15,
      marginTop:10
    },
  
    federatedInnerBox: {
      flex: 10, 
      flexDirection: "vertical", 
      justifyContent: 'space-around', 
      width: "100%", 
      alignItems: "center"
      
    

    },
  
    federatedButton: {
      flex: 0.4,
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
      flex: 0.4,
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
        marginBottom:2
        
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