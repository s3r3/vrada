import { create } from "zustand";
import { Animated } from "react-native";

interface AppState {
  // ===== THEME =====
  theme: "light" | "dark";
  toggleTheme: () => void;

  // ===== AUTH =====
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;

  // ===== ONBOARDING STEP =====
  currentStep: number;
  setStep: (step: number) => void;

  // ===== GLOBAL CAROUSEL (optional kalau dipakai di banyak screen) =====
  activeIndex: number;
  setActiveIndex: (index: number) => void;

  // ===== LANDING PAGE =====
  showSocialIcons: boolean;
  setShowSocialIcons: (show: boolean) => void;

  logoAnimationComplete: boolean;
  setLogoAnimationComplete: (complete: boolean) => void;

  // ===== SWIPE BROWSE SCREEN =====
  swipeBrowseActiveIndex: number;
  setSwipeBrowseActiveIndex: (index: number) => void;

  swipeBrowseAnimationComplete: boolean;
  setSwipeBrowseAnimationComplete: (complete: boolean) => void;

  swipeBrowseScrollX: Animated.Value;

  otpCode: string[];
  setOtpDigit: (index: number, value: string) => void;
  resetOtp: () => void;
}

export const useStore = create<AppState>((set) => ({
  // ===== THEME =====
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),

  // ===== AUTH =====
  isLoggedIn: false,
  setLoggedIn: (status) => set({ isLoggedIn: status }),

  // ===== STEP =====
  currentStep: 0,
  setStep: (step) => set({ currentStep: step }),

  // ===== GLOBAL INDEX =====
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),

  // ===== LANDING =====
  showSocialIcons: false,
  setShowSocialIcons: (show) => set({ showSocialIcons: show }),

  logoAnimationComplete: false,
  setLogoAnimationComplete: (complete) =>
    set({ logoAnimationComplete: complete }),

  // ===== SWIPE BROWSE =====
  swipeBrowseActiveIndex: 0,
  setSwipeBrowseActiveIndex: (index) => set({ swipeBrowseActiveIndex: index }),

  swipeBrowseAnimationComplete: false,
  setSwipeBrowseAnimationComplete: (complete) =>
    set({ swipeBrowseAnimationComplete: complete }),

  swipeBrowseScrollX: new Animated.Value(0),

  otpCode: ["", "", "", ""],
  setOtpDigit: (index, value) =>
    set((state) => {
      const next = [...state.otpCode];
      next[index] = value;
      return { otpCode: next };
    }),

  resetOtp: () => set({ otpCode: ["", "", "", ""] }),
}));
