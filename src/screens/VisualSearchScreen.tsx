import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { RootStackParamList } from "../../App";

type Props = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "VisualSearch"
  >;
};

const VisualSearchScreen: React.FC<Props> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const camera = useRef<Camera>(null);
  const device = useCameraDevice("back");
  const isFocused = useIsFocused();

  const scanAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Camera.requestCameraPermission().then((status) =>
      setHasPermission(status === "granted")
    );
  }, []);

  useEffect(() => {
    if (isDetecting) {
      Animated.loop(
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      scanAnim.setValue(0);
    }
  }, [isDetecting]);

  const takePhoto = async () => {
    if (!camera.current) return;
    const photo = await camera.current.takePhoto();
    setPreviewImage(photo.path);
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPreviewImage(result.assets[0].uri);
    }
  };

  const startDetection = () => {
    setIsDetecting(true);

    setTimeout(() => {
      setIsDetecting(false);
      navigation.navigate("WomensSet");
    }, 2000);
  };

  const goBackToCamera = () => {
    setPreviewImage(null);
  };

  if (!hasPermission || !device) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {/* CAMERA OR PREVIEW */}
      {!previewImage ? (
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isFocused}
          photo
        />
      ) : (
        <Image
          source={{ uri: previewImage }}
          style={StyleSheet.absoluteFill}
        />
      )}

      {/* Overlay */}
      <View style={styles.overlay} />

      {/* Scan Box */}
      <View style={styles.scanBox}>
        {isDetecting && (
          <Animated.View
            style={[
              styles.scanLine,
              {
                transform: [
                  {
                    translateY: scanAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 220],
                    }),
                  },
                ],
              },
            ]}
          />
        )}
      </View>

      {/* Header */}
      <SafeAreaView style={styles.header}>
        {previewImage && (
          <TouchableOpacity onPress={goBackToCamera}>
            <Feather name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>Search</Text>
        <View style={{ width: 28 }} />
      </SafeAreaView>

      {/* Bottom Controls */}
      {!previewImage ? (
        <SafeAreaView style={styles.bottomContainer}>
          <TouchableOpacity onPress={openGallery}>
            <Feather name="image" size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.captureButton}
            onPress={takePhoto}
          >
            <Feather name="camera" size={26} color="black" />
          </TouchableOpacity>

          <View style={{ width: 28 }} />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={startDetection}
          >
            <Feather name="search" size={22} color="black" />
            <Text style={{ marginLeft: 8, fontWeight: "600" }}>
              Search Outfit
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </View>
  );
};

export default VisualSearchScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  scanBox: {
    position: "absolute",
    top: "28%",
    alignSelf: "center",
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    overflow: "hidden",
  },
  scanLine: {
    width: "100%",
    height: 2,
    backgroundColor: "white",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
});