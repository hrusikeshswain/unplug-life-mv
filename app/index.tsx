import { useEffect } from "react";
import { router } from "expo-router";
import { getItem } from "@/lib/storage";
import { View, ActivityIndicator } from "react-native";
export default function Index() {
  useEffect(() => {
    getItem("onboarded").then((v) =>
      router.replace(v === "yes" ? "/(tabs)" : "/onboarding"),
    );
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F6FF",
      }}
    >
      <ActivityIndicator color="#7557E8" size="large" />
    </View>
  );
}
