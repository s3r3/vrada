import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Data Dummy
const COLLECTIONS = [
  {
    id: "1",
    name: "Mexican Dress Set",
    price: "$1.200",
    image: require("../../../assets/image/dress1.png"),
    isNew: true,
  },
  {
    id: "2",
    name: "Fendi Max Fashion",
    price: "$2.250",
    image: require("../../../assets/image/dress2.png"),
    isNew: false,
  },
  {
    id: "3",
    name: "VENO seamless green dress",
    price: "$40",
    image: require("../../../assets/image/dress2.png"),
    isNew: false,
  },
  {
    id: "4",
    name: "VENO seamless green dress",
    price: "$40",
    image: require("../../../assets/image/dress2.png"),
    isNew: false,
  }
];

const HOT_TRENDS = [
  {
    id: "1",
    name: "VENO seamless green dress",
    price: "$40",
    image: require("../../../assets/image/trend1.png"),
  },
  {
    id: "2",
    name: "VENO seamless green dress",
    price: "$40",
    image: require("../../../assets/image/trend1.png"),
  },
];

interface CollectionItemProps {
  item: {
    id: string;
    name: string;
    price: string;
    image: any;
    isNew: boolean;
  };
}

interface TrendItemProps {
  item: {
    id: string;
    name: string;
    price: string;
    image: any;
  };
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => (
  <View className="mr-6 w-45">
    <View className="bg-[#F8F8F8] rounded-[20px] overflow-hidden mb-3">
      <Image
        source={item.image}
        className="w-full h-55"
        resizeMode="cover"
      />
      <TouchableOpacity className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full">
        <Ionicons
          name="heart"
          size={16}
          color={item.id === "1" ? "red" : "#ccc"}
        />
      </TouchableOpacity>
      {item.isNew && (
        <View className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full">
          <Text className="text-[10px] font-bold">New</Text>
        </View>
      )}
    </View>
    <Text className="text-[#333] font-semibold text-[16px]">
      {item.name}
    </Text>
    <Text className="text-gray-400 font-bold">{item.price}</Text>
  </View>
);

const TrendItem: React.FC<TrendItemProps> = ({ item }) => (
  <View
    key={item.id}
    className="flex-row items-center bg-[#F8F8F8] p-4 rounded-[20px] mb-4"
  >
    <Image
      source={item.image}
      className="w-16 h-16 rounded-lg bg-gray-200"
    />
    <View className="ml-4 flex-1">
      <Text className="text-[#333] font-semibold">{item.name}</Text>
      <Text className="text-gray-400 font-bold">{item.price}</Text>
    </View>
    <TouchableOpacity className="bg-white p-2 rounded-full border border-gray-100">
      <Feather name="shopping-bag" size={20} color="black" />
    </TouchableOpacity>
  </View>
);

const HomeScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* --- PROMO HEADER --- */}
        <ImageBackground
          source={require("../../../assets/image/promo.png")}
          className="h-112.5 w-full"
          resizeMode="cover"
        >
          <View className="absolute inset-0 bg-black/20" />
          <SafeAreaView className="flex-1 px-6 justify-between py-6">
            <View className="flex-row justify-end gap-x-4">
              <TouchableOpacity className="bg-white/20 p-2 rounded-full">
                <Feather name="heart" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-white/20 p-2 rounded-full">
                <Feather name="shopping-cart" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View className="mb-10">
              <Text className="text-white text-lg font-medium">
                Summer Collection
              </Text>
              <View className="w-10 h-0.5 bg-white my-2" />
              <Text className="text-white text-[64px] font-bold leading-17.5">
                35% OFF
              </Text>
              <Text className="text-white text-[22px] font-light mb-6">
                For selected summer style
              </Text>

              <TouchableOpacity className="bg-white w-32 py-3 rounded-full items-center">
                <Text className="text-black font-bold">Shop now</Text>
              </TouchableOpacity>
            </View>

            {/* Pagination Dots */}
            <View className="flex-row justify-center gap-x-2 mb-4">
              <View className="w-2.5 h-2.5 bg-white rounded-full" />
              <View className="w-2 h-2 bg-white/40 rounded-full" />
              <View className="w-2 h-2 bg-white/40 rounded-full" />
              <View className="w-2 h-2 bg-white/40 rounded-full" />
            </View>
          </SafeAreaView>
        </ImageBackground>

        {/* --- FASHION COLLECTION --- */}
        <View className="px-6 py-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-[24px] font-bold text-[#333]">
              Fashion Collection
            </Text>
            <TouchableOpacity>
              <Text className="text-gray-400">Detail</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={COLLECTIONS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CollectionItem item={item} />}
          />
        </View>

        {/* --- HOT TRENDS --- */}
        <View className="px-6 mb-24">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-[24px] font-bold text-[#333]">Hot Trens</Text>
            <TouchableOpacity>
              <Text className="text-gray-400">Detail</Text>
            </TouchableOpacity>
          </View>

          {HOT_TRENDS.map((item) => (
            <TrendItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      {/* --- CUSTOM BOTTOM TAB BAR --- */}
      <View className="absolute bottom-0 w-full bg-white flex-row justify-around py-5 border-t border-gray-100">
        <TouchableOpacity className="items-center">
          <Feather name="shopping-bag" size={24} color="black" />
          <Text className="text-[10px] mt-1 font-bold">Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;