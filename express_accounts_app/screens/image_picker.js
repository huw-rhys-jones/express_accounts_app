import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Dimensions, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MlkitOcr from 'react-native-mlkit-ocr';

export const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    // aspect: [4, 3],
    quality: 1,
    // base64: true
  });


  if (!result.canceled) {
    return result
  }
}

export default function ImagePicking({ route, navigation }) {
  const [resultFromUri, setResult] = useState(null);
  const [image, setImage] = useState(null);

  const recognizeTextFromImage = async (result) => {

    const resultFromUri = await MlkitOcr.detectFromUri(result.assets[0].uri);
    setResult(resultFromUri)

    {resultFromUri.map((block) => {
      block.lines.map((line) => {

        // console.log(line.text)
 
      });
    })}
 
  };  
  

  if (route.params && !image) {
    setImage(route.params.assets[0]);
    recognizeTextFromImage(route.params)

  } 

  function fitWidth(value, imageWidth) {
    const fullWidth = Dimensions.get('window').width;
    // console.log(image)
    if (image) {return (value / imageWidth) * fullWidth;}
    // 
  }
  
  function fitHeight(value, imageHeight) {
    const fullHeight = Dimensions.get('window').height;
    if (image) {return (value / imageHeight) * fullHeight};
  }


  const selectImage = async () => {
    const pickerResult = await pickImage()
    if (pickerResult) {
      await recognizeTextFromImage(pickerResult)
      setImage(pickerResult.assets[0]);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image fm camera roll" onPress={selectImage} />

      <ScrollView>
        <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>        
          {image && <Image source={{ uri: image.uri }} style={{ flex: 1, width: null, height: null, resizeMode: "contain" }} />}
          {resultFromUri?.map((block) => {
                return block.lines.map((line) => {
                  return (
                    <View
                      key={line.text}
                      style={{
                        backgroundColor: '#706464af',
                        position: 'absolute',
                        // top: line.bounding.top,
                        // height: line.bounding.height,
                        // left: line.bounding.left, 
                        // width: line.bounding.width,
                        
                        top: fitHeight(line.bounding.top, image?.height ?? 0),
                        height: fitHeight(line.bounding.height, image?.height ?? 0),
                        left: fitWidth(line.bounding.left, image?.width ?? 0),
                        width: fitWidth(line.bounding.width, image?.width ?? 0),
                      }}
                    >
                      {/* <Text style={{ fontSize: 10 }}>{line.text}</Text> */}
                    </View>
                  );
                });
              })}

        </View>
       </ScrollView>  
    </View>
  );
}
