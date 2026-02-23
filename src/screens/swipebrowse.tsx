import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useStore } from "../store/useStore";

const { width } = Dimensions.get("window");

const PRODUCTS = [
  { id: "1", image: require("../../assets/image/s.png") },
  { id: "2", image: require("../../assets/image/s2.png") },
  { id: "3", image: require("../../assets/image/s3.png") },
  { id: "4", image: require("../../assets/image/s4.png") },
  { id: "5", image: require("../../assets/image/s5.png") },
];

const HeaderText = () => (
  <View className="px-10 items-center mt-10">
    <Text className="text-white text-[32px] font-bold text-center">
      Swipe to browse
    </Text>
    <Text className="text-white text-center mt-4 text-[16px] leading-6 pb-10">
      Find products easily by sliding from one category to another
    </Text>
  </View>
);

const ProductItem = ({ item, index }: any) => {
  const scrollX = useStore((s) => s.swipeBrowseScrollX);

  const scale = scrollX.interpolate({
    inputRange: [
      (index - 1) * width * 0.7,
      index * width * 0.7,
      (index + 1) * width * 0.7,
    ],
    outputRange: [0.9, 1, 0.9],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{ width: width * 0.7, transform: [{ scale }] }}
      className="px-2"
    >
      <Image
        source={item.image}
        className="w-full h-100 rounded-[30px]"
        resizeMode="cover"
      />
    </Animated.View>
  );
};

const PaginationDots = () => {
  const activeIndex = useStore((s) => s.swipeBrowseActiveIndex);

  return (
    <View className="flex-row justify-center mt-10 gap-2 pb-10">
      {PRODUCTS.map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full ${
            activeIndex === index ? "w-2 bg-white" : "w-2 bg-gray-600"
          }`}
        />
      ))}
    </View>
  );
};

const FooterActions = () => (
  <View className="px-10 items-center">
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-white w-full py-5 rounded-full mb-6"
    >
      <Text className="text-black text-center text-lg font-bold">
        Shop Now
      </Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text className="text-gray-400 text-[14px]">
        Already have account?{" "}
        <Text className="text-white font-bold">Log in</Text>
      </Text>
    </TouchableOpacity>
  </View>
);

const SwipeBrowse: React.FC = () => {
  const scrollX = useStore((s) => s.swipeBrowseScrollX);
  const setActiveIndex = useStore((s) => s.setSwipeBrowseActiveIndex);

  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />

      <View className="absolute inset-0 bg-[#121212]" />

      <ImageBackground
        source={require("../../assets/image/s6.png")}
        resizeMode="cover"
        className="flex-1"
      >
        <BlurView intensity={120} tint="dark" className="flex-1">
          <SafeAreaView className="flex-1 justify-between py-10">
            <HeaderText />

            <View className="gap-20">
              <Animated.FlatList
                data={PRODUCTS}
                renderItem={({ item, index }) => (
                  <ProductItem item={item} index={index} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * 0.7}
                decelerationRate="fast"
                contentContainerStyle={{ paddingHorizontal: width * 0.15 }}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: true },
                )}
                onMomentumScrollEnd={(e) => {
                  const index = Math.round(
                    e.nativeEvent.contentOffset.x / (width * 0.7),
                  );
                  setActiveIndex(index);
                }}
              />

              <PaginationDots />
            </View>

            <FooterActions />
          </SafeAreaView>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default SwipeBrowse;
