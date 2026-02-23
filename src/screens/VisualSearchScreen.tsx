import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import {
  Camera,
  useCameraDevices,
  CameraDevice,
} from "react-native-vision-camera";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  VisualSearch: undefined;
  WomensSet: undefined;
};

type VisualSearchScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VisualSearch"
>;

type Props = {
  navigation: VisualSearchScreenNavigationProp;
};

const VisualSearchScreen: React.FC<Props> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const camera = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device: CameraDevice | undefined = devices.find(
    (d) => d.position === "back",
  );

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    if (camera.current) {
      setIsScanning(true);
      const photo = await camera.current.takePhoto();
      console.log("Foto ditangkap:", photo.path);

      setTimeout(() => {
        setIsScanning(false);
        navigation.navigate("WomensSet");
      }, 2000);
    }
  };

  if (!hasPermission || !device) {
    return <View style={{ flex: 1, backgroundColor: "black" }} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />

      {/* UI kamu tetap sama */}
    </View>
  );
};

export default VisualSearchScreen;
