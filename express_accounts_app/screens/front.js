import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import logo from '../assets/images/logo.png';
import { logoStyles, boxStyle } from '../styles'
import { app, auth } from '../utils/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Front({ navigation }) {

  auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
    } else {
      console.log("no user")
    }
  });

  // auth.signOut()

  return (
    <ScrollView contentContainerStyle={logoStyles.scrollContainer}>
      <View style={logoStyles.container}>
        <ImageBackground source={require('../assets/images/office_space.png')} style={logoStyles.backgroundImage} blurRadius={5}>

          {/* The Logo at the top of the page */}
          <Image source={require('../assets/images/logo.png')} style={logoStyles.logo}/>                                            
          
          {/* The log in message */}
          <View>

            <Text style={boxStyle.textSignIn}>Sign in to continue</Text>

          </View>

          {/* Log in buttons */}
          <View style={boxStyle.box}>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={boxStyle.buttonLogIn}>
              <Text style={boxStyle.textButton}>Log in</Text>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('NewUser')} style={boxStyle.buttonSignUp}>
              <Text style={boxStyle.textButton}>Sign up</Text>  
            </TouchableOpacity>

          </View>

          {/* Federated log in buttons */}
          <View style={boxStyle.boxBottom}>

            <Text style={boxStyle.federatedTextLogIn}>Log in with</Text>

            <View style={boxStyle.federatedInnerBox}>

            <TouchableOpacity style={boxStyle.federatedButton}>
              
              <Image source={require('../assets/images/google.png')} style={boxStyle.iconFederated} />           
              <Text style={boxStyle.federatedText}>Google</Text>  

            </TouchableOpacity>

            <TouchableOpacity style={boxStyle.federatedButtonMicrosoft}>
              
              <Image source={require('../assets/images/Microsoft_logo.svg.png')} style={boxStyle.iconFederated} />           
              <Text style={boxStyle.federatedTextMicrosoft}>Microsoft</Text>  

            </TouchableOpacity>
            </View>
          </View>



        </ImageBackground> 
        
      </View>
    </ScrollView>
  );
}
