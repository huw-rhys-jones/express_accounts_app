import { Camera } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cam() {
  const [status, requestPermission] = Camera.useCameraPermissions();
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
    <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
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
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
