import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

interface ForgotPasswordScreenProps {
  // Add any props if needed
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 px-8 pt-5">
        {/* Back Button */}
        <TouchableOpacity className="w-10 h-10 items-start justify-center">
          <Feather name="chevron-left" size={32} color="gray-800" />
        </TouchableOpacity>

        {/* Header Section */}
        <View className="mt-10 mb-6">
          <Text className="text-gray-800 text-4xl font-bold leading-5">
            Forgot your{"\n"}Password?
          </Text>
        </View>

        {/* Description Text */}
        <Text className="text-gray-500 text-base leading-6 mb-12">
          If you need help resetting your password, we can assist you by sending a link to reset your password{" "}
          <Text className="underline">via email</Text>.
        </Text>

        {/* Input Field with Icon */}
        <View className="flex-row items-center border-b border-gray-200 pb-2 mb-20">
          <View className="mr-4">
            <MaterialCommunityIcons name="cellphone" size={30} color="gray-600" />
          </View>
          <TextInput
            placeholder="Your Number Phone"
            placeholderTextColor="gray-400"
            className="flex-1 text-lg text-black py-2"
            keyboardType="phone-pad"
          />
        </View>

        {/* Send Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-gray-600 w-full py-5 rounded-full shadow-lg shadow-black/40"
        >
          <Text className="text-white text-center text-xl font-bold">
            Send
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPasswordScreen;