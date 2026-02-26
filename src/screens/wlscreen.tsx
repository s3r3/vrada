import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import BottomTabBar from '../components/bottomTabBar';

// --- DEFINISI TIPE ---
interface ProductItem {
  id: string;
  name: string;
  price: string;
  size: string;
  color: string;
  image: string;
}

// --- DATA MOCKUP (Berdasarkan Gambar) ---
const WISHLIST_ITEMS: ProductItem[] = [
  {
    id: '1',
    name: 'H&M T-shirt',
    price: '$23.55',
    size: 'M',
    color: 'White',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: '2',
    name: 'Vrada Peace Skull',
    price: '$95.22',
    size: 'L',
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400',
  },
  {
    id: '3',
    name: 'Vrada Green Sweater',
    price: '$55.34',
    size: 'L',
    color: 'Green',
    image: 'https://images.unsplash.com/photo-1574167132742-1358046029b7?w=400',
  },
];

const Wlscreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'OnBoard'>('All');

  // --- KOMPONEN ITEM DAFTAR ---
  const renderItem = ({ item }: { item: ProductItem }) => (
    <View className="flex-row px-6 mb-8 items-center">
      {/* Gambar Produk */}
      <View className="rounded-2xl overflow-hidden bg-gray-100">
        <Image 
          source={{ uri: item.image }} 
          className="w-32 h-40" 
          resizeMode="cover" 
        />
      </View>

      {/* Info Produk */}
      <View className="flex-1 ml-6 justify-center">
        <Text className="text-xl font-bold text-[#333] mb-1">{item.name}</Text>
        <Text className="text-lg font-semibold text-gray-500 mb-2">{item.price}</Text>
        
        <View className="flex-row mb-4">
          <Text className="text-gray-400 mr-4">Size : <Text className="text-gray-600">{item.size}</Text></Text>
          <Text className="text-gray-400">Color : <Text className="text-gray-600">{item.color}</Text></Text>
        </View>

        <TouchableOpacity 
          activeOpacity={0.8}
          className="bg-[#4D4D4D] py-3 rounded-full self-start px-8 shadow-sm"
        >
          <Text className="text-white font-bold text-sm">Add to chart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        
        {/* --- CUSTOM HEADER --- */}
        <View className="px-6 py-4 flex-row justify-between items-center">
          <TouchableOpacity>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#333]">Wishlist</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="filter-variant" size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/* --- TAB NAVIGATION --- */}
        <View className="flex-row border-b border-gray-100 mb-4">
          <TouchableOpacity 
            onPress={() => setActiveTab('All')}
            className={`flex-1 py-4 items-center ${activeTab === 'All' ? 'border-b-2 border-black' : ''}`}
          >
            <Text className={`text-lg font-medium ${activeTab === 'All' ? 'text-black' : 'text-gray-400'}`}>
              All Category
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => setActiveTab('OnBoard')}
            className={`flex-1 py-4 items-center ${activeTab === 'OnBoard' ? 'border-b-2 border-black' : ''}`}
          >
            <Text className={`text-lg font-medium ${activeTab === 'OnBoard' ? 'text-black' : 'text-gray-400'}`}>
              On Board
            </Text>
          </TouchableOpacity>
        </View>

        {/* --- FILTER INFO --- */}
        <View className="px-6 py-4 flex-row justify-between items-center">
          <Text className="text-gray-400 font-medium">120 items</Text>
          <TouchableOpacity>
             <MaterialCommunityIcons name="sort-variant" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* --- SCROLLABLE LIST --- */}
        <FlatList
          data={WISHLIST_ITEMS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListFooterComponent={<View className="h-20" />} // Ruang tambahan di bawah
          ItemSeparatorComponent={() => <View className="h-px bg-gray-50 mx-6 mb-8" />}
        />

      </SafeAreaView>

      {/* --- BOTTOM TAB BAR (Opsional/Placeholder) --- */}
      <BottomTabBar active='shop'/>
    </View>
  );
};

export default Wlscreen;