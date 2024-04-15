import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import logo from '../assets/images/logo.png';
import { logoStyles, boxStyle } from '../styles'
// import { TextInput } from 'react-native-gesture-handler';
// import { app } from '../utils/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {emailVerifier, passwordVerifier, nameVerifier} from '../utils/validators'

export default function NewUser({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [nameValid, setNameValid] = useState(false);

  const [emailValid, setEmailValid] = useState(false);
  const [emailWarn, setEmailWarn] = useState(false);

  const [password8Valid, setPassword8Valid] = useState(false);
  const [passwordUpperLowerValid, setPasswordUpperLowerValid] = useState(false);
  const [passwordNumbersValid, setPasswordNumbersValid] = useState(false);

  const [passwordMatchValid, setPasswordMatchValid] = useState(false);

  const register = (email, password) => {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("success")
    } )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });


  };

  // const provider = new GoogleAuthProvider();

  // const auth = getAuth();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    // }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // // ...
    // });

  // register("huwjones37@gmail.com", "Test1234")
  // const auth = getAuth();
  // console.log(auth)

  const nameHandler = (value) => {

    let valid = nameVerifier(value)
    setNameValid(valid)
    setName(value)

  }


  const emailHandler = (email) => {


    // if the last character of email is a space, remove it
    if (email[email.length - 1] === ' ') {
      email = email.substring(0, email.length - 1);
    }

    setEmail(email)

    let valid = emailVerifier(email)
    setEmailValid(valid)


  }


  const passwordHandler = (pword) => {

    let validators = passwordVerifier(pword)

    setPassword8Valid(validators[0])
    setPasswordUpperLowerValid(validators[1])
    setPasswordNumbersValid(validators[2])

  }



  return (
    <View style={logoStyles.container}>
      <ImageBackground source={require('../assets/images/office_space.png')} style={logoStyles.backgroundImage} blurRadius={5}>

        {/* The Logo at the top of the page */}
        <Image source={require('../assets/images/logo.png')} style={logoStyles.logoCreate}/>

        {/* The log in message */}
        <View style={logoStyles.signInMessage}>

          <Text style={boxStyle.create_account}>Create New Account</Text>

          <View style={logoStyles.alreadyRegistered}>

            <Text>Already Registered? Log in </Text>
            <Text style={logoStyles.here}>here</Text>

          </View>


        </View>

        {/* Enter Values */}
        <View style={boxStyle.boxEnterAttrs}>

            <View style={boxStyle.signUpItems}>
                <Text style={boxStyle.signUpTextAttr}>Name (Company or Personal)</Text>
                <TextInput onChangeText={(value) => nameHandler(value) } style={boxStyle.signUpInputBox} placeholder="Your Name"/>
            </View>

            <View style={boxStyle.signUpItems}>
                <Text style={boxStyle.signUpTextAttr}>Email</Text>
                <TextInput onChangeText={(value) => emailHandler(value) } style={boxStyle.signUpInputBox} placeholder="Your Email"/>
            </View>

            <View style={boxStyle.signUpItems}>
                <Text style={boxStyle.signUpTextAttr}>Password</Text>
                <TextInput onChangeText={(value) => passwordHandler(value) } style={boxStyle.signUpInputBox} placeholder="Your Password"/>
            </View>

            <View style={boxStyle.passwordBox}>
              <Text style = {boxStyle.passwordMessage} >Password must contain:   </Text>    
              <Text style = {password8Valid ?  boxStyle.passwordCorrect : boxStyle.passwordMessage} > {password8Valid ? '\u2713': '\u2717'} at least 8 characters</Text>
              <Text style = {passwordUpperLowerValid ?  boxStyle.passwordCorrect : boxStyle.passwordMessage} > {passwordUpperLowerValid ? '\u2713': '\u2717'} upper and lowercase letters</Text>
              <Text style = {passwordNumbersValid ?  boxStyle.passwordCorrect : boxStyle.passwordMessage} > {passwordNumbersValid ? '\u2713': '\u2717'} at least one each of numbers and letters</Text>
            </View>

            <View style={boxStyle.signUpItems}>
                <Text style={boxStyle.signUpTextAttr}>Repeat Password</Text>
                <TextInput style={boxStyle.signUpInputBox} placeholder="Your Password (again)"/>
            </View>

        </View>

        <TouchableOpacity disabled={true} onPress={() => navigation.navigate('ReceiptData')} style={boxStyle.buttonLogIn2}>
            <Text style={boxStyle.textButton}>Create Account</Text>  
        </TouchableOpacity>

      </ImageBackground>

    </View>
  );
}