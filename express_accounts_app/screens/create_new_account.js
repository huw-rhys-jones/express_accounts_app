import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import logo from '../assets/images/logo.png';
import { logoStyles, boxStyle } from '../styles'
// import { TextInput } from 'react-native-gesture-handler';
import { app } from '../utils/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function NewUser({ navigation }) {

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

  register("huwjones37@gmail.com", "Test1234")
  // const auth = getAuth();
  // console.log(auth)


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
                <TextInput style={boxStyle.signUpInputBox} placeholder="Your Name"/>
            </View>

            <View style={boxStyle.signUpItems}>
                <Text style={boxStyle.signUpTextAttr}>Email</Text>
                <TextInput style={boxStyle.signUpInputBox} placeholder="Your Email"/>
            </View>

            <View style={boxStyle.signUpItems}>
                <Text style={boxStyle.signUpTextAttr}>Password</Text>
                <TextInput style={boxStyle.signUpInputBox} placeholder="Your Password"/>
            </View>

            <View style={boxStyle.signUpItems}>
                <Text style={boxStyle.signUpTextAttr}>Repeat Password</Text>
                <TextInput style={boxStyle.signUpInputBox} placeholder="Your Password (again)"/>
            </View>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ReceiptData')} style={boxStyle.buttonLogIn2}>
            <Text style={boxStyle.textButton}>Create Account</Text>  
        </TouchableOpacity>

      </ImageBackground>

    </View>
  );
}