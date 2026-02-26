import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

// --- TYPES ---
interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

const CartScreen: React.FC = () => {
  // --- STATE DATA KERANJANG ---
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Vrada Leather Jacket',
      price: 95.22,
      size: 'L',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Vrada Sweetie Shirt',
      price: 50.99,
      size: 'M',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400',
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState('summersale');

  // --- LOGIC FUNCTIONS ---
  
  const updateQuantity = (id: string, action: 'add' | 'remove') => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = action === 'add' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // --- RENDER COMPONENT ---

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row px-6 mb-6 items-center">
      {/* Product Image */}
      <View className="bg-gray-100 rounded-2xl overflow-hidden">
        <Image source={{ uri: item.image }} className="w-24 h-24" resizeMode="cover" />
      </View>

      {/* Product Info */}
      <View className="flex-1 ml-4">
        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-lg font-bold text-[#333]">{item.name}</Text>
            <Text className="text-gray-500 font-semibold mt-1">${item.price}</Text>
            <Text className="text-gray-400 text-xs mt-1">Size: {item.size}  Color: {item.color}</Text>
          </View>
          
          {/* Delete Button (Trash Icon) */}
          <TouchableOpacity onPress={() => removeItem(item.id)} className="p-2">
            <Feather name="trash-2" size={20} color="#FF6B6B" />
          </TouchableOpacity>
        </View>

        {/* Quantity Controls */}
        <View className="flex-row items-center bg-gray-200 self-start rounded-full px-3 py-1 mt-3">
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'remove')} className="p-1">
            <Feather name="minus" size={16} color="white" />
          </TouchableOpacity>
          <Text className="mx-4 font-bold text-gray-700">{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'add')} className="p-1">
            <Feather name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
          <Text className="text-2xl font-bold text-[#333]">My Cart</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="filter-variant" size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/* Cart List */}
        <View className="flex-1 mt-4">
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center mt-20">
                <Feather name="shopping-cart" size={60} color="#EEE" />
                <Text className="text-gray-400 mt-4">Your cart is empty</Text>
              </View>
            }
          />
        </View>

        {/* Footer Section */}
        <View className="bg-gray-50 px-6 pt-8 pb-10 rounded-t-[40px]">
          {/* Promo Code */}
          <View className="flex-row justify-between items-center border-b border-gray-200 pb-4 mb-6">
            <Text className="text-gray-400 text-lg">Code Promo</Text>
            <View className="flex-row items-center">
              <Text className="text-black font-bold mr-2">{promoCode}</Text>
              <TouchableOpacity onPress={() => setPromoCode('')}>
                <Feather name="x-circle" size={18} color="#CCC" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Total Payout */}
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-gray-400 text-lg">Total Payout</Text>
            <Text className="text-2xl font-bold text-[#333]">${calculateTotal()}</Text>
          </View>

          {/* Checkout Button */}
          <TouchableOpacity 
            activeOpacity={0.8}
            className="bg-black py-5 rounded-full flex-row justify-center items-center shadow-lg"
          >
            <Text className="text-white text-lg font-bold">Checkout Now</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  );
};

export default CartScreen;