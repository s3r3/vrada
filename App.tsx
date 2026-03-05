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
import CheckoutShippingScreen from "./src/screens/checkout/CheckoutShippingScreen";
import PaymentMethodScreen from "./src/screens/checkout/PaymentMethodScreen";
import SuccessOrderScreen from "./src/screens/checkout/SuccessOrderScreen";
import ReviewsScreen from "./src/screens/ReviewsScreen";
import ProfileScreen from "./src/screens/profileScreen";

// previous app entry implementations are kept for reference but commented out
// in case you want to revert or switch to a minimal example later.

export type RootStackParamList = {
  Landing: undefined;
  VisualSearch: undefined;
  WomensSet: undefined;
  // add additional routes as you register them
  Home: undefined;
  FeatureList: undefined;
  // ...more screens as required
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Landing" component={LandingPage} />
//         <RegisterScreenStack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="FeatureList" component={FeatureList} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <LoginScreen/>
      </View>
    </SafeAreaProvider>
  );
}
