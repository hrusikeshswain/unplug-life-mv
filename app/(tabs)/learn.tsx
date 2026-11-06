import { useMemo, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Screen } from "@/components/Screen";
import { styles } from "@/constants/theme";
const topics = [
  [
    "🧠",
    "Understand the pull",
    "Why we reach for our phones without thinking.",
    "Mindful habits",
  ],
  [
    "🌙",
    "A softer bedtime",
    "Create a wind-down ritual that feels good.",
    "Sleep",
  ],
  [
    "🫶",
    "Be here, together",
    "Make more space for real-world connection.",
    "Relationships",
  ],
  ["🎯", "Find your focus", "Gentle ways to protect attention.", "Focus"],
  [
    "🌬️",
    "Pause the urge",
    "Try a short reset when you feel the pull.",
    "Mindfulness",
  ],
  [
    "🔔",
    "Make tech work for you",
    "Shape notifications around what matters.",
    "Digital balance",
  ],
];
export default function Learn() {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      topics.filter((x) => x.join(" ").toLowerCase().includes(q.toLowerCase())),
    [q],
  );
  return (
    <Screen>
      <Text style={styles.eyebrow}>THE LEARNING GARDEN</Text>
      <Text style={styles.h1}>Explore a healthier digital life.</Text>
      <Text style={styles.body}>
        Small insights. Practical ideas. No judgement.
      </Text>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Search topics..."
        placeholderTextColor="#A19DAF"
        style={{
          backgroundColor: "white",
          borderRadius: 16,
          padding: 15,
          marginTop: 20,
          borderWidth: 1,
          borderColor: "#EEEAF4",
          color: "#24213A",
        }}
      />
      {filtered.map((x, i) => (
        <Pressable
          key={x[1]}
          style={[styles.card, { marginTop: 13, marginBottom: 0 }]}
        >
          <View style={{ flexDirection: "row", gap: 13, alignItems: "center" }}>
            <View
              style={{
                width: 54,
                height: 54,
                borderRadius: 18,
                backgroundColor: ["#F0ECFF", "#FFF0F5", "#E8F7F1"][i % 3],
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 27 }}>{x[0]}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 10,
                  color: "#7557E8",
                  fontWeight: "800",
                  letterSpacing: 1,
                }}
              >
                {x[3].toUpperCase()}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "800",
                  color: "#24213A",
                  marginTop: 3,
                }}
              >
                {x[1]}
              </Text>
              <Text style={styles.caption}>{x[2]}</Text>
            </View>
            <Text style={{ fontSize: 20, color: "#8B7ACB" }}>›</Text>
          </View>
        </Pressable>
      ))}
      {!filtered.length && (
        <Text style={styles.body}>No topics found. Try another search.</Text>
      )}
    </Screen>
  );
}
