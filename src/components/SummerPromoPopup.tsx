import React from "react";
import {
  View,
  Text,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

interface SummerPromoPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const SummerPromoPopup: React.FC<SummerPromoPopupProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      {/* Overlay Background */}
      <Pressable
        onPress={onClose}
        style={styles.overlay}
      >
        {/* Modal Container */}
        <View style={styles.modalContainer}>
          <ImageBackground
            source={require("../../assets/image/popup_summer.png")}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            {/* Close Button (X) */}
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>

            {/* Main Promo Text */}
            <View style={styles.promoTextContainer}>
              <Text style={styles.promoTitle}>
                Summer{"\n"}Collection
              </Text>
              <Text style={styles.promoSubtitle}>
                35% Off selected brands
              </Text>
            </View>
          </ImageBackground>

          {/* Bottom Action Section */}
          <View style={styles.actionSection}>
            <TouchableOpacity
              onPress={() => {
                console.log("Shop Now Pressed");
                onClose();
              }}
              activeOpacity={0.9}
              style={styles.shopNowButton}
            >
              <Text style={styles.shopNowText}>Shop now</Text>
              <Feather name="arrow-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 40,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageBackground: {
    height: 350, // Adjust as needed
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 24,
  },
  closeButton: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  promoTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  promoTitle: {
    color: "white",
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 60,
  },
  promoSubtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 16,
    textAlign: "center",
  },
  actionSection: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    backgroundColor: "white",
  },
  shopNowButton: {
    backgroundColor: "black",
    width: "100%",
    paddingVertical: 20,
    borderRadius: 9999,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  shopNowText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SummerPromoPopup;