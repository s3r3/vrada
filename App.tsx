import "./global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import LandingPage from "./src/screens/home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FeatureList from "./src/screens/FeaturePage";
import SwipeBrowse from "./src/screens/swipebrowse";
import LoginScreen from "./src/screens/Login/LoginScreen";
import RegisterScreen from "./src/screens/Login/RegisterScreen";
import ForgotPasswordScreen from "./src/screens/Login/ForgotPasswordScreen";
import VerificationScreen from "./src/screens/Login/VerificationScreen";
import HomeScreen from "./src/screens/Collection/collection";
import ProductDetailScreen from "./src/screens/Detail/ProductDetailScreen";
import ExploreScreen from "./src/screens/explore/ExploreScreen";
import ProductListScreen from "./src/screens/explore/ProductListScreen";
import WomensSetScreen from "./src/screens/WomensSetScreen";
import DressDetail from "./src/screens/Detail/Detail";
import ProductDetailTabsScreen from "./src/screens/Detail/ProductDetailTabsScreen";
import ProductDetailScreenColor from "./src/screens/Detail/ProductDetailcolor";
import VisualSearchScreen from "./src/screens/VisualSearchScreen";
import FilterScreen from "./src/screens/fiterScreen";
import WishlistScreen from "./src/screens/wishlistScreen";
import Wlscreen from "./src/screens/wlscreen";
import CartScreen from "./src/screens/CartScreen";

export type RootStackParamList = {
  VisualSearch: undefined;
  WomensSet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="VisualSearch" component={VisualSearchScreen} />
//           <Stack.Screen name="WomensSet" component={WomensSetScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <CartScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
