import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ImageSourcePropType,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import BottomTabBar from "../components/bottomTabBar";

// --- TYPES ---
interface WishlistCollection {
  id: string;
  title: string;
  itemCount: number;
  images: ImageSourcePropType[];
}

// --- MOCK DATA ---
const WISHLIST_DATA: WishlistCollection[] = [
  {
    id: "1",
    title: "Enjoy the day",
    itemCount: 50,
    images: [
      {
        uri: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400",
      },
      {
        uri: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400",
      },
      {
        uri: "https://images.unsplash.com/photo-1529133039941-e856b3629143?w=400",
      },
    ],
  },
  {
    id: "2",
    title: "Outfit is Must?",
    itemCount: 67,
    images: [
      {
        uri: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      },
      {
        uri: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
      },
      {
        uri: "https://images.unsplash.com/photo-1583503177848-6ec3706059d4?w=400",
      },
    ],
  },
  {
    id: "3",
    title: "Summer Vibes",
    itemCount: 24,
    images: [
      {
        uri: "https://images.unsplash.com/photo-1523381235312-3a1647fa991f?w=400",
      },
      {
        uri: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
      },
      {
        uri: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400",
      },
    ],
  },
];

const WishlistScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"All" | "OnBoard">("OnBoard");

  // --- RENDER COMPONENTS ---

  const renderCollectionCard = ({ item }: { item: WishlistCollection }) => (
    <TouchableOpacity activeOpacity={0.7} className="mb-8 px-6">
      {/* Image Grid Layout */}
      <View className="flex-row h-52 w-full rounded-3xl overflow-hidden">
        {/* Main Big Image */}
        <View className="flex-1 mr-1">
          <Image
            source={item.images[0]}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Right Side Two Small Images */}
        <View className="flex-1 ml-1">
          <View className="flex-1 mb-1">
            <Image
              source={item.images[1]}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          <View className="flex-1 mt-1">
            <Image
              source={item.images[2]}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Info Section */}
      <View className="flex-row justify-between items-center mt-4">
        <View>
          <Text className="text-[#333] text-2xl font-bold">{item.title}</Text>
          <Text className="text-gray-400 text-sm mt-1">
            {item.itemCount} items
          </Text>
        </View>
        <Feather name="chevron-right" size={24} color="#CCC" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="px-6 py-4 flex-row justify-between items-center">
          <TouchableOpacity>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Wishlist</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="filter-variant"
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>

        {/* Custom Tabs */}

        {/* Scrollable List */}
        <FlatList
          data={WISHLIST_DATA}
          renderItem={renderCollectionCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        />

        <BottomTabBar active="shop" />
      </SafeAreaView>
    </View>
  );
};

export default WishlistScreen;
