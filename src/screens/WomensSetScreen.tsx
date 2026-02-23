import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const COLUMN_WIDTH = (width - 48) / 2;

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  isNew: boolean;
  isFavorite: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Sowee dark set",
    price: "$950",
    image: require("../../assets/image/wo1.png"),
    isNew: true,
    isFavorite: true,
  },
  {
    id: "2",
    name: "Roufe white rose set",
    price: "$2200",
    image: require("../../assets/image/wo2.png"),
    isNew: false,
    isFavorite: false,
  },
  {
    id: "3",
    name: "Tiger wong set",
    price: "$1500",
    image: require("../../assets/image/wo3.png"),
    isNew: false,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Angie retro set",
    price: "$1200",
    image: require("../../assets/image/wo4.png"),
    isNew: false,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Sowee dark set",
    price: "$950",
    image: require("../../assets/image/wo5.png"),
    isNew: true,
    isFavorite: true,
  },
  {
    id: "6",
    name: "Roufe white rose set",
    price: "$2200",
    image: require("../../assets/image/wo6.png"),
    isNew: false,
    isFavorite: false,
  },
];

const WomensSetScreen: React.FC = () => {
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={{ width: COLUMN_WIDTH }} className="mb-6 mx-2">
      <View className="bg-[#F2F2F2] rounded-3xl overflow-hidden relative h-55 items-center justify-center shadow-sm">
        <Image
          source={item.image}
          className="w-full h-full"
          resizeMode="contain"
        />

        {item.isNew && (
          <View className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-sm">
            <Text className="text-[10px] font-bold text-black">New</Text>
          </View>
        )}

        <TouchableOpacity className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm">
          <Ionicons
            name={item.isFavorite ? "heart" : "heart-outline"}
            size={16}
            color={item.isFavorite ? "#FF4D4D" : "#CCC"}
          />
        </TouchableOpacity>
      </View>

      <View className="mt-3 px-1">
        <Text
          className="text-[#333] font-bold text-[15px] leading-5"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text className="text-gray-400 font-bold mt-1">{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <SafeAreaView className="flex-1">
        <View className="px-6 py-4 flex-row justify-between items-center">
          <TouchableOpacity className="flex-row items-center">
            <Feather name="chevron-left" size={28} color="black" />
            <Text className="text-black text-lg font-medium ml-1">Back</Text>
          </TouchableOpacity>
          <View className="flex-row gap-x-5">
            <TouchableOpacity>
              <Feather name="heart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-6 mt-4 mb-6">
          <Text className="text-[36px] font-bold text-[#333]">Women's Set</Text>
          <Text className="text-gray-400 text-[16px]">120 items found</Text>
        </View>

        <FlatList
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

      <View className="absolute bottom-0 w-full bg-white flex-row justify-around py-5 border-t border-gray-100 shadow-lg">
        <TouchableOpacity className="items-center">
          <Feather name="shopping-bag" size={26} color="black" />
          <Text className="text-[10px] mt-1 font-bold">Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={26} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={26} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={26} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WomensSetScreen;
