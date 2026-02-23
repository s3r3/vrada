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

interface ProductDetailScreenColorProps {}

const ProductDetailScreenColor: React.FC<ProductDetailScreenColorProps> = () => {
  const [selectedColor, setSelectedColor] = useState('#C0A98E');
  const [selectedSize, setSelectedSize] = useState('L');
  const [isFavorite, setIsFavorite] = useState(false);

  const colors = ['#E0E0E0', '#FF6B6B', '#6B83FF', '#C0A98E', '#6BFF83', '#FFD96B'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    alert(`Added to cart: Size ${selectedSize}, Color ${selectedColor}`);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View className="relative h-112.5 w-full">
          <Image
            source={require('../../../assets/image/co.png')}
            className="w-full h-full"
            resizeMode="contain"
          />

          <SafeAreaView className="absolute top-0 w-full px-6 flex-row justify-between items-center">
            <TouchableOpacity className="bg-white/50 p-2 rounded-full">
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              className="bg-white/50 p-2 rounded-full"
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "red" : "black"}
              />
            </TouchableOpacity>
          </SafeAreaView>

          <View className="absolute bottom-6 w-full flex-row justify-center gap-x-2">
            <View className="w-2.5 h-2.5 bg-white rounded-full" />
            <View className="w-2 h-2 bg-white/50 rounded-full" />
            <View className="w-2 h-2 bg-white/50 rounded-full" />
          </View>
        </View>

        <View className="flex-1 bg-white -mt-8 rounded-t-[35px] px-6 pt-8 pb-10 shadow-xl">
          <View className="flex-row justify-between items-start">
            <View className="flex-1">
              <Text className="text-[#333] text-[26px] font-bold">Tu've Rib Sweater</Text>
              <View className="flex-row items-center mt-2">
                <View className="flex-row gap-x-1 mr-2">
                  {[1, 2, 3].map((s) => (
                    <FontAwesome key={s} name="star" size={18} color="#4D4D4D" />
                  ))}
                  <FontAwesome name="star" size={18} color="#E0E0E0" />
                </View>
                <Text className="text-gray-400 text-sm">211 ratings</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-gray-300 text-lg line-through">$125.99</Text>
              <Text className="text-black text-2xl font-bold">$95.99</Text>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-xs">Color</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row gap-x-4">
                {colors.map((color) => (
                  <TouchableOpacity
                    key={color}
                    onPress={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-12 h-12 rounded-full border-4 ${
                      selectedColor === color ? 'border-gray-300 shadow-lg' : 'border-transparent'
                    }`}
                  />
                ))}
              </View>
            </ScrollView>
          </View>

          <View className="mt-8">
            <Text className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-xs">Size</Text>
            <View className="flex-row justify-between items-center">
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  className={`w-14 h-14 items-center justify-center rounded-full ${
                    selectedSize === size ? 'bg-gray-100 shadow-sm' : 'bg-transparent'
                  }`}
                >
                  <Text className={`text-lg font-bold ${
                    selectedSize === size ? 'text-black' : 'text-gray-400'
                  }`}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            onPress={handleAddToCart}
            activeOpacity={0.8}
            className="mt-10 bg-[#4D4D4D] py-5 rounded-full flex-row justify-center items-center shadow-lg"
          >
            <Feather name="shopping-cart" size={20} color="white" />
            <Text className="text-white text-lg font-bold ml-3">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreenColor;