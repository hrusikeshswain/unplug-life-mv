import { useEffect, useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Screen } from "@/components/Screen";
import { styles } from "@/constants/theme";
import { getItem, saveItem } from "@/lib/storage";
export default function Profile() {
  const [age, setAge] = useState("18–24");
  const [goal, setGoal] = useState("Feel calmer without my phone");
  useEffect(() => {
    getItem("age").then((x) => x && setAge(x));
    getItem("goal").then((x) => x && setGoal(x));
  }, []);
  return (
    <Screen>
      <Text style={styles.eyebrow}>YOUR SPACE</Text>
      <Text style={styles.h1}>A journey that’s yours.</Text>
      <View style={{ alignItems: "center", marginVertical: 25 }}>
        <View
          style={{
            width: 88,
            height: 88,
            borderRadius: 30,
            backgroundColor: "#EEE9FF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 42 }}>🌼</Text>
        </View>
        <Text style={[styles.h2, { marginTop: 12 }]}>Mindful explorer</Text>
        <Text style={styles.caption}>One step at a time</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>AGE GROUP</Text>
        <Text style={{ fontWeight: "800", fontSize: 16, color: "#24213A" }}>
          {age}
        </Text>
        <Text style={styles.label}>YOUR CURRENT GOAL</Text>
        <Text style={{ fontWeight: "700", fontSize: 14, color: "#24213A" }}>
          {goal}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={{ fontWeight: "800", fontSize: 16, color: "#24213A" }}>
          Privacy first 🔐
        </Text>
        <Text style={styles.body}>
          This starter MVP stores your preferences and reflections locally on
          this device. No account or cloud sync is configured.
        </Text>
      </View>
      <Pressable
        onPress={() =>
          Alert.alert(
            "Your data",
            "Your local MVP data can be cleared by uninstalling the app or clearing app storage. A dedicated in-app delete flow should be added before public launch.",
          )
        }
        style={[styles.option, { justifyContent: "space-between" }]}
      >
        <Text style={styles.optionText}>Privacy & data</Text>
        <Text style={{ color: "#7557E8" }}>›</Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          await saveItem("onboarded", "no");
          Alert.alert(
            "Onboarding reset",
            "Restart the app to see onboarding again.",
          );
        }}
        style={[styles.option, { justifyContent: "space-between" }]}
      >
        <Text style={styles.optionText}>Restart onboarding</Text>
        <Text style={{ color: "#7557E8" }}>›</Text>
      </Pressable>
      <Text style={[styles.caption, { textAlign: "center", marginTop: 12 }]}>
        Unplug Life · MVP preview · Be kind to yourself.
      </Text>
    </Screen>
  );
}
