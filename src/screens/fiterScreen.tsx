import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Slider from "@react-native-community/slider"; // Perlu install: npm install @react-native-community/slider

const FilterScreen = () => {
  // --- STATE UNTUK LOGIKA FRONTEND ---
  const [priceRange, setPriceRange] = useState(2500);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedBrands, setSelectedBrands] = useState(["ZARA", "Uniqlo"]);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const brands = ["Hermes", "ZARA", "Chanel", "Uniqlo", "Burberry"];

  // Fungsi toggle brand (Frontend Logic)
  const toggleBrand = (brandName: string) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1">
        {/* --- HEADER --- */}
        <View className="px-6 py-4 flex-row justify-between items-center">
          <Text className="text-[32px] font-bold text-[#333]">Filter</Text>
          <TouchableOpacity>
            <Feather name="x" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-6">
          {/* --- SETTING PRICE --- */}
          <View className="mt-8">
            <Text className="text-gray-500 font-bold mb-6">Setting price</Text>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-400 font-medium">$25</Text>
              <Text className="text-gray-400 font-medium">$5000</Text>
            </View>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={25}
              maximumValue={5000}
              value={priceRange}
              onValueChange={(val: number) => setPriceRange(val)}
              minimumTrackTintColor="#4D4D4D"
              maximumTrackTintColor="#E0E0E0"
              thumbTintColor="#FFFFFF"
            />
            <Text className="text-center font-bold text-[#333] mt-2">
              Selected: ${Math.floor(priceRange)}
            </Text>
          </View>

          {/* --- SIZE SELECTOR --- */}
          <View className="mt-10">
            <Text className="text-gray-500 font-bold mb-6">Size</Text>
            <View className="flex-row justify-between">
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  className={`w-14 h-14 rounded-full items-center justify-center ${
                    selectedSize === size ? "bg-[#4D4D4D]" : "bg-transparent"
                  }`}
                >
                  <Text
                    className={`text-lg font-bold ${
                      selectedSize === size ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* --- ALL BRANDS LIST --- */}
          <View className="mt-10 mb-20">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-gray-500 font-bold">All Brands</Text>
              <TouchableOpacity onPress={() => setSelectedBrands(brands)}>
                <Text className="text-gray-400 font-medium">Select All</Text>
              </TouchableOpacity>
            </View>

            {brands.map((brand) => (
              <TouchableOpacity
                key={brand}
                onPress={() => toggleBrand(brand)}
                className="py-5 border-b border-gray-100 flex-row justify-between items-center"
              >
                <Text
                  className={`text-lg font-medium ${
                    selectedBrands.includes(brand)
                      ? "text-[#333]"
                      : "text-gray-300"
                  }`}
                >
                  {brand}
                </Text>
                {selectedBrands.includes(brand) && (
                  <Feather name="check" size={20} color="#333" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* --- BOTTOM BUTTONS --- */}
        <View className="flex-row px-6 py-8 border-t border-gray-50 bg-white">
          <TouchableOpacity
            onPress={() => {
              setSelectedSize("M");
              setSelectedBrands([]);
              setPriceRange(25);
            }}
            className="flex-1 py-4 rounded-full border border-[#333] mr-4"
          >
            <Text className="text-center font-bold text-lg">Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 py-4 rounded-full bg-[#4D4D4D]">
            <Text className="text-center font-bold text-white text-lg">
              Select
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FilterScreen;
