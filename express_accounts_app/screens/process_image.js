import { Button, Image, View, Modal, TouchableOpacity, Dimensions, ScrollView, Text } from 'react-native';
import { toEditorSettings } from 'typescript';
import { useRef, useState } from "react";
import { receipt, logoStyles } from '../styles'
import { pickImage } from './image_picker'

//  TODO 
// Retake button
// Make retake button work
// Confirmation dialog box for new image - could have option for image picker/camera/cancel
// Accept button
//  Make accept button work
// Placeholder for detected currency/amount/date/category

export default function Process({ route, navigation }) {

  const [uri, setUri] = useState(route.params);
  const [modalVisible, setModalVisible] = useState(false); 
  
  const launch_camera = () => {
    setModalVisible(false)
    setUri(null)
    navigation.navigate('Camera')

  } 

  const imagePicker = async () => {

    setModalVisible(false)
    const image = await pickImage()
    // navigation.navigate('Process', image)
    if (image) {
      setUri(image.assets[0].uri)
    }
  }

  const accept = () => {
    setModalVisible(false)
    navigation.navigate('ReceiptData', {uri})

  }

    return (
        <View style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: 'space-around',}}>
          
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22, backgroundColor: '#706464af'}}>
              <View style={{margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2}}}>
                <Text >How would you like to add your receipt?</Text>

                <View style={receipt.buttonsBottom}>

                  <TouchableOpacity onPress={() => launch_camera()}
                    style={{borderColor: "#312e74", justifyContent: "center", borderRadius: 5, borderWidth: 2, backgroundColor: "#a60d49", width: "35%", marginVertical: 15, padding: 5}}>
                    <Text style={{textAlign: "center", color: "white", fontSize: 20}}>Camera</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    onPress={() => imagePicker()}
                    style={{borderColor: "#312e74", justifyContent: "center", borderRadius: 5, borderWidth: 2, backgroundColor: "#a60d49", width: "35%", marginVertical: 15, padding: 5}}>
                    <Text style={{textAlign: "center", color: "white", fontSize: 20}}>Select Photo</Text>
                  </TouchableOpacity>

                </View>

                <TouchableOpacity
                  style={{borderWidth: 1, padding: 2, borderRadius: 2}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          
          <Image
            source={{ uri }}
            contentFit="contain"
            style={{ width: 300, aspectRatio: 1 }}
          />
          <Button onPress={() => setModalVisible(true)} title="Use a Different Image" />
          <Button onPress={() => accept()} title="Accept" />
        </View>
        
      );

}

// export default function ImagePicking({ route, navigation }) {
//     const [resultFromUri, setResult] = useState(null);
//     const [image, setImage] = useState(null);
  
//     const [modalVisible, setModalVisible] = useState(false);
  
  
//     const [detectedCurrency, setDetectedCurrency] = useState("£");
//     const [detectedAmount, setDetectedAmount] = useState("101.13");
//     const [detectedDate, setDetectedDate] = useState("20/07/2023");
//     const [detectedCategory, setDetectedCategory] = useState("Accomodation");
  
//     const [status, requestPermission] = Camera.useCameraPermissions();
  
//     const recognizeTextFromImage = async (result) => {
  
//       const resultFromUri = await MlkitOcr.detectFromUri(result.assets[0].uri);
//       setResult(resultFromUri)
  
//       {resultFromUri.map((block) => {
//         block.lines.map((line) => {
  
//           // console.log(line.text)
   
//         });
//       })}
   
//     };  
    
  
//     if (route.params && !image) {
//       setImage(route.params.assets[0]);
//       recognizeTextFromImage(route.params)
  
//     } 
  
//     function fitWidth(value, imageWidth) {
//       const fullWidth = Dimensions.get('window').width;
//       // console.log(image)
//       if (image) {return (value / imageWidth) * fullWidth;}
//       // 
//     }
    
//     function fitHeight(value, imageHeight) {
//       const fullHeight = Dimensions.get('window').height;
//       if (image) {return (value / imageHeight) * fullHeight};
//     }
  
  
  
//     const selectImage = async () => {
//       const pickerResult = await pickImage()
//       setModalVisible(!modalVisible);
//       if (pickerResult) {
//         // console.log(pickerResult.assets[0].uri)
//         await recognizeTextFromImage(pickerResult)
//         setImage(pickerResult.assets[0]);
//       }
//     }
  
//     const launch_camera = async () => {
  
//       if (!status?.granted) {
  
//         await requestPermission(status, requestPermission)
  
//       }
      
//       setModalVisible(!modalVisible);
//       navigation.navigate('Camera')
//   }
  
//     return (
  
      
  
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
  
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             // Alert.alert('Modal has been closed.');
//             setModalVisible(!modalVisible);
//           }}>
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22, backgroundColor: '#706464af'}}>
//               <View style={{margin: 20,
//                 backgroundColor: 'white',
//                 borderRadius: 20,
//                 padding: 35,
//                 alignItems: 'center',
//                 shadowColor: '#000',
//                 shadowOffset: {
//                   width: 0,
//                   height: 2}}}>
//                 <Text >How would you like to add your receipt?</Text>
  
//                 <View style={receipt.buttonsBottom}>
  
//                   <TouchableOpacity onPress={() => launch_camera()}
//                     style={{borderColor: "#312e74", justifyContent: "center", borderRadius: 5, borderWidth: 2, backgroundColor: "#a60d49", width: "35%", marginVertical: 15, padding: 5}}>
//                     <Text style={{textAlign: "center", color: "white", fontSize: 20}}>Camera</Text>
//                   </TouchableOpacity>
  
//                   <TouchableOpacity 
//                     onPress={() => selectImage()}
//                     style={{borderColor: "#312e74", justifyContent: "center", borderRadius: 5, borderWidth: 2, backgroundColor: "#a60d49", width: "35%", marginVertical: 15, padding: 5}}>
//                     <Text style={{textAlign: "center", color: "white", fontSize: 20}}>Select Photo</Text>
//                   </TouchableOpacity>
  
//                 </View>
  
//                 <TouchableOpacity
//                   style={{borderWidth: 1, padding: 2, borderRadius: 2}}
//                   onPress={() => setModalVisible(!modalVisible)}>
//                   <Text>Cancel</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//         </Modal>
  
//         <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={images.imageButton}>
//           <Text style={images.imageButtonText}>Change Image</Text>
//         </TouchableOpacity>
  
//         {/* {resultFromUri ? */}
//         <View style={images.detectBox}> 
  
//           <View>
  
//             <TouchableOpacity>
//               <Text style={images.deleteX} >x</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity>
//               <Text style={images.deleteX} >x</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity>
//               <Text style={images.deleteX} >x</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity>
//               <Text style={images.deleteX} >x</Text>
//             </TouchableOpacity>
  
//           </View>
        
//           <View> 
  
//             <Text style={images.detectText}>Currency detected: </Text>
//             <Text style={images.detectText}>Amount detected: </Text>
//             <Text style={images.detectText}>Date detected: </Text>
//             <Text style={images.detectText}>Category detected: </Text>
  
//           </View>
  
//           <View> 
  
//             <Text style={images.detectText}>{detectedCurrency}</Text>
//             <Text style={images.detectText}>{detectedAmount}</Text>
//             <Text style={images.detectText}>{detectedDate}</Text>
//             <Text style={images.detectText}>{detectedCategory}</Text>
  
//           </View>
  
  
//         </View> 
//         {/* : <Text> Nothing detected! </Text> } */}
  
//         <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={images.saveButton}>
//           <Text style={images.imageButtonText}>Save</Text>
//         </TouchableOpacity>
  
//         <ScrollView style={images.imageScroll}>
//           <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>        
//             {image && <Image source={{ uri: image.uri }} style={{ flex: 0.75, width: null, height: null, resizeMode: "contain" }} />}
//             {resultFromUri?.map((block) => {
//                   return block.lines.map((line) => {
//                     return (
//                       <View
//                         key={line.text}
//                         style={{
//                           backgroundColor: '#706464af',
//                           position: 'absolute',
//                           // top: line.bounding.top,
//                           // height: line.bounding.height,
//                           // left: line.bounding.left, 
//                           // width: line.bounding.width,
                          
//                           top: fitHeight(line.bounding.top, image?.height ?? 0),
//                           height: fitHeight(line.bounding.height, image?.height ?? 0),
//                           left: fitWidth(line.bounding.left, image?.width ?? 0),
//                           width: fitWidth(line.bounding.width, image?.width ?? 0),
//                         }}
//                       >
//                         {/* <Text style={{ fontSize: 10 }}>{line.text}</Text> */}
//                       </View>
//                     );
//                   });
//                 })}
  
//           </View>
//          </ScrollView>  
//       </View>
//     );
//   }
  