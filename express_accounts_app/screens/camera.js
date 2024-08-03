import { Camera, useCameraPermissions, CameraMode,
  CameraType,
  CameraView } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Cam({ navigation }) {
  const [status, requestPermission] = useCameraPermissions();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [lastPhotoURI, setLastPhotoURI] = useState(null);
  const cameraRef = useRef(null);

  if (!status?.granted) {
    requestPermission()
  }

  // if (lastPhotoURI !== null) {
  //   return (
  //     <ImageBackground
  //       source={{ uri: lastPhotoURI }}
  //       style={{
  //         flex: 1,
  //         backgroundColor: "transparent",
  //         flexDirection: "row",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <TouchableOpacity
  //         style={{
  //           flex: 0.2,
  //           alignSelf: "flex-end",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           backgroundColor: "#666",
  //           marginBottom: 40,
  //           marginLeft: 20,
  //         }}
  //         onPress={() => {
  //           setLastPhotoURI(null);
  //         }}
  //       >
  //         <Text style={{ fontSize: 30, padding: 10, color: "white" }}>❌</Text>
  //       </TouchableOpacity>
  //     </ImageBackground>
  //   );
  // }

  return (

    
    // TODO - implement this at some point
    // https://stackoverflow.com/questions/67901368/how-to-implement-tap-on-focus-in-react-natie-using-expo-camera
    <Camera style={{ flex: 1 }} type={type} ref={cameraRef} autoFocus={Camera.Constants.AutoFocus.on}>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#080808af', width: 30, justifyContent: "center", alignContent: "center", padding: 5, margin: 5, borderRadius: 4 }}>
        <Icon name="x" style={{alignSelf: "center"}} size={20} color="white" />
      </TouchableOpacity>
      
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%"
        }}
      >
        
        <StatusBar hidden />
        <View style={{
            // flex: 0.2,
            alignSelf: "flex-end",
            backgroundColor: '#080808af',
            width: "100%",
            height: "10%",
            alignItems: "center",
            justifyContent: "center",}}>

          <TouchableOpacity
              style={{
                // flex: 0.2,
                // alignSelf: "flex-end",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                width: 60,
                height: 60,
                borderRadius: 35
                // marginBottom: 40,
                // marginLeft: 20,
              }}
              onPress={async () => {
                // if (cameraRef.current) {
                  let photo = await cameraRef.current.takePictureAsync();
                  setLastPhotoURI(photo.uri);
                  let image = {assets: [photo]}
                  navigation.navigate('picking', image)
                // }
              }}
            >
            <Text style={{ fontSize: 30, padding: 10, color: "white" }}></Text>
          </TouchableOpacity> 

          



        </View>
        {/* <TouchableOpacity
          style={{
            flex: 0.2,
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#666",
            marginBottom: 40,
            marginLeft: 20,
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={{ fontSize: 30, padding: 10, color: "white" }}>♻</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.2,
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#666",
            marginBottom: 40,
            marginLeft: 20,
          }}
          onPress={async () => {
            if (cameraRef.current) {
              let photo = await cameraRef.current.takePictureAsync();
              setLastPhotoURI(photo.uri);
            }
          }}
        >
          <Text style={{ fontSize: 30, padding: 10, color: "white" }}>📸</Text>
        </TouchableOpacity> */}
      </View>
    </Camera>
  );
}
