import React, { useState, useEffect } from 'react';
import { Button, Image, View, TouchableOpacity, Dimensions, ScrollView, Text, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MlkitOcr from 'react-native-mlkit-ocr';
import { images, receipt } from '../styles'
import { Camera } from "expo-camera";
import Icon from 'react-native-vector-icons/FontAwesome';

export const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // allowsEditing: true,
    // aspect: [4, 8],
    quality: 1,
    // base64: true
  });


  if (!result.canceled) {
    return result
  }
}

