import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useStore } from "../store/useStore";

interface SocialIconProps {
  name: string;
  delay: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, delay }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const { showSocialIcons } = useStore();

  useEffect(() => {
    if (showSocialIcons) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay: delay,
        useNativeDriver: true,
      }).start();

      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        delay: delay,
        useNativeDriver: true,
      }).start();
    }
  }, [showSocialIcons]);

  return (
    <Animated.View
      style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
    >
      <TouchableOpacity
        className="bg-white w-16 h-16 rounded-2xl justify-center items-center shadow-md shadow-black/20"
        activeOpacity={0.7}
      >
        <FontAwesome5 name={name} size={28} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const LogoSection = ({
  logoOpacity,
  logoTranslate,
}: {
  logoOpacity: Animated.Value;
  logoTranslate: Animated.Value;
}) => (
  <View className="items-center mt-16 flex-1 justify-center textw">
    <Animated.Text
      style={{
        opacity: logoOpacity,
        transform: [{ translateY: logoTranslate }],
        letterSpacing: 12,
      }}
    >
      <Text className="text-white text-7xl font-light pl-3">VRADA</Text>
    </Animated.Text>

    <View className="bg-black/50 px-8 py-2 mt-4 rounded-sm">
      <Text className="text-white text-[10px] tracking-[4px] uppercase text-center font-bold">
        Look different with style
      </Text>
    </View>
  </View>
);

const SignUpButton = () => {
  const { setShowSocialIcons } = useStore();

  const handleSignUpPress = () => {
    setShowSocialIcons(true);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="bg-white py-5 rounded-full items-center shadow-xl mb-10"
      onPress={handleSignUpPress}
    >
      <Text className="text-black text-lg font-bold uppercase tracking-widest">
        Sign up
      </Text>
    </TouchableOpacity>
  );
};

const SocialLoginSection = () => {
  const { showSocialIcons } = useStore();

  if (!showSocialIcons) return null;

  return (
    <View className="items-center">
      <Text className="text-white/80 text-base mb-6 font-medium">
        Or login with
      </Text>

      <View className="flex-row space-x-6 gap-10">
        <SocialIcon name="facebook" delay={800} />
        <SocialIcon name="google" delay={1000} />
        <SocialIcon name="twitter" delay={1200} />
      </View>
    </View>
  );
};

const LandingPage: React.FC = () => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslate = useRef(new Animated.Value(-30)).current;
  const { setLogoAnimationComplete } = useStore();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoTranslate, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setLogoAnimationComplete(true);
    });
  }, []);

  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />

      <ImageBackground
        source={require("../../assets/image/lan.png")}
        className="flex-1 justify-end"
        resizeMode="cover"
      >
        <View className="absolute inset-0 bg-black/20" />

        <SafeAreaView className="flex-1 justify-between py-10">
          <LogoSection
            logoOpacity={logoOpacity}
            logoTranslate={logoTranslate}
          />

          <View className="px-10 pb-20">
            <SignUpButton />
            <SocialLoginSection />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default LandingPage;
