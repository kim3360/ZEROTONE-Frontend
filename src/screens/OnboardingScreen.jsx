import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { View, Text, Image } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/Loding.png")}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            />
          ),
          title: "CLEASHOT",
          subtitle: "CLEAR YOUR SCREENSHOTS",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/upload.png")}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            />
          ),
          title: (
            <Text>
              <Text style={{ color: "#8B5CF6", fontWeight: "bold" }}>스크린샷 업로드</Text>
              로{"\n"}내 갤러리를 더 깔끔하게
            </Text>
          ),
          subtitle: "버튼 하나로 스크린샷 업로드",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/summary.png")}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            />
          ),
          title: "GPT 요약\nAI가 핵심 요점 요약",
          subtitle: "이미지 속 텍스트를 AI로 요약",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
