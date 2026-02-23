import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

interface DressDetailProps {}

const DressDetail: React.FC<DressDetailProps> = () => {
  const [selectedColor, setSelectedColor] = useState("Gold");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* --- HEADER IMAGE SECTION --- */}
        <View className="relative h-137.5 w-full bg-[#f9f9f9]">
          <SafeAreaView className="absolute top-0 w-full px-6 flex-row justify-between items-center z-10">
            <TouchableOpacity className="flex-row items-center">
              <Feather name="chevron-left" size={28} color="black" />
              <Text className="text-black text-lg font-medium ml-1">Back</Text>
            </TouchableOpacity>

            <View className="flex-row gap-x-5">
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={26} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="relative">
                  <Feather name="shopping-cart" size={24} color="black" />
                  <View className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border border-white" />
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <Image
            source={require("../../assets/image/gold.png")}
            className="w-full h-full"
            resizeMode="contain"
          />

          {/* Image Pagination Dots */}
          <View className="absolute bottom-10 w-full flex-row justify-center gap-x-2">
            <View className="w-2.5 h-2.5 bg-white rounded-full shadow-sm" />
            <View className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
            <View className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          </View>
        </View>

        {/* --- CONTENT SECTION --- */}
        <View className="flex-1 bg-white -mt-10 rounded-t-[40px] px-8 pt-10 pb-20 items-center shadow-lg">
          <Text className="text-[#333] text-[28px] font-bold text-center">
            Gold Cotton Dress
          </Text>

          <Text className="text-gray-500 text-[22px] font-semibold mt-2 mb-4">
            $260.99
          </Text>

          {/* Star Rating */}
          <View className="flex-row gap-x-1 mb-8">
            {[1, 2, 3].map((s) => (
              <FontAwesome key={s} name="star" size={24} color="#4D4D4D" />
            ))}
            <FontAwesome name="star" size={24} color="#E0E0E0" />
          </View>

          {/* Dropdown / Selectors */}
          <View className="flex-row w-full gap-x-4 mb-8">
            {/* Color Selector */}
            <TouchableOpacity className="flex-1 flex-row items-center justify-between bg-white border border-gray-100 py-4 px-6 rounded-full shadow-sm">
              <Text className="text-lg font-medium text-gray-700">Color</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>

            {/* Size Selector */}
            <TouchableOpacity className="flex-1 flex-row items-center justify-between bg-white border border-gray-100 py-4 px-6 rounded-full shadow-sm">
              <Text className="text-lg font-medium text-gray-700">Size</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Main Action Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-[#4D4D4D] w-full py-5 rounded-full shadow-xl shadow-black/40"
          >
            <Text className="text-white text-center text-xl font-bold">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DressDetail;