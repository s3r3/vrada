import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface ProductDetailTabsScreenProps {}

const ProductDetailTabsScreen: React.FC<ProductDetailTabsScreenProps> = () => {
  const [activeTab, setActiveTab] = useState('Detail');
  const [isFavorite, setIsFavorite] = useState(true);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Detail':
        return (
          <View className="mt-6">
            <Text className="text-gray-500 leading-6 text-[15px]">
              By using a lous jacket will increase trendy at all times and can work to warm the body in winter weather.
            </Text>
            <View className="mt-6 gap-y-2">
              <Text className="text-gray-600 text-[15px]">~ Regular fit</Text>
              <Text className="text-gray-600 text-[15px]">~ Premium fleece cotton</Text>
              <Text className="text-gray-600 text-[15px]">~ Length: 50 (Size BU 6)</Text>
            </View>
          </View>
        );
      case 'Shipping':
        return (
          <View className="mt-6">
            <Text className="text-gray-500 leading-6 text-[15px]">
              • Free delivery for orders over $200.{"\n"}
              • Standard shipping (3-5 business days).{"\n"}
              • Express shipping available at checkout.{"\n"}
              • Easy 30-day return policy.
            </Text>
          </View>
        );
      case 'Reviews':
        return (
          <View className="mt-6">
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
              <View>
                <Text className="font-bold text-[#333]">Sarah Jenkins</Text>
                <Text className="text-gray-400 text-xs">2 days ago</Text>
              </View>
            </View>
            <Text className="text-gray-500 italic">
              "The material is so soft and thick! Perfect for my morning coffee runs in autumn. Highly recommend!"
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <SafeAreaView className="flex-1">
        <View className="px-6 py-4 flex-row justify-between items-center">
          <TouchableOpacity className="flex-row items-center">
            <Feather name="chevron-left" size={28} color="black" />
            <Text className="text-black text-[16px] font-medium ml-2">Women's Trendy</Text>
          </TouchableOpacity>
          <View className="flex-row gap-x-5">
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Feather name={isFavorite ? "heart" : "heart"} size={24} color={isFavorite ? "red" : "black"} />
            </TouchableOpacity>
            <Feather name="shopping-cart" size={24} color="black" />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="px-6 mt-4">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-[#333] text-[24px] font-bold">Lous Brown Sweater</Text>
                <Text className="text-gray-500 text-[18px] font-semibold mt-1">$124.00</Text>
              </View>
              <View className="items-end">
                <View className="flex-row gap-x-1">
                  {[1, 2, 3].map((s) => (
                    <FontAwesome key={s} name="star" size={18} color="#4D4D4D" />
                  ))}
                  <FontAwesome name="star" size={18} color="#E0E0E0" />
                </View>
                <Text className="text-gray-400 text-xs mt-1">325 ratings</Text>
              </View>
            </View>
          </View>

          <View className="mt-6 relative px-6">
            <View className="rounded-[30px] overflow-hidden">
              <Image
                source={require('../../assets/image/id.png')}
                className="w-full h-100"
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              className="absolute bottom-6 right-10 bg-white p-3 rounded-full shadow-lg"
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>

          <View className="mt-8">
            <View className="flex-row border-b border-gray-100 px-6">
              {['Detail', 'Shipping', 'Reviews'].map((tab) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  className={`mr-8 pb-4 ${activeTab === tab ? 'border-b-2 border-black' : ''}`}
                >
                  <Text className={`text-[16px] font-bold ${activeTab === tab ? 'text-black' : 'text-gray-300'}`}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="px-6 pb-20">
              {renderTabContent()}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View className="absolute bottom-0 w-full bg-white/90 border-t border-gray-100 px-6 py-6 flex-row items-center justify-between">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-1 bg-white border border-gray-300 py-4 rounded-full mr-4"
        >
          <Text className="text-center text-black font-bold text-lg">Choose Size</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#333] w-16 h-16 rounded-full items-center justify-center shadow-lg"
        >
          <Feather name="shopping-bag" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailTabsScreen;