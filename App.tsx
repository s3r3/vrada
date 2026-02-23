import "./global.css";
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

export default function App() {
  return (
    // flex-1 sangat penting agar konten memenuhi layar
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <VisualSearchScreen/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
