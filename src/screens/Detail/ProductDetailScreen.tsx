import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";

interface ProductDetailScreenProps {
  // Add any props if needed
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image Section */}
        <View className="bg-gray-200 h-125 w-full items-center justify-center relative">
          <SafeAreaView className="absolute top-0 w-full px-6 flex-row justify-between items-center z-10">
            <TouchableOpacity className="p-2">
              <Feather name="chevron-left" size={30} color="black" />
            </TouchableOpacity>

            <View className="flex-row gap-x-4">
              <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                <Ionicons
                  name={isFavorite ? "heart" : "heart-outline"}
                  size={28}
                  color={isFavorite ? "#FF4D4D" : "black"}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="shopping-cart" size={26} color="black" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <Image
            source={require("../../../assets/image/celine.png")}
            className="w-[85%] h-[70%]"
            resizeMode="contain"
          />
        </View>

        {/* Product Info Section */}
        <View className="px-6 pt-8">
          <Text className="text-gray-500 text-base font-medium mb-2">
            Woman's Bag
          </Text>
          <Text className="text-gray-800 text-3xl font-bold mb-4">
            Celine Leather Bag
          </Text>
          <Text className="text-gray-800 text-2xl font-bold mb-10">$250</Text>

          {/* Weekly Sale Section */}
          <View className="mb-10">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-xl font-bold text-gray-800">
                Weekly Sale
              </Text>
              <TouchableOpacity>
                <Text className="text-gray-400 font-medium">Detail</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row gap-x-4">
              {/* Collection Card 1 */}
              <TouchableOpacity className="flex-1 h-32 rounded-2xl overflow-hidden relative">
                <Image
                  source={require("../../../assets/image/collection1.png")}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/30 p-4 justify-end">
                  <Text className="text-white font-bold text-xs">
                    Modern Woman{"\n"}Collection
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Collection Card 2 */}
              <TouchableOpacity className="flex-1 h-32 rounded-2xl overflow-hidden relative">
                <Image
                  source={require("../../../assets/image/collection2.png")}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/30 p-4 justify-end">
                  <Text className="text-white font-bold text-xs">
                    Best Brands{"\n"}Collection
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Add to Cart Button */}
      <View className="absolute bottom-10 right-6">
        <TouchableOpacity
          activeOpacity={0.9}
          className="bg-black px-10 py-5 rounded-full shadow-xl flex-row items-center"
        >
          <Text className="text-white text-lg font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 w-full bg-white flex-row justify-around py-5 border-t border-gray-100">
        <TouchableOpacity className="items-center">
          <Feather name="shopping-bag" size={24} color="black" />
          <Text className="text-[10px] mt-1 font-bold">Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={24} color="gray-400" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="gray-400" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={24} color="gray-400" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;