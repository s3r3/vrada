import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface AddToCartModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCheckout: () => void;
  onExplore: () => void;
}

const { width } = Dimensions.get('window');

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  isVisible,
  onClose,
  onCheckout,
  onExplore,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      {/* Background Overlay */}
      <View style={styles.overlay}>
        
        {/* Modal Container */}
        <View style={styles.modalContainer}>
          
          {/* Header Image with Close Button */}
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500' }} 
              style={styles.headerImage}
              resizeMode="cover"
            />
            <TouchableOpacity 
              onPress={onClose}
              style={styles.closeButton}
              className="bg-white/80 p-1 rounded-full"
            >
              <Feather name="x" size={20} color="black" />
            </TouchableOpacity>
          </View>

          {/* Content Section */}
          <View className="px-8 py-10 items-center">
            <Text className="text-[#333] text-2xl font-bold text-center leading-9">
              Congratulations! you have added an item to cart
            </Text>

            {/* Action Buttons */}
            <View className="w-full mt-10 gap-y-4">
              <TouchableOpacity 
                onPress={onCheckout}
                activeOpacity={0.8}
                className="bg-black py-5 rounded-full flex-row justify-center items-center"
              >
                <Text className="text-white text-lg font-bold mr-2">Checkout Now</Text>
                <Feather name="arrow-right" size={20} color="white" />
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={onExplore}
                activeOpacity={0.7}
                className="bg-gray-300 py-5 rounded-full"
              >
                <Text className="text-white text-lg font-bold text-center">Go Explore</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.85,
    backgroundColor: 'white',
    borderRadius: 35,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 180,
    width: '100%',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
  },
});

export default AddToCartModal;