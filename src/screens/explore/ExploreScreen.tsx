import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";

const HeaderNav = () => (
  <SafeAreaView className="bg-white z-10">
    <View className="flex-row justify-between items-center px-6 py-4">
      <View className="w-10" /> {/* Spacer */}
      <Text className="text-[24px] font-bold text-[#333]">Explore</Text>
      <View className="flex-row gap-x-4">
        <TouchableOpacity>
          <Ionicons name="heart" size={26} color="#FF4D4D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

const SummerCollectionSection = () => (
  <ImageBackground
    source={require("../../../assets/image/explore1.png")}
    className="h-100 max-w-max justify-center px-8"
    resizeMode="cover"
  >
    <View className="max-w-62.5">
      <Text className="text-white text-[48px] font-bold leading-[52px]">
        Summer{"\n"}Collection
      </Text>
      <Text className="text-white text-[16px] mt-4 mb-6 leading-6">
        Stuff your spring fashion for $120
      </Text>

      <TouchableOpacity
        activeOpacity={0.9}
        className="bg-white flex-row items-center justify-between px-6 py-4 rounded-full w-45"
      >
        <Text className="text-black font-bold text-[16px]">Shop now</Text>
        <Feather name="arrow-right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

const LocalBrandsSection = () => (
  <ImageBackground
    source={require("../../../assets/image/explore2.png")}
    className="h-100 max-w-max justify-center px-8"
    resizeMode="cover"
  >
    <View className="max-w-90">
      <Text className="text-white text-[48px] font-bold leading-[52px]">
        Best of{"\n"}Local Brands
      </Text>
      <Text className="text-white text-[16px] mt-4 leading-6">
        120+{"\n"}Local Brands{"\n"}for you
      </Text>
    </View>
    <TouchableOpacity
      activeOpacity={0.9}
      className="bg-white flex-row items-center justify-between px-6 py-4 rounded-full w-45"
    >
      <Text className="text-black font-bold text-[16px]">Shop now</Text>
      <Feather name="arrow-right" size={20} color="black" />
    </TouchableOpacity>
  </ImageBackground>
);

const BottomTabBar = () => (
  <View className="absolute bottom-0 w-full bg-white flex-row justify-around py-5 border-t border-gray-100 shadow-lg">
    <TouchableOpacity className="items-center">
      <Feather name="shopping-bag" size={26} color="#ccc" />
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      <Feather name="search" size={26} color="black" />
      <Text className="text-[10px] mt-1 font-bold">Explore</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      <Feather name="bell" size={26} color="#ccc" />
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      <Feather name="user" size={26} color="#ccc" />
    </TouchableOpacity>
  </View>
);

const ExploreScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <HeaderNav />

      <ScrollView showsVerticalScrollIndicator={false}>
        <SummerCollectionSection />
        <LocalBrandsSection />

        {/* Padding bawah agar tidak tertutup Tab Bar */}
        <View className="h-24" />
      </ScrollView>

      <BottomTabBar />
    </View>
  );
};

export default ExploreScreen;