import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useStore } from '../../store/useStore';

const VerificationScreen: React.FC = () => {
  const code = useStore(s => s.otpCode);
  const setOtpDigit = useStore(s => s.setOtpDigit);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleInput = (text: string, index: number) => {
    const value = text.replace(/[^0-9]/g, '');

    setOtpDigit(index, value);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (value && index === 3) {
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const finalCode = code.join('');
    console.log('OTP:', finalCode);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <SafeAreaView className="flex-1 px-8 pt-5">

        <TouchableOpacity className="w-10 h-10 items-start justify-center">
          <Feather name="chevron-left" size={32} color="gray" />
        </TouchableOpacity>

        <View className="mt-10 mb-4">
          <Text className="text-gray-800 text-4xl font-bold leading-10">
            Enter the code{"\n"}to verify account
          </Text>
        </View>

        <Text className="text-gray-400 text-base leading-6 mb-16">
          We will have sent you an code to your phone{"\n"}
          <Text className="text-gray-500">+62931 223 44 224.</Text>
        </Text>

        {/* OTP */}
        <View className="flex-row justify-between mb-12 px-2">
          {code.map((digit, index) => (
            <View
              key={index}
              className={`w-16 h-16 rounded-full items-center justify-center ${
                digit ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            >
              <TextInput
                ref={(ref) => {
                  inputs.current[index] = ref;
                }}
                className={`text-2xl font-bold ${
                  digit ? 'text-white' : 'text-transparent'
                }`}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleInput(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectionColor="transparent"
                textAlign="center"
              />
            </View>
          ))}
        </View>

        <TouchableOpacity className="items-center mb-16">
          <Text className="text-gray-600 text-lg underline font-medium">
            Send a new code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSubmit}
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

export default VerificationScreen;
