import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Types
interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  isNew: boolean;
  isFavorite: boolean;
}

interface Category {
  name: string;
  isActive: boolean;
}

// Data
const CATEGORIES: string[] = ["All", "Dresses", "Jaskets", "Long Pants"];

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Moi Yellow Long Pants",
    price: "$35",
    image: require("../../../assets/image/sum2.png"),
    isNew: true,
    isFavorite: true,
  },
  {
    id: "2",
    name: "Edels Black Suit",
    price: "$120",
    image: require("../../../assets/image/sum3.png"),
    isNew: false,
    isFavorite: false,
  },
  {
    id: "3",
    name: "Luna Floral Dress",
    price: "$45",
    image: require("../../../assets/image/sum2.png"),
    isNew: true,
    isFavorite: false,
  },
];

// Components
const ProductItem: React.FC<{ item: Product }> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  return (
    <View style={{ width: width * 0.42 }} className="mb-10 ">
      <View className="bg-gray-100 rounded-[30px] overflow-hidden mb-3 relative h-55 items-center justify-center ">
        <Image
          source={item.image}
          className="w-full h-full"
          resizeMode="contain"
        />

        {/* Badge New */}
        {item.isNew && (
          <View className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
            <Text className="text-[10px] font-bold">New</Text>
          </View>
        )}

        {/* Favorite Button */}
        <TouchableOpacity
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm"
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={16}
            color={isFavorite ? "#FF4D4D" : "#CCC"}
          />
        </TouchableOpacity>
      </View>

      <Text className="text-gray-800 font-bold text-[16px] leading-5">
        {item.name}
      </Text>
      <Text className="text-gray-400 font-bold mt-1">{item.price}</Text>
    </View>
  );
};

const CategoryButton: React.FC<{
  category: string;
  isActive: boolean;
  onPress: () => void;
}> = ({ category, isActive, onPress }) => (
  <TouchableOpacity
    className={`mr-3 px-8 py-3 rounded-xl ${
      isActive ? "bg-gray-500" : "bg-gray-200"
    }`}
    onPress={onPress}
  >
    <Text
      className={`font-semibold ${isActive ? "text-white" : "text-gray-500"}`}
    >
      {category}
    </Text>
  </TouchableOpacity>
);

const ProductListScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <View className="flex-1 bg-white  ">
      <StatusBar style="light" />

      {/* Header Banner */}
      <ImageBackground
        source={require("../../../assets/image/sum1.png")}
        className="h-75 w-full"
        resizeMode="cover"
      >
        <View className="absolute inset-0 bg-black/30" />
        <SafeAreaView className="px-6 py-4">
          <View className="flex-row justify-between items-center px-2">
            <TouchableOpacity className="flex-row items-center">
              <Feather name="chevron-left" size={28} color="white" />
              <Text className="text-white text-lg font-medium ml-2">Back</Text>
            </TouchableOpacity>
            <View className="flex-row gap-x-4">
              <Feather name="heart" size={24} color="white" />
              <Feather name="shopping-cart" size={24} color="white" />
            </View>
          </View>

          <View className="mt-10 px-2">
            <Text className="text-white text-[32px] font-bold">
              Summer Collection
            </Text>
            <Text className="text-white text-[16px] mt-2 opacity-90">
              complete collection of{"\n"}various brands
            </Text>

            {/* Indicator Dots */}
            <View className="flex-row mt-10 gap-x-2">
              <View className="w-2.5 h-2.5 bg-white rounded-full" />
              <View className="w-2 h-2 bg-white/50 rounded-full" />
              <View className="w-2 h-2 bg-white/50 rounded-full" />
              <View className="w-2 h-2 bg-white/50 rounded-full" />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

      {/* Content Section */}
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="px-6 py-6 ">
          {/* Title & Filter Icon */}
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-[24px] font-bold text-gray-800">
              Summer Collection
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="filter-variant"
                size={28}
                color="#666"
              />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-400 mb-6">9932 items found</Text>

          {/* Categories Filter */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-8"
          >
            {CATEGORIES.map((cat, index) => (
              <CategoryButton
                key={index}
                category={cat}
                isActive={activeCategory === cat}
                onPress={() => setActiveCategory(cat)}
              />
            ))}
          </ScrollView>

          {/* Product Grid */}
          <View className="">
            {/* ... other content ... */}

            <FlatList
              data={PRODUCTS}
              renderItem={({ item }) => <ProductItem item={item} />}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginBottom: 20, // Jarak antar baris
              }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
                paddingHorizontal: 6, // Padding horizontal jika perlu
              }}
              // Hapus className="gap-10" karena tidak bekerja dengan FlatList
            />
          </View>
        </View>

        {/* Spacer for Bottom Tab */}
        <View className="h-20" />
      </ScrollView>

      {/* Bottom Tab Bar */}
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

export default ProductListScreen;
