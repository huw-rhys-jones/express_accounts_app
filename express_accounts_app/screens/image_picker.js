import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MlkitOcr from 'react-native-mlkit-ocr';


export default function ImagePicking() {
  const [image, setImage] = useState(null);

  const recognizeTextFromImage = async (result) => {

    const resultFromUri = await MlkitOcr.detectFromUri(result.assets[0].uri);

    {resultFromUri.map((block) => {
      block.lines.map((line) => {

        console.log(line.text)
 
      });
    })}
 



  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
      // base64: true
    });

    

    // console.log(result);

    if (!result.canceled) {
      await recognizeTextFromImage(result)
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image fm camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 350, height: 600 }} />}
    </View>
  );
}
