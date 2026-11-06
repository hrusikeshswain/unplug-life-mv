import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Screen } from "@/components/Screen";
import { styles } from "@/constants/theme";
import { getJSON, saveJSON } from "@/lib/storage";
const tasks = [
  [
    "🌅",
    "Start with intention",
    "Before opening an app, take three slow breaths.",
  ],
  [
    "🔕",
    "Quiet one notification",
    "Turn off one non-essential alert for today.",
  ],
  [
    "🚶",
    "Take a screen-free walk",
    "Leave your phone in your pocket for ten minutes.",
  ],
  [
    "🍽️",
    "Make one meal phone-free",
    "Give your attention to the food and company.",
  ],
  [
    "🌿",
    "Notice the urge",
    "When you reach for your phone, pause and name the feeling.",
  ],
  [
    "💬",
    "Choose real connection",
    "Call, message or meet someone with intention.",
  ],
  [
    "🌙",
    "Create a wind-down cue",
    "Put your phone away 20 minutes before sleep.",
  ],
];
export default function Plan() {
  const [completed, setCompleted] = useState<number[]>([]);
  useEffect(() => {
    getJSON<number[]>("tasks", []).then(setCompleted);
  }, []);
  const toggle = async (i: number) => {
    const next = completed.includes(i)
      ? completed.filter((x) => x !== i)
      : [...completed, i];
    setCompleted(next);
    await saveJSON("tasks", next);
  };
  return (
    <Screen>
      <Text style={styles.eyebrow}>A GENTLE RESET</Text>
      <Text style={styles.h1}>7 days to feel more present.</Text>
      <Text style={styles.body}>
        No detox rules. No perfection. Just one small experiment each day.
      </Text>
      <LinearGradient
        colors={["#7055E7", "#A77AE9", "#E69DBB"]}
        style={{ borderRadius: 23, padding: 19, marginTop: 20 }}
      >
        <Text
          style={{
            color: "#F3EFFF",
            fontWeight: "700",
            fontSize: 11,
            letterSpacing: 1,
          }}
        >
          YOUR PROGRESS
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "800",
            marginTop: 5,
          }}
        >
          {completed.length} of 7 days
        </Text>
        <View
          style={{
            height: 7,
            backgroundColor: "#FFFFFF55",
            borderRadius: 8,
            marginTop: 13,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              height: 7,
              width: `${(completed.length / 7) * 100}%`,
              backgroundColor: "white",
              borderRadius: 8,
            }}
          />
        </View>
      </LinearGradient>
      {tasks.map((t, i) => (
        <Pressable
          key={i}
          onPress={() => toggle(i)}
          style={[
            styles.card,
            {
              marginTop: 13,
              marginBottom: 0,
              opacity: completed.includes(i) ? 0.75 : 1,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 13 }}>
            <Text style={{ fontSize: 28 }}>{t[0]}</Text>
            <View style={{ flex: 1 }}>
              <Text
                style={{ fontSize: 10, color: "#7557E8", fontWeight: "800" }}
              >
                DAY {i + 1}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "800",
                  color: "#24213A",
                  marginTop: 3,
                  textDecorationLine: completed.includes(i)
                    ? "line-through"
                    : "none",
                }}
              >
                {t[1]}
              </Text>
              <Text style={styles.caption}>{t[2]}</Text>
            </View>
            <View
              style={{
                width: 27,
                height: 27,
                borderRadius: 14,
                borderWidth: 1.5,
                borderColor: completed.includes(i) ? "#7557E8" : "#D7D2E2",
                backgroundColor: completed.includes(i) ? "#7557E8" : "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "900" }}>
                {completed.includes(i) ? "✓" : ""}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </Screen>
  );
}
