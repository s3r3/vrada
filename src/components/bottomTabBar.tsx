import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface BottomTabBarProps {
  active: "shop" | "explore" | "notifications" | "profile";
}

const BottomTabBar = ({ active }: BottomTabBarProps) => {
  const tabs = [
    { key: "shop", icon: "shopping-bag", label: "Shop" },
    { key: "explore", icon: "search", label: "Explore" },
    { key: "notifications", icon: "bell", label: "Notifications" },
    { key: "profile", icon: "user", label: "Profile" },
  ] as const;

  return (
    <View className="absolute bottom-0 w-full bg-white flex-row justify-around py-5 border-t border-gray-100 shadow-lg">
      {tabs.map((tab) => {
        const isActive = active === tab.key;

        return (
          <TouchableOpacity key={tab.key} className="items-center">
            <Feather
              name={tab.icon as any}
              size={26}
              color={isActive ? "black" : "#ccc"}
            />
            {isActive && (
              <Text className="text-[10px] mt-1 font-bold">
                {tab.label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;