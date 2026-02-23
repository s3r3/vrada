import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

interface LoginScreenProps {
  // Add any props if needed
}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <View className="flex-1 bg-amber-50">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 px-8 pt-20">
        {/* Header Title */}
        <View className="mb-10">
          <Text className="text-gray-800 text-4xl font-bold leading-10">
            Log in into{"\n"}your account
          </Text>
        </View>

        {/* Form Container */}
        <View className="bg-white rounded-3xl p-6 shadow-sm mb-4">
          <View className="mb-6">
            <TextInput
              placeholder="Email"
              placeholderTextColor="gray-400"
              className="border-b border-gray-100 py-4 text-lg text-black"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray-400"
              className="py-4 text-lg text-black"
              secureTextEntry
            />
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="items-end mb-10">
          <Text className="text-gray-500 font-medium">Forgot?</Text>
        </TouchableOpacity>

        {/* Log In Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-gray-600 w-full py-5 rounded-full shadow-lg shadow-black/30 mb-10"
        >
          <Text className="text-white text-center text-xl font-bold">
            Log in
          </Text>
        </TouchableOpacity>

        {/* Divider Text */}
        <View className="items-center mb-10">
          <Text className="text-gray-500 text-base">
            Or sign up with another account?
          </Text>
        </View>

        {/* Social Login Buttons */}
        <View className="gap-y-4">
          <View className="flex-row gap-x-4">
            {/* Facebook */}
            <TouchableOpacity className="flex-1 bg-blue-600 h-16 rounded-full items-center justify-center">
              <FontAwesome name="facebook" size={24} color="white" />
            </TouchableOpacity>

            {/* Twitter */}
            <TouchableOpacity className="flex-1 bg-blue-400 h-16 rounded-full items-center justify-center">
              <FontAwesome name="twitter" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Google */}
          <TouchableOpacity className="w-full bg-red-300 h-16 rounded-full items-center justify-center">
            <FontAwesome name="google" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;