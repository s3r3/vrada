import React, { useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useStore } from "../store/useStore"; // Pastikan path benar

const { width } = Dimensions.get("window");

// --- UI COMPONENTS ---
const BrandLogo = () => (
  <View className="items-center mt-8">
    <Text className="text-white text-[24px] tracking-[10px] font-light">VRADA</Text>
  </View>
);

const GlassPanel = ({ fadeAnim }: { fadeAnim: Animated.Value }) => (
  <Animated.View style={{ opacity: fadeAnim }} className="mx-6 rounded-3xl overflow-hidden">
    <View className="px-8 py-10 items-center">
      <Text className="text-white text-[32px] font-semibold text-center leading-[40px]">
        The most classy{"\n"}fashion shop to{"\n"}meet your needs
      </Text>
      <TouchableOpacity
        activeOpacity={0.85}
        className="mt-10 rounded-full bg-black w-40 h-20 items-center justify-center overflow-hidden"
      >
        <Feather name="arrow-right" size={26} color="white" />
      </TouchableOpacity>
    </View>
  </Animated.View>
);

const SlideOne = ({ fadeAnim }: { fadeAnim: Animated.Value }) => (
  <View style={{ width }} className="flex-1">
    <ImageBackground source={require("../../assets/image/feature.png")} resizeMode="cover" className="flex-1">
      <BlurView intensity={28} tint="light" className="flex-1">
        <SafeAreaView className="flex-1 justify-between">
          <BrandLogo />
          <GlassPanel fadeAnim={fadeAnim} />
          <View className="h-20" />
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  </View>
);

const SlideTwo = () => (
  <View style={{ width }} className="flex-1">
    <ImageBackground source={require("../../assets/image/modern.png")} resizeMode="cover" className="flex-1">
      <View className="absolute inset-0 bg-black/40" />
      <View className="px-8 items-center flex-col flex-1 justify-center gap-20">
        <View className="items-center">
          <Text className="text-white text-[60px] font-bold tracking-[15px]">VRADA</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          className="bg-black w-full py-5 rounded-full shadow-2xl border border-white/10"
        >
          <Text className="text-white text-center text-xl font-bold uppercase tracking-[2px]">Shop Now</Text>
        </TouchableOpacity>
        <Text className="text-white text-[30px] font-bold text-center leading-[48px]">
          The most shop{"\n"}modern essential
        </Text>
      </View>
    </ImageBackground>
  </View>
);

// --- FIXED PAGINATION ---
const PaginationDots = ({ scrollX }: { scrollX: Animated.Value }) => {
  const slides = [0, 1]; // Indeks slide kita

  return (
    <View className="absolute bottom-16 w-full flex-row justify-center items-center gap-3">
      {slides.map((index) => {
        // Dot melebar saat aktif
        const dotWidth = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [10, 32, 10],
          extrapolate: "clamp",
        });

        // Dot lebih terang saat aktif
        const opacity = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index}
            style={{ width: dotWidth, opacity }}
            className="h-2.5 bg-white rounded-full"
          />
        );
      })}
    </View>
  );
};

const FeatureList: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { setActiveIndex } = useStore();

  const slides = [
    { id: "1", component: <SlideOne fadeAnim={fadeAnim} /> },
    { id: "2", component: <SlideTwo /> },
  ];

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false, // Set false jika ingin sinkronisasi state ke store secara real-time
      listener: (event: any) => {
        const offset = event.nativeEvent.contentOffset.x;
        const index = Math.round(offset / width);
        setActiveIndex(index);
      }
    }
  );

  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />

      <Animated.FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => item.component}
      />

      <PaginationDots scrollX={scrollX} />
    </View>
  );
};

export default FeatureList;