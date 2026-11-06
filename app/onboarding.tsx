import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { saveItem } from "@/lib/storage";
import { styles, colors } from "@/constants/theme";
const ages = ["Under 13", "13–17", "18–24", "25–44", "45–59", "60+"];
const goals = [
  "Feel calmer without my phone",
  "Build healthier screen habits",
  "Be more present with people",
  "Improve focus and sleep",
];
export default function Onboarding() {
  const [age, setAge] = useState("18–24");
  const [goal, setGoal] = useState(goals[0]);
  const finish = async () => {
    await saveItem("onboarded", "yes");
    await saveItem("age", age);
    await saveItem("goal", goal);
    router.replace("/(tabs)");
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.bg,
        padding: 24,
        justifyContent: "center",
      }}
    >
      <LinearGradient
        colors={["#7657E8", "#A77BFA", "#F0A6C8"]}
        style={{
          height: 170,
          borderRadius: 28,
          padding: 24,
          justifyContent: "flex-end",
          marginBottom: 28,
        }}
      >
        <Text style={{ fontSize: 38 }}>🌿</Text>
        <Text style={{ fontSize: 28, fontWeight: "800", color: "white" }}>
          Make room for life.
        </Text>
        <Text style={{ color: "#F5EEFF", fontSize: 14 }}>
          A little less scrolling. A little more living.
        </Text>
      </LinearGradient>
      <Text style={styles.eyebrow}>YOUR JOURNEY STARTS HERE</Text>
      <Text style={styles.h1}>Let’s make this personal.</Text>
      <Text style={styles.body}>
        Choose an age group so we can shape a more relevant experience.
      </Text>
      <Text style={styles.label}>YOUR AGE GROUP</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 9,
          marginBottom: 24,
        }}
      >
        {ages.map((x) => (
          <Pressable
            key={x}
            onPress={() => setAge(x)}
            style={[styles.chip, age === x && styles.chipActive]}
          >
            <Text style={[styles.chipText, age === x && { color: "white" }]}>
              {x}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.label}>WHAT WOULD YOU LIKE TO WORK ON?</Text>
      {goals.map((x) => (
        <Pressable
          key={x}
          onPress={() => setGoal(x)}
          style={[
            styles.option,
            goal === x && {
              borderColor: colors.purple,
              backgroundColor: "#F2EEFF",
            },
          ]}
        >
          <Text style={{ fontSize: 17, marginRight: 12 }}>
            {goal === x ? "🟣" : "⚪"}
          </Text>
          <Text style={styles.optionText}>{x}</Text>
        </Pressable>
      ))}
      <Pressable onPress={finish} style={{ marginTop: 24 }}>
        <LinearGradient colors={["#7156E8", "#A16FEA"]} style={styles.primary}>
          <Text style={styles.primaryText}>Start my journey →</Text>
        </LinearGradient>
      </Pressable>
      <Text style={[styles.caption, { textAlign: "center", marginTop: 14 }]}>
        Your choices stay on this device in this MVP.
      </Text>
    </ScrollView>
  );
}
